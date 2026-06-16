const { createApp, ref, computed, onMounted, onUnmounted, watch, nextTick } = Vue;

createApp({
  setup() {
    const darkMode = ref(false);
    const sidebarOpen = ref(window.innerWidth >= 1024);
    const searchQuery = ref('');
    const activeSection = ref('');
    const showBackToTop = ref(false);
    const checked = ref(JSON.parse(localStorage.getItem('m201-checked') || '{}'));
    const collapsed = ref(JSON.parse(localStorage.getItem('m201-collapsed') || '{}'));

    // sections from sections.js
    const allSections = window.M201_SECTIONS || [];
    const totalSections = allSections.length;

    const filteredSections = computed(() => {
      if (!searchQuery.value.trim()) return allSections;
      const q = searchQuery.value.toLowerCase();
      return allSections.filter(s => 
        s.title.toLowerCase().includes(q) || s.searchText.toLowerCase().includes(q)
      );
    });

    const completedSections = computed(() => Object.values(checked.value).filter(Boolean).length);
    const progressPercent = computed(() => totalSections ? Math.round((completedSections.value / totalSections) * 100) : 0);

    function toggleCheck(id) {
      checked.value[id] = !checked.value[id];
      localStorage.setItem('m201-checked', JSON.stringify(checked.value));
    }
    function toggleSection(id) {
      collapsed.value[id] = !collapsed.value[id];
      localStorage.setItem('m201-collapsed', JSON.stringify(collapsed.value));
    }
    function setActive(id) { activeSection.value = id; }
    function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
    function highlight(text) {
      if (!searchQuery.value.trim()) return text;
      const q = searchQuery.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return text.replace(new RegExp(`(${q})`, 'gi'), '<mark>$1</mark>');
    }

    watch(darkMode, (v) => {
      document.documentElement.classList.toggle('dark', v);
      localStorage.setItem('m201-dark', v);
    });

    // Intersection observer for active section tracking
    let observer = null;
    onMounted(() => {
      const savedDark = localStorage.getItem('m201-dark');
      if (savedDark !== null) darkMode.value = savedDark === 'true';
      document.documentElement.classList.toggle('dark', darkMode.value);

      window.addEventListener('scroll', () => { showBackToTop.value = window.scrollY > 400; });
      document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); document.querySelector('input[type=text]')?.focus(); }
      });

      nextTick(() => {
        observer = new IntersectionObserver((entries) => {
          entries.forEach(e => { if (e.isIntersecting) activeSection.value = e.target.id; });
        }, { rootMargin: '-80px 0px -60% 0px' });
        document.querySelectorAll('section[id]').forEach(el => observer.observe(el));
      });
    });

    onUnmounted(() => { if (observer) observer.disconnect(); });

    return { darkMode, sidebarOpen, searchQuery, activeSection, showBackToTop, checked, collapsed,
      filteredSections, totalSections, completedSections, progressPercent,
      toggleCheck, toggleSection, setActive, scrollToTop, highlight };
  }
}).mount('#app');
