const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  counter = (counter - 1 + slides.length) % slides.length;
  slideImage();
};

const goNext = () => {
  // Menambahkan pengecekan jika counter mencapai slide terakhir
  if (counter < slides.length - 1) {
    counter = (counter + 1) % slides.length;
    slideImage();
  }
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
