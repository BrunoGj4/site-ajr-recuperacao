document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(c => obs.observe(c));
});
