// Helper to build HTML for sections
function def(text) { return `<div class="definition-card rounded-lg p-4 mb-3"><p class="text-sm font-medium">${text}</p></div>`; }
function ul(items) { return `<ul class="space-y-1.5 ml-1">${items.map(i => `<li class="flex items-start gap-2 text-sm"><span class="text-brand-400 mt-1 shrink-0">▸</span><span>${i}</span></li>`).join('')}</ul>`; }
function sub(title, items, cls='') { 
  const hdr = title ? `<h4 class="font-semibold text-sm text-gray-600 dark:text-gray-300 uppercase tracking-wide mb-2">${title}</h4>` : '';
  return `<div class="${cls} rounded-lg p-4 mb-3">${hdr}${ul(items)}</div>`; 
}
function adv(items) { return sub('Avantages', items, 'advantage-card'); }
function inc(items) { return sub('Inconvénients', items, 'disadvantage-card'); }
function piege(items) { return `<div class="piege-card rounded-lg p-4 mb-3"><h4 class="font-semibold text-sm text-amber-500 uppercase tracking-wide mb-2 flex items-center gap-1"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/></svg> Piège examen</h4>${ul(items)}</div>`; }
function tbl(headers, rows) {
  return `<div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 mb-3"><table class="w-full text-sm"><thead><tr class="bg-gray-50 dark:bg-surface-700">${headers.map(h => `<th class="px-4 py-2 text-left font-semibold text-xs uppercase tracking-wide">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r,i) => `<tr class="${i%2?'bg-gray-50/50 dark:bg-surface-700/30':''}">${r.map(c => `<td class="px-4 py-2 border-t border-gray-100 dark:border-gray-700/50">${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}
function memo(items) { return `<div class="bg-brand-50 dark:bg-brand-900/20 rounded-lg p-4 mb-3 border border-brand-200 dark:border-brand-800"><h4 class="font-semibold text-sm text-brand-600 dark:text-brand-300 uppercase tracking-wide mb-2 flex items-center gap-1"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/></svg> Mémo</h4>${ul(items)}</div>`; }
function h3(t) { return `<h3 class="text-lg font-bold text-brand-500 dark:text-brand-400 mt-5 mb-2">${t}</h3>`; }
function h4(t) { return `<h4 class="font-semibold mt-4 mb-2">${t}</h4>`; }
function p(t) { return `<p class="text-sm mb-2">${t}</p>`; }

function S(num, id, title, searchText, html) {
  return { num, id, title, searchText, html };
}

window.M201_SECTIONS = [];
window.M205_SECTIONS = [];
function addSections(arr) { window.M201_SECTIONS.push(...arr); }
function addM205Sections(arr) { window.M205_SECTIONS.push(...arr); }
