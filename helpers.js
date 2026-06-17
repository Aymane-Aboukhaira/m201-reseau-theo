// ═══════════════════════════════════════════════════════════════
// HELPERS — HTML generation for content components
// Awwwards-tier design system
// ═══════════════════════════════════════════════════════════════

function def(text) {
  return `<div class="def-card">${text}</div>`;
}

function ul(items) {
  return `<ul class="content-list">${items.map(i =>
    `<li>${i}</li>`
  ).join('')}</ul>`;
}

function sub(title, items, cls='', labelCls='', icon='') {
  const label = title
    ? `<div class="card-label ${labelCls}">${icon}<span>${title}</span></div>`
    : '';
  return `<div class="${cls}">${label}${ul(items)}</div>`;
}

function adv(items) {
  return sub('Avantages', items, 'adv-card', 'green',
    `<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
  );
}

function inc(items) {
  return sub('Inconvénients', items, 'disadv-card', 'red',
    `<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
  );
}

function piege(items) {
  return `<div class="piege">
    <div class="piege-label">
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/></svg>
      <span>Piège d'examen</span>
    </div>
    ${ul(items)}
  </div>`;
}

function tbl(headers, rows) {
  return `<div class="tbl-wrap"><table>
    <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
    <tbody>${rows.map(r =>
      `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`
    ).join('')}</tbody>
  </table></div>`;
}

function memo(items) {
  return `<div class="memo-block">
    <div class="memo-label">
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/></svg>
      <span>Mémo</span>
    </div>
    ${ul(items)}
  </div>`;
}

function h3(t) { return `<div class="content-h3">${t}</div>`; }
function h4(t) { return `<div class="content-h4">${t}</div>`; }
function p(t)  { return `<p class="content-p">${t}</p>`; }

function S(num, id, title, searchText, html) {
  return { num, id, title, searchText, html };
}

window.M201_SECTIONS = [];
window.M205_SECTIONS = [];
window.M202_SECTIONS = [];
window.M206_SECTIONS = [];
window.M203_SECTIONS = [];
function addSections(arr) { window.M201_SECTIONS.push(...arr); }
function addM205Sections(arr) { window.M205_SECTIONS.push(...arr); }
function addM202Sections(arr) { window.M202_SECTIONS.push(...arr); }
function addM206Sections(arr) { window.M206_SECTIONS.push(...arr); }
function addM203Sections(arr) { window.M203_SECTIONS.push(...arr); }
