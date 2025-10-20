let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideCounter = document.getElementById("slideCounter");
const slideSubtitle = document.getElementById("slideSubtitle");
const slideDescription = document.getElementById("slideDescription");

// Descrições para cada slide
const slideDescriptions = [
  "MÃO DE OBRA ESPECIALIZADA",
  "ATUAMOS NOS MAIS DIVERSIFICADOS RAMOS DE INDÚSTRIAS",
  "EXECUÇÃO DE TRABALHO EM ALTURA COM SEGURANÇA",
  "ESTRUTURA DE MADEIRA DE MÉDIOS E GRANDES VÃOES",
];

// Subtítulos para cada slide
const slideSubtitles = ["01 | 04", "02 | 04", "03 | 04", "04 | 04"];

function updateSlide() {
  // Remove a classe 'active' de todos os slides
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // Adiciona a classe 'active' ao slide atual
  slides[currentSlide].classList.add("active");

  // Atualiza o contador de slides
  slideCounter.textContent = `${(currentSlide + 1)
    .toString()
    .padStart(2, "0")} | ${totalSlides.toString().padStart(2, "0")}`;

  // Atualiza o subtítulo
  // slideSubtitle.textContent = slideSubtitles[currentSlide];

  // Atualiza a descrição
  slideDescription.textContent = slideDescriptions[currentSlide];
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlide();
}

// Event listeners para os botões
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Inicializa o slideshow
updateSlide();

// Alterna automaticamente os slides a cada 5 segundos
setInterval(nextSlide, 5000);

// Adiciona navegação por teclado
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevSlide();
  } else if (e.key === "ArrowRight") {
    nextSlide();
  }
});

// Adiciona suporte a toque para dispositivos móveis
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;

  if (touchEndX < touchStartX - swipeThreshold) {
    // Swipe para a esquerda - próximo slide
    nextSlide();
  }

  if (touchEndX > touchStartX + swipeThreshold) {
    // Swipe para a direita - slide anterior
    prevSlide();
  }
}
