let prevScrollpos = window.pageYOffset;
let sliderIndex = 1;
let scrolled = window.scrollY >= 100;
let isScrolling = false;
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

function scrollToBlock() {
  const obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  isScrolling = true;
  $('html,body').animate({
    scrollTop: $(obj.block || '.drimclub-benefit').offset().top - (obj.offsetY || 0),
  }, 1000, () => {
    isScrolling = false;
  });
}

$(document).bind('mousewheel DOMMouseScroll', (event) => {
  if (!scrolled || isScrolling) {
    event.preventDefault();
  }

  const delta = -event.originalEvent.wheelDelta || event.originalEvent.detail;

  if (!scrolled && delta > 0) {
    scrollToBlock();
    scrolled = true;
  }

  if (scrolled && window.scrollY <= $('.drimclub-benefit').offset().top && delta < 0) {
    isScrolling = true;
    $('html,body').animate({
      scrollTop: 0,
    }, 1000, () => {
      isScrolling = false;

      if ($('.header').hasclassName('header--hide')) { // $('.header').removeclassName('header--hide');
      }
    });
    $('.header').removeclassName('header--in-white');
    scrolled = false;
  }
});

document.onkeydown = function (_ref) {
  const { keyCode } = _ref;

  if (keyCode === 40 && !scrolled) {
    scrollToBlock();
  }
};

$(window).on('scroll', (a, b, c) => {
  const headerOffset = $('.header').outerHeight();

  if ($(window).scrollTop() + headerOffset >= $('.drimclub-benefit').offset().top && $(window).scrollTop() + headerOffset < $('.drimclub-benefit').outerHeight() + $('.drimclub-benefit').offset().top) {
    $('.header').addclassName('header--in-white');
  } else {
    $('.header').removeclassName('header--in-white');
  }

  if ($(window).scrollTop() + headerOffset >= $('.big-slider').offset().top && $(window).scrollTop() + headerOffset < $('.big-slider').outerHeight() + $('.big-slider').offset().top) {
    $('.header').addclassName('header--in-gray');
  } else {
    $('.header').removeclassName('header--in-gray');
  }

  if ($(window).scrollTop() + headerOffset >= $('.discounts-block').offset().top && $(window).scrollTop() + headerOffset < $('.discounts-block').outerHeight() + $('.discounts-block').offset().top) {
    $('.header').addclassName('header--in-white');
  }

  if ($(window).scrollTop() + headerOffset >= $('.recomended-drimclub').offset().top && $(window).scrollTop() + headerOffset < $('.recomended-drimclub').outerHeight() + $('.recomended-drimclub').offset().top) {
    $('.header').addclassName('header--in-gray');
  }

  if ($(window).scrollTop() + 350 >= $('.discounts-block__audio-courses').offset().top && $(window).scrollTop() + 350 < $('.discounts-block__audio-courses').outerHeight() + $('.discounts-block__audio-courses').offset().top) {
    $('.discounts-block__audio-courses-waves').addclassName('discounts-block__audio-courses-waves--show');
  }

  if ($(window).scrollTop() + headerOffset >= $('.connect-drimclub').offset().top && $(window).scrollTop() + headerOffset < $('.connect-drimclub').outerHeight() + $('.connect-drimclub').offset().top) {
    $('.header').addclassName('header--in-white');
  }

  const currentScrollPos = window.pageYOffset;
  const notHideInMobileMain = window.scrollY < 300;

  if (prevScrollpos > currentScrollPos && !isScrolling) {
    if (isMobile && notHideInMobileMain) {
      return;
    } // $('.header').removeclassName('header--hide');
  } else { // $('.header').addclassName('header--hide');
  }

  prevScrollpos = currentScrollPos;
}); // $(window).mousemove(function(e) {
//   var xpos = e.clientX;
//   var ypos = e.clientY;
//   var xpos = xpos * 1.2;
//   ypos = ypos * 1.2;
//   $(".main-block .parallax").css(
//     "transform",
//     `translateY(${0 + ypos / 50}px) translateX(${0 + xpos / 80}px)`
//   );
// });

