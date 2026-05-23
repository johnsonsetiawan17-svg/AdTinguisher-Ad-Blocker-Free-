setInterval(() => {
  document.querySelectorAll('[id*="ad" i], [class*="ad" i], [class*="banner" i]').forEach(el => {
    el.style.setProperty('display', 'none', 'important');
  });
}, 1000);
