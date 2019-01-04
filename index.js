$(function () {
  // var fullpageEvent = function (index, nextIndex, direction) {
  //   scrollingSpeed: 200
  // }

  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  $('.activity').on('inview', function () {
    $('.activity .container').delay(1000).queue(function () {
      $(this).fadeIn().dequeue();
    });
  });

  $('.interview').on('inview', function () {
    $('.interview .container-2').delay(1000).queue(function () {
      $(this).fadeIn().dequeue();
    });
  });

  $('.story').on('inview', function () {
    $('.story .container').delay(1000).queue(function () {
      $(this).fadeIn().dequeue();
    });
    // $('.story .container').fadeIn();
  });

  $('.schedule').on('inview', function () {
    $('.schedule .container-1').delay(1000).queue(function () {
      $(this).fadeIn().dequeue();
    });
  });

  $('.production').on('inview', function () {
    $('.production .container').delay(1000).queue(function () {
      $(this).fadeIn().dequeue();
    });
  });

  $('.future-vision').on('inview', function () {
    $('.future-vision .container').delay(1000).queue(function () {
      $(this).fadeIn().dequeue();
    });
  })

  $('#fullpage').fullpage({
    normalScrollElementTouchThreshold: 10,
    touchSensitivity: 10,
    fadingEffect: true,
    fitToSectionDelay: 2000
    // scrollingSpeed: 2000
  });

  // console.log()

  // const anim = lottie.loadAnimation({
  //   container: document.getElementById('bodymovin-wrapper'),
  //   render: 'svg',
  //   loop: true,
  //   path: 'loading.json'
  // })
  // anim.play();
});