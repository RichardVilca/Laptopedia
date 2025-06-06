document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  // Inicializamos el índice de la imagen actual y el número total de imágenes
  let currentIndex = 0;
  const totalSlides = slides.length;

  // Función para actualizar la posición del slider
  function updateSliderPosition() {
    // Calculamos la cantidad de desplazamiento necesaria.
    // Cada slide ocupa el 100% del ancho de su contenedor visible.
    // Si estamos en la imagen 0, el desplazamiento es 0%.
    // Si estamos en la imagen 1, el desplazamiento es -100%, y así sucesivamente.
    const offset = -currentIndex * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
  }

  // Función para ir a la siguiente imagen
  function goToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Avanza al siguiente, si llega al final, vuelve al inicio
    updateSliderPosition();
  }

  // Función para ir a la imagen anterior
  function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Retrocede, si llega al inicio, va al final
    updateSliderPosition();
  }

  // Añadimos los event listeners a los botones
  nextBtn.addEventListener("click", goToNextSlide);
  prevBtn.addEventListener("click", goToPrevSlide);

  // Opcional: Autoplay del slider
  // setInterval(goToNextSlide, 5000); // Cambia de imagen cada 5 segundos
});

const footerIframe = document.getElementById("footerIframe");
function adjustFooterIframeHeight() {
  if (
    footerIframe &&
    footerIframe.contentWindow &&
    footerIframe.contentWindow.document.body
  ) {
    const newHeight = footerIframe.contentWindow.document.body.scrollHeight;
    footerIframe.style.height = newHeight + "px";
  }
}
footerIframe.onload = adjustFooterIframeHeight;
window.addEventListener("resize", adjustFooterIframeHeight);
