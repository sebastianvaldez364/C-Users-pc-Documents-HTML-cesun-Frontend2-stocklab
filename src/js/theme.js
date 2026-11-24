const STORAGE_KEY = 'stocklab-theme';
const root = document.documentElement;

function applyTheme(theme) {
  root.dataset.bsTheme = theme;
  document.querySelector('#themeToggle')?.setAttribute('aria-pressed', String(theme === 'dark'));
}

export function initThemeToggle() {
  applyTheme(root.dataset.bsTheme ?? 'light');

  document.querySelector('#themeToggle')?.addEventListener('click', () => {
    const next = root.dataset.bsTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  });
}