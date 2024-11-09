let currentIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll(".carousel-slide");
  const totalSlides = slides.length;

  // 更新当前索引
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  // 移动轮播图
  document.querySelector(".carousel-slides").style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 自动播放功能
let autoSlideInterval = setInterval(() => changeSlide(1), 3000);

// 鼠标悬停时暂停轮播，移开时继续
const carousel = document.querySelector(".carousel");
carousel.addEventListener("mouseover", () => clearInterval(autoSlideInterval));
carousel.addEventListener("mouseout", () => {
  autoSlideInterval = setInterval(() => changeSlide(1), 3000);
});
