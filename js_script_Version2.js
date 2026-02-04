// Mobile-Navigations-Umschalter und kleine UI-Hilfen
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  navToggle && navToggle.addEventListener('click', function () {
    mainNav.classList.toggle('open');
  });

  // aktuelles Jahr setzen
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // einfaches Smooth-Scroll für Anker-Links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // mobiles Menü schließen, falls geöffnet
      if (mainNav && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
      }
    });
  });
});