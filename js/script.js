document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateSliderPosition() {
    const offset = -currentIndex * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
  }

  function goToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSliderPosition();
  }

  function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
  }

  nextBtn.addEventListener("click", goToNextSlide);
  prevBtn.addEventListener("click", goToPrevSlide);

  setInterval(goToNextSlide, 5000);
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
