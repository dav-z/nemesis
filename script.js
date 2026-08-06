/**
 * Nemesis Foundation - Logo Scroll Animation
 * Expands the logo as the user scrolls down the page.
 */
document.addEventListener('DOMContentLoaded', () => {
  const logoWrapper = document.getElementById('logo-wrapper');
  if (!logoWrapper) return;

  let ticking = false;
  const MAX_SCROLL = 500;
  const MAX_SCALE = 1.75;

  function updateLogoScale() {
    const progress = Math.min(window.scrollY / MAX_SCROLL, 1);
    const eased = 1 - Math.pow(1 - progress, 2);
    logoWrapper.style.transform = `scale(${(1 + eased * (MAX_SCALE - 1)).toFixed(4)})`;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateLogoScale);
      ticking = true;
    }
  }, { passive: true });

  updateLogoScale();
});
