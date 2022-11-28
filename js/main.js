'use strict';

new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  breakpoints: {
        768: {
          spaceBetween: 57,
        },
      },   
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (n) {
        return '0' + n;
    },
    formatFractionTotal: function (number) {
        return '0'+ number;
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


    
$(".slidetoggle").click(function () {
  $(this).next("dd").slideToggle();
  $(this).toggleClass('open');

});

    
$(".hamburger").click(function () {
  $(".sp-toggle").slideToggle();

});
  
  
