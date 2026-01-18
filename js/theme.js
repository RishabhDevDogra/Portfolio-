const toggle = document.getElementById('themeToggle');
const html = document.documentElement;

function applyTheme(isDark, persist = false) {
  if (isDark) {
    html.classList.add('dark');
    toggle.innerHTML = '☼';
    toggle.setAttribute('aria-label', 'Switch to light mode');
    toggle.setAttribute('aria-pressed', 'true');
    if (persist) localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    toggle.innerHTML = '☾';
    toggle.setAttribute('aria-label', 'Switch to dark mode');
    toggle.setAttribute('aria-pressed', 'false');
    if (persist) localStorage.setItem('theme', 'light');
  }
}

// Initialize: check if already set by head script, just sync the icon
const currentTheme = localStorage.getItem('theme');
const isDarkMode = html.classList.contains('dark');

// Make sure icon matches current state
if (isDarkMode) {
  toggle.innerHTML = '☼';
  toggle.setAttribute('aria-label', 'Switch to light mode');
  toggle.setAttribute('aria-pressed', 'true');
} else {
  toggle.innerHTML = '☾';
  toggle.setAttribute('aria-label', 'Switch to dark mode');
  toggle.setAttribute('aria-pressed', 'false');
}

// Toggle on click
toggle.addEventListener('click', () => {
  const isDark = !html.classList.contains('dark');
  applyTheme(isDark, true);
});

