// Opcional: Alternar entre tipos de rotação
document.addEventListener("DOMContentLoaded", function () {
  const carrosselTrack = document.querySelector(".carrossel-track");

  // Pausar/retomar ao clicar
  carrosselTrack.addEventListener("click", function () {
    const style = window.getComputedStyle(this);
    const animationState = style.getPropertyValue("animation-play-state");

    if (animationState === "paused") {
      this.style.animationPlayState = "running";
    } else {
      this.style.animationPlayState = "paused";
    }
  });
});
