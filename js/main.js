new Swiper('.swiper-container.s1', {
  loop:true,
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next.s1',
    prevEl: '.swiper-button-prev.s1',
  },
  pagination: {
    el: '.swiper-pagination.s1'
  },
  mousewheel: true,
  keyboard: true,
});


/* 
var swiper = new Swiper('.swiper-container.s2', {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next.button-s2',
    prevEl: '.swiper-button-prev.button-s2',
  },
});
*/


'use strict';

(function () {

  const catalogCardsSlider = document.querySelector('.swiper-container.second');

  var catalogSliders = function (el) {
      return new Swiper(el, {
          slidesPerView: 4,
          loop: true,
          speed: 1000,
          spaceBetween: 30,
          navigation: {
              nextEl: '.slider-second-btn-next',
              prevEl: '.slider-second-btn-prev',
          },
          breakpoints: {
              280: {
                  slidesPerView: 1,
              },
              560: {
                  slidesPerView: 2,
              },
              1024: {
                  slidesPerView: 3,
              },
              1200: {
                  slidesPerView: 4,
              }
          }
      });
  };

  if (catalogCardsSlider) {
      catalogSliders(catalogCardsSlider);
  }

})();

