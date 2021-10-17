const img = document.getElementById('slider-img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const imgArr = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
let imgIndex = 0;
let slideTimer;

function nextImg() {
  clearTimeout(slideTimer);
  if (imgIndex > imgArr.length - 1) {
    imgIndex = 0;
  }
  img.src = `./images/${imgArr[imgIndex]}`;
  img.style.transition = `transform 1s ease`;

  imgIndex++;
  slideTimer = setTimeout(nextImg, 2000);
}

prev.addEventListener('click', () => {
  clearTimeout(slideTimer);
  if (imgIndex === 0) {
    imgIndex = imgArr.length - 1;
  }
  img.src = `./images/${imgArr[imgIndex]}`;
  imgIndex--;
  slideTimer = setTimeout(nextImg, 2000);
});

next.addEventListener('click', nextImg);

nextImg();