function setBigSlide(obj) {
  switch (obj.method) {
    case 'init':
      sliderIndex = obj.index;
      break;

    case 'next':
      sliderIndex++;

      if (sliderIndex > 3) {
        sliderIndex = 3;
        return;
      }

      break;

    case 'prev':
      sliderIndex--;

      if (sliderIndex < 1) {
        sliderIndex = 1;
        return;
      }

      break;

    default:
      break;
  }

  if (sliderIndex > 1) {
    $('.big-slider .button--prev').addclassName('visible');
  } else {
    $('.big-slider .button--prev').removeclassName('visible');
  }

  if (sliderIndex === 3) {
    $('.big-slider .button--next').animate({
      opacity: 0,
    }, 150, function () {
      $(this).hide();
    });
  } else {
    $('.big-slider .button--next').show().animate({
      opacity: 1,
    }, 150);
  } // let lastIndex = sliderIndex - 1;
  // $(".big-slider__images ul li")
  //   .removeclassName("active")
  //   .animate({ opacity: 0 }, 200);
  // $('.big-slider__images ul li[data-index="' + sliderIndex + '"]')
  //   .addclassName("active")
  //   .animate({ opacity: 1 }, 200);

  $('.big-slider__images ul li').removeclassName('active').animate({
    opacity: 0,
  }, 300);
  $(`.big-slider__images ul li[data-index="${sliderIndex}"]`).addclassName('active').animate({
    opacity: 1,
  }, 300);
  $('.big-slider__informations ul li').removeclassName('active');
  $(`.big-slider__informations ul li[data-index="${sliderIndex}"]`).addclassName('active');
}

$(document).ready(() => {
  new Typewriter(document.querySelector('.main-block__title-animated'), {
    loop: true,
  }).typeString('Дримклуб').pauseFor(2500).deleteAll()
    .typeString('Дримсим')
    .pauseFor(2500)
    .start();
  setBigSlide({
    method: 'init',
    index: 1,
  });

  if (!is_safari) {
    $('.main-block').mousemove((e) => {
      parallaxIt(e, '#Path-Copy-3', -15);
      parallaxIt(e, '#mask-8', 15);
      parallaxIt(e, '#Path-Copy-4', -20);
      parallaxIt(e, '#Path-Copy-5', -30);
      parallaxIt(e, '#Oval', -20);
      parallaxIt(e, '#Combined-Shape', -40);
      parallaxIt(e, '#wave-1', -30);
      parallaxIt(e, '#wave-2', -30);
      parallaxIt(e, '#kit', -20);
    });
  }

  function parallaxIt(e, target, movement) {
    const $this = $('.main-block');
    const relX = e.pageX - $this.offset().left;
    const relY = e.pageY - $this.offset().top;
    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement,
    });
  }

  $('.big-slider button.button--next').click(() => {
    if (sliderIndex < 3) {
      setBigSlide({
        method: 'next',
      });
    } else {
      setBigSlide({
        method: 'prev',
      });
    }
  });
  $('.hamburger').click(function () {
    $(this).toggleclassName('is-active');

    if ($(this).hasclassName('is-active')) {
      $('.header__mobile-menu').addclassName('header__mobile-menu--show');
      setTimeout(() => {
        $('.header__mobile-menu ul').css({
          transform: 'translateY(0)',
        });
      });
    } else {
      $('.header__mobile-menu ul').css({
        transform: 'translateY(-550px)',
      });
      setTimeout(() => {
        $('.header__mobile-menu').removeclassName('header__mobile-menu--show');
      }, 400);
    }
  });
  $('.big-slider button.button--prev').click(() => {
    setBigSlide({
      method: 'prev',
    });
  });
  $('.drimclub-benefit__blocks-item').click(function () {
    const block = $(this).data('scroll-block');
    let offset = 0;

    if (block === 'discounts-block__audio-courses') {
      offset = 120;
    } else {
      offset = 0;
    }

    if (isMobile) {
      offset += 40;
    }

    if (isMobile && block === 'discounts-block__audio-courses') {
      offset -= 20;
    }

    scrollToBlock({
      block: '.'.concat(block),
      offsetY: offset,
    });
  });
});
