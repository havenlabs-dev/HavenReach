// Highlight active nav link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${entry.target.id}`;
        link.style.color = isActive ? 'white' : '';
      });
    }
  });
}, { threshold: 0.4, rootMargin: '-64px 0px 0px 0px' });

sections.forEach(s => observer.observe(s));

// Hamburger menu
const hamburger = document.querySelector('.nav-hamburger');
const navMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('nav-open');
  navMenu.classList.toggle('nav-open');
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('nav-open');
    navMenu.classList.remove('nav-open');
  });
});
