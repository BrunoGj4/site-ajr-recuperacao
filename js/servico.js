// Animação de revelação ao rolar a página
document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  function checkReveal() {
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkReveal);
  checkReveal(); // Verificar na carga inicial
});

const obs = new IntersectionObserver((ents)=>{
    ents.forEach(e => e.isIntersecting && e.target.classList.add('is-in'));
  }, {threshold:.15});

  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
