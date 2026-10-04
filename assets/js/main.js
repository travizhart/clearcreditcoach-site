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

  // Waitlist form.
  // TODO(Travis): this is a PLACEHOLDER. It does not store emails anywhere; it opens the
  // visitor's email app with a pre-filled message to the address in data-mailto.
  // Replace with a real form backend (e.g. your email-marketing tool's embed form) before launch.
  document.querySelectorAll('form[data-waitlist]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var status = form.parentElement.querySelector('.form-status');
      var email = (input.value || '').trim();
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
      if (!valid) {
        if (status) { status.textContent = 'Please enter a valid email address.'; status.classList.add('is-error'); }
        input.setAttribute('aria-invalid', 'true');
        input.focus();
        return;
      }
      input.removeAttribute('aria-invalid');
      var to = form.getAttribute('data-mailto');
      var subject = 'Clear Credit Coach app waitlist';
      var body = 'Please add me to the Clear Credit Coach app waitlist.\n\nEmail: ' + email;
      window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      if (status) {
        status.classList.remove('is-error');
        status.textContent = 'Your email app should open with a pre-filled message. Just press send to join.';
      }
    });
  });

  // Legal pages: collapse the table of contents on small screens
  var toc = document.querySelector('details.toc');
  if (toc && window.matchMedia('(max-width: 860px)').matches) toc.removeAttribute('open');

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = String(new Date().getFullYear()); });
})();
