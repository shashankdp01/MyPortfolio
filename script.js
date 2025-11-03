const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const themeToggle = document.getElementById('theme-toggle');
const yearEl = document.getElementById('year');

if (yearEl) yearEl.textContent = new Date().getFullYear();

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Theme persistence
const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
const storedTheme = localStorage.getItem('theme');
function applyTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light');
  } else {
    document.body.classList.remove('light');
  }
}
applyTheme(storedTheme || (prefersLight ? 'light' : 'dark'));

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// Basic contact form handler (frontend only placeholder)
const form = document.getElementById('contact-form');
const statusEl = document.querySelector('.form-status');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (!name || !email || !message) {
      if (statusEl) statusEl.textContent = 'Please fill in all fields.';
      return;
    }
    if (statusEl) statusEl.textContent = 'Thanks! Your message has been prepared locally.';
    // Implement an email service or backend endpoint later.
    form.reset();
  });
}


