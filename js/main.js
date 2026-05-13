// ── Nav scroll state ─────────────────────────────────────────
const nav = document.querySelector('nav');

function updateNavState() {
  if (window.scrollY > 10) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateNavState, { passive: true });
updateNavState(); // apply correct state on page load

// ── Mobile navigation menu toggle ────────────────────────────
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpenIcon = document.getElementById('menu-open-icon');
const menuCloseIcon = document.getElementById('menu-close-icon');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', String(!isOpen));
    if (menuOpenIcon) menuOpenIcon.classList.toggle('hidden', isOpen);
    if (menuCloseIcon) menuCloseIcon.classList.toggle('hidden', !isOpen);
  });

  // Close menu when a link inside it is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      if (menuOpenIcon) menuOpenIcon.classList.remove('hidden');
      if (menuCloseIcon) menuCloseIcon.classList.add('hidden');
    });
  });
}

// Values accordion (about page)
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  if (!header) return;

  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Close all items
    accordionItems.forEach(i => {
      i.classList.remove('open');
      const content = i.querySelector('.accordion-content');
      const icon = i.querySelector('.accordion-icon');
      const btn = i.querySelector('.accordion-header');
      if (content) content.style.maxHeight = '0';
      if (icon) icon.textContent = '+';
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });

    // Open the clicked item if it was closed
    if (!isOpen) {
      item.classList.add('open');
      const content = item.querySelector('.accordion-content');
      const icon = item.querySelector('.accordion-icon');
      if (content) content.style.maxHeight = content.scrollHeight + 'px';
      if (icon) icon.textContent = '−';
      header.setAttribute('aria-expanded', 'true');
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
