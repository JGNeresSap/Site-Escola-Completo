
document.addEventListener('DOMContentLoaded', () => {
  
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.style.display === 'flex';
      mainNav.style.display = isOpen ? 'none' : 'flex';
    });
  }

  
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          if (window.innerWidth < 768 && mainNav) mainNav.style.display = 'none';
        } else if (href === '#') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  });

  
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const href = btn.getAttribute('href');
      if (!href || href.startsWith('#')) {
      }
    });
  });
});

