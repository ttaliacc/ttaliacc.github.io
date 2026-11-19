const paperThemeButton = document.getElementById('paper-theme-button');
const paperThemeIcon = paperThemeButton.querySelector('i');
const storedTheme = localStorage.getItem('selected-theme');

if (storedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  paperThemeIcon.classList.replace('uil-moon', 'uil-sun');
}

paperThemeButton.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-theme');
  paperThemeIcon.classList.toggle('uil-moon', !isDark);
  paperThemeIcon.classList.toggle('uil-sun', isDark);
  localStorage.setItem('selected-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('selected-icon', isDark ? 'uil-moon' : 'uil-sun');
});

window.addEventListener('load', () => {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (target) target.scrollIntoView();
});
