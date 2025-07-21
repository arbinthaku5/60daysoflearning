// script.js
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');

  const isDark = body.classList.contains('dark');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';

  // Save preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
