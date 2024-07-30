

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

// -------------counter section js start------------

    document.addEventListener('DOMContentLoaded', () => {
        const counters = document.querySelectorAll('.counter');
        const speed = 200; // Adjust speed as needed

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    if (!counter.classList.contains('animating')) {
                        counter.classList.add('animating');
                        const target = +counter.getAttribute('data-target');
                        const updateCount = () => {
                            const count = +counter.innerText;
                            const increment = target / speed;

                            if (count < target) {
                                counter.innerText = Math.ceil(count + increment);
                                setTimeout(updateCount, 1);
                            } else {
                                counter.innerText = target;
                                counter.classList.remove('animating');
                                observer.unobserve(counter);
                                // Re-observe the counter after a short delay to allow for infinite animation
                                setTimeout(() => observer.observe(counter), 100);
                            }
                        };
                        updateCount();
                    }
                }
            });
        }, {
            threshold: 0.1 // Adjust as needed
        });

        counters.forEach(counter => {
            observer.observe(counter);
        });
    });

