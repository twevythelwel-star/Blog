/* thread.js — renders the signature connection-thread SVG divider */
document.querySelectorAll('.thread-divider').forEach(el => {
  el.innerHTML = `
  <svg width="280" height="28" viewBox="0 0 280 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <!-- left node: human -->
    <circle cx="10" cy="14" r="6" fill="#7c3aed" opacity="0.9"/>
    <circle cx="10" cy="14" r="10" fill="#7c3aed" opacity="0.15"/>
    <!-- thread line -->
    <line x1="22" y1="14" x2="258" y2="14" stroke="#7c3aed" stroke-width="1" stroke-dasharray="4 4" opacity="0.4"/>
    <!-- midpoint pulse -->
    <circle cx="140" cy="14" r="3" fill="#f43f5e" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite"/>
      <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    <!-- right node: AI -->
    <circle cx="270" cy="14" r="6" fill="#f43f5e" opacity="0.9"/>
    <circle cx="270" cy="14" r="10" fill="#f43f5e" opacity="0.15"/>
  </svg>`;
});
