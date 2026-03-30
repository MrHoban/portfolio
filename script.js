/* ================================================================
   script.js
   Portfolio — Scroll-triggered fade-in animations
 
   HOW THIS WORKS:
   1. We select every element with the class "fade-in"
   2. We create an IntersectionObserver — a browser API that
      watches elements and fires a callback when they enter
      or leave the visible area of the screen (the "viewport")
   3. When an element becomes visible, we add the "visible" class
   4. That class triggers the CSS transition defined in style.css
      (.fade-in.visible → opacity: 1, transform: translateY(0))
================================================================ */

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    },
    {
        threshold: 0.15,
    }
);

document.querySelectorAll('.fade-in').forEach((element) => {
  observer.observe(element);
});

// Hamburger menu toggle
const menuBtn = document.querySelector('.nav__menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
  });

  // Close the menu when any nav link is clicked
  document.querySelectorAll('.nav__links a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('nav--open'));
  });
}