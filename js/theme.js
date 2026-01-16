const toggle = document.getElementById('themeToggle');
const html = document.documentElement;

function applyTheme(isDark, persist = false) {
  if (isDark) {
    html.classList.add('dark');
    toggle.innerHTML = '☼';
    toggle.setAttribute('aria-label', 'Switch to light mode');
    toggle.setAttribute('aria-pressed', 'true');
    if (persist) localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    toggle.innerHTML = '☾';
    toggle.setAttribute('aria-label', 'Switch to dark mode');
    toggle.setAttribute('aria-pressed', 'false');
    if (persist) localStorage.theme = 'light';
  }
}

// Initialize: prefer saved theme, else system preference
const stored = localStorage.getItem('theme');
if (stored === 'dark' || stored === 'light') {
  applyTheme(stored === 'dark');
} else {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark);
}

// Optional: follow system changes if user hasn't explicitly chosen
if (!stored && window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    applyTheme(e.matches);
  });
}

toggle.addEventListener('click', () => {
  const isDark = !html.classList.contains('dark');
  applyTheme(isDark, true);
});
