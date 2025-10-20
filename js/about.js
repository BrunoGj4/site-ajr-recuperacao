// Animação automática ao rolar
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about-container");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("visible");
          observer.unobserve(aboutSection); // só anima uma vez
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(aboutSection);
});
