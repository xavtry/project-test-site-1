// Dark / Light mode toggle
const toggle = document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    toggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
    toggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.setAttribute('data-theme', 'dark');
  toggle.textContent = '☀️';
}
