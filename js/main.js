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