const para_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelectorAll('.image-overlay');

para_btns.addEventListener('click', (e) => {
  const p_btn_clicked = e.target;

  p_btn.forEach((curElem) => curElem.classList.remove('p-btn-active'));

  p_btn_clicked.classList.add('p-btn-active');

  const btn_num = p_btn_clicked.dataset.btnNum;

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add('p-image-not-active'));

  img_active.forEach((curElem) =>
    curElem.classList.remove('p-image-not-active')
  );
});

// swiper
new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    // disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// media query for swiper
const mediaSwiper = window.matchMedia('(max-width: 430px)');

const swiperJsMedia = (mediaSwiper) => {
  if (mediaSwiper.matches) {
    new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  } else {
    new Swiper('.mySwiper', {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
};

swiperJsMedia(mediaSwiper);
mediaSwiper.addEventListener('change', swiperJsMedia);

//scroll to top button
const topPage = document.querySelector('.header');
const footerElement = document.querySelector('.section-footer');

const scrollElement = document.createElement('div');
scrollElement.classList.add('scrollTop-style');

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElement.after(scrollElement);

scrollElement.addEventListener('click', () => {
  topPage.scrollIntoView({ behavior: 'smooth' });
});

// animated work counter
const counterNum = document.querySelectorAll('.counter-numbers');
const speed = 200;
counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = Number(curElem.dataset.number);
    const initialNumber = parseInt(curElem.innerText);
    const incrementNum = Math.trunc(targetNumber / speed);

    if (initialNumber < targetNumber) {
      curElem.innerHTML = initialNumber + incrementNum;
      setTimeout(updateNumber, 10);
    }
  };
  updateNumber();
});
