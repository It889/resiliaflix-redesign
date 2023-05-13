const carousel = document.querySelector('.carousel-inner');
let position = 0;

function slideNext() {
  position -= 25;
  if (position < -75) {
    position = 0;
  }
  carousel.style.transform = `translateX(${position}%)`;
}

setInterval(slideNext, 3000); // Altere o tempo aqui (em milissegundos) para definir a velocidade do carrossel