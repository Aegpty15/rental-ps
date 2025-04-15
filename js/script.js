console.log("Website Rental PS siap digunakan!");
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide(index) {
  slides.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) img.classList.add('active');
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

if (slides.length > 0) {
  showSlide(currentSlide);
  setInterval(nextSlide, 6000);
}
