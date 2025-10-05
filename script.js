// script.js
// Modern, safe code: event-driven, input validation, accessible updates.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('si-form');
  const principalEl = document.getElementById('principal');
  const rateEl = document.getElementById('rate');
  const yearsEl = document.getElementById('years');
  const resultEl = document.getElementById('result');
  const resetBtn = document.getElementById('reset');
  const themeToggle = document.getElementById('theme-toggle');

  // Format numbers to 2 decimal places with locale formatting
  function formatAmount(n) {
    return Number(n).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  function showError(message) {
    resultEl.textContent = message;
    resultEl.classList.add('error');
  }

  function clearError() {
    resultEl.classList.remove('error');
  }

  function compute() {
    // parseFloat used to accept decimal input
    const p = parseFloat(principalEl.value);
    const r = parseFloat(rateEl.value);
    const y = parseFloat(yearsEl.value);

    // Validate numbers and non-negative
    if (Number.isNaN(p) || Number.isNaN(r) || Number.isNaN(y)) {
      showError('Please enter numeric values for all fields.');
      return;
    }
    if (p < 0 || r < 0 || y < 0) {
      showError('Please enter non-negative values.');
      return;
    }

    clearError();

    // Simple interest formula: interest = (p * r * y) / 100
    const interest = (p * r * y) / 100;
    const total = p + interest;

    resultEl.innerHTML = `${formatAmount(interest)} (Interest). Total: ${formatAmount(total)}`;
  }

  // handle form submit
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    compute();
  });

  // reset handler
  resetBtn.addEventListener('click', () => {
    form.reset();
    resultEl.textContent = '—';
    resultEl.classList.remove('error');
  });

  // make compute available globally in case someone expects window.compute()
  window.compute = compute;

  /* -----------------------
     Theme toggle (light/dark)
     - persists selection in localStorage
     - respects system preference if no saved choice
     ----------------------- */
  const THEME_KEY = 'si.theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.textContent = isDark ? '🌙 Dark' : '☀️ Light';
    localStorage.setItem(THEME_KEY, theme);
  }

  // Initialize theme
  (function initTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'dark' || stored === 'light') {
      applyTheme(stored);
      return;
    }
    // fallback to system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  })();

  // Toggle handler
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
});
