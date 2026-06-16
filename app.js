// ═══════════════════════════════════════════════════════════════
// APP.JS — Vue 3 Composition API
// Awwwards-tier interactive platform with Detail Panel
// ═══════════════════════════════════════════════════════════════

const { createApp, ref, computed, onMounted, onUnmounted, watch, nextTick } = Vue;

createApp({
  setup() {
    // ─── State ───
    const activeModule = ref(localStorage.getItem('m20x-activeModule') || 'M201');
    const lightMode = ref(false);
    const menuOpen = ref(false);
    const searchQuery = ref('');
    const showBackToTop = ref(false);
    const scrollProgress = ref(0);
    const openSection = ref(null);
    const panelBody = ref(null);

    const m201Checked = ref(JSON.parse(localStorage.getItem('m201-checked') || '{}'));
    const m201Collapsed = ref(JSON.parse(localStorage.getItem('m201-collapsed') || '{}'));
    const m205Checked = ref(JSON.parse(localStorage.getItem('m205-checked') || '{}'));
    const m205Collapsed = ref(JSON.parse(localStorage.getItem('m205-collapsed') || '{}'));

    const revealEls = ref({});

    // ─── Computed ───
    const allSections = computed(() =>
      activeModule.value === 'M201' ? (window.M201_SECTIONS || []) : (window.M205_SECTIONS || [])
    );
    const checked = computed(() =>
      activeModule.value === 'M201' ? m201Checked.value : m205Checked.value
    );
    const collapsed = computed(() =>
      activeModule.value === 'M201' ? m201Collapsed.value : m205Collapsed.value
    );
    const totalSections = computed(() => allSections.value.length);
    const completedSections = computed(() =>
      Object.values(checked.value).filter(Boolean).length
    );
    const progressPercent = computed(() =>
      totalSections.value ? Math.round((completedSections.value / totalSections.value) * 100) : 0
    );
    const filteredSections = computed(() => {
      if (!searchQuery.value.trim()) return allSections.value;
      const q = searchQuery.value.toLowerCase();
      return allSections.value.filter(s =>
        s.title.toLowerCase().includes(q) || s.searchText.toLowerCase().includes(q)
      );
    });

    // ─── Panel Navigation ───
    const currentIndex = computed(() => {
      if (!openSection.value) return -1;
      return allSections.value.findIndex(s => s.id === openSection.value.id);
    });
    const canGoPrev = computed(() => currentIndex.value > 0);
    const canGoNext = computed(() => currentIndex.value < allSections.value.length - 1);

    function openPanel(sec) {
      openSection.value = sec;
      document.body.classList.add('panel-open');
      nextTick(() => {
        if (panelBody.value) panelBody.value.scrollTop = 0;
      });
    }
    function closePanel() {
      openSection.value = null;
      document.body.classList.remove('panel-open');
    }
    function goPrev() {
      if (canGoPrev.value) {
        openSection.value = allSections.value[currentIndex.value - 1];
        nextTick(() => { if (panelBody.value) panelBody.value.scrollTop = 0; });
      }
    }
    function goNext() {
      if (canGoNext.value) {
        openSection.value = allSections.value[currentIndex.value + 1];
        nextTick(() => { if (panelBody.value) panelBody.value.scrollTop = 0; });
      }
    }

    // ─── Actions ───
    function toggleCheck(id) {
      checked.value[id] = !checked.value[id];
      const key = activeModule.value === 'M201' ? 'm201-checked' : 'm205-checked';
      localStorage.setItem(key, JSON.stringify(checked.value));
    }
    function toggleSection(id) {
      collapsed.value[id] = !collapsed.value[id];
      const key = activeModule.value === 'M201' ? 'm201-collapsed' : 'm205-collapsed';
      localStorage.setItem(key, JSON.stringify(collapsed.value));
    }
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function highlight(text) {
      if (!searchQuery.value.trim()) return text;
      const q = searchQuery.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return text.replace(new RegExp(`(${q})`, 'gi'), '<mark>$1</mark>');
    }

    // ─── Card glow effect ───
    function handleCardGlow(e, idx) {
      const el = revealEls.value[idx];
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
      el.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
    }

    // ─── Watchers ───
    watch(activeModule, (v) => {
      localStorage.setItem('m20x-activeModule', v);
      searchQuery.value = '';
      closePanel();
      window.scrollTo(0, 0);
    });
    watch(lightMode, (v) => {
      document.body.classList.toggle('light-mode', v);
      localStorage.setItem('m20x-light', v);
    });

    // ─── Lifecycle ───
    let revealObserver = null;
    let cursorRAF = null;
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0, ringX = 0, ringY = 0;

    onMounted(() => {
      // Restore light mode
      const savedLight = localStorage.getItem('m20x-light');
      if (savedLight !== null) lightMode.value = savedLight === 'true';
      document.body.classList.toggle('light-mode', lightMode.value);

      // Scroll listener
      window.addEventListener('scroll', () => {
        showBackToTop.value = window.scrollY > 500;
        const docH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        scrollProgress.value = docH > 0 ? (window.scrollY / docH) : 0;
      });

      // Keyboard shortcuts
      document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          document.querySelector('.search-box input')?.focus();
        }
        if (e.key === 'Escape') {
          if (openSection.value) closePanel();
          else menuOpen.value = false;
        }
        // Arrow keys for panel navigation
        if (openSection.value) {
          if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); goPrev(); }
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); goNext(); }
        }
      });

      // ─── Custom Cursor ───
      const dot = document.querySelector('.cursor-dot');
      const ring = document.querySelector('.cursor-ring');
      if (dot && ring && window.matchMedia('(hover: hover)').matches) {
        document.addEventListener('mousemove', (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
        });
        function animateCursor() {
          dotX += (mouseX - dotX) * 0.35;
          dotY += (mouseY - dotY) * 0.35;
          dot.style.left = (dotX - 4) + 'px';
          dot.style.top = (dotY - 4) + 'px';
          ringX += (mouseX - ringX) * 0.12;
          ringY += (mouseY - ringY) * 0.12;
          ring.style.left = (ringX - 18) + 'px';
          ring.style.top = (ringY - 18) + 'px';
          cursorRAF = requestAnimationFrame(animateCursor);
        }
        animateCursor();
      }

      // ─── Scroll Reveal ───
      nextTick(() => {
        revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
          });
        }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
        setTimeout(() => {
          document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
        }, 100);
      });
    });

    onUnmounted(() => {
      if (revealObserver) revealObserver.disconnect();
      if (cursorRAF) cancelAnimationFrame(cursorRAF);
    });

    // Re-observe when module changes
    watch(activeModule, () => {
      nextTick(() => {
        setTimeout(() => {
          document.querySelectorAll('.reveal').forEach(el => {
            el.classList.remove('visible');
            if (revealObserver) revealObserver.observe(el);
          });
        }, 100);
      });
    });

    return {
      activeModule, lightMode, menuOpen, searchQuery, showBackToTop, scrollProgress,
      openSection, panelBody,
      checked, collapsed, revealEls,
      allSections, filteredSections, totalSections, completedSections, progressPercent,
      canGoPrev, canGoNext,
      toggleCheck, toggleSection, scrollToTop, highlight, handleCardGlow,
      openPanel, closePanel, goPrev, goNext
    };
  }
}).mount('#app');
