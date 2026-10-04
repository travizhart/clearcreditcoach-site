/* Clear Credit Coach — tiny progressive-enhancement script (no dependencies). */
(function () {
  document.documentElement.classList.remove('no-js');

  // Mobile navigation toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.focus();
      }
    });
  }

  // Free checklist signup is a MailerLite embedded form (see index.html); no custom JS needed.

  // Legal pages: collapse the table of contents on small screens
  var toc = document.querySelector('details.toc');
  if (toc && window.matchMedia('(max-width: 860px)').matches) toc.removeAttribute('open');

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = String(new Date().getFullYear()); });
})();
