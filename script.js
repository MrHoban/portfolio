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