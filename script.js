function toggleTheme() {
    document.documentElement.toggleAttribute('data-theme', 'dark');
    const currentTheme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? '' : 'dark');
  }
  