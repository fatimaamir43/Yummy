

var swiper = new Swiper('.section-7 .swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
    },
breakpoints: {
   1200: { 
       slidesPerView: 3, // Show 3 slides per view
       centeredSlides: false,
   },
}
  });

  // ------- section 6 js start  ---------- 
  

  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000, // Set the transition speed to 1000ms for smoother sliding
    autoplay: {
      delay: 3000, // Delay between slides in milliseconds
      disableOnInteraction: false, // Keep autoplay running even after user interaction
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      slideChange: function () {
        const slides = document.querySelectorAll(' .myswiper .swiper-slide');
        slides.forEach((slide) => {
          if (slide.classList.contains('.myswiper swiper-slide-active')) {
            slide.style.transform = 'scale(1.05)';
          } else {
            slide.style.transform = 'scale(1)';
          }
        });
      }
    }
  });

  //------------ section 6 js end ------------

//------------------ section 10 js start -------------------
var swiper = new Swiper('.section-10 .swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  autoplay: {
      delay: 4000,
  },
  breakpoints: {
      1200: { 
          slidesPerView: 5,
          centeredSlides: true,
      },
      768: {
          slidesPerView: 3,
          centeredSlides: true,
      }
  }
});


//----------------- section 10 js end ---------------