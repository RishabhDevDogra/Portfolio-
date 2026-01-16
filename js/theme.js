const toggle = document.getElementById('themeToggle');
const html = document.documentElement;

if (localStorage.theme === 'dark') {
  html.classList.add('dark');
  toggle.innerHTML = '☼'; // Change button text to sun
} else {
  toggle.innerHTML = '☾'; // Change button text to moon
}

toggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
  toggle.innerHTML = html.classList.contains('dark') ? '☼' : '☾'; // Update button text
});
