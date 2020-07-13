window.mySwipe = new Swipe(document.getElementById('slider'), {
  startSlide: 0,
  speed: 400,
  auto: 9000,
  draggable: true,
  continuous: true,
  disableScroll: false,
  stopPropagation: false,
  ignore: ".scroller",
  callback: function(index, elem, dir) {},
  transitionEnd: function(index, elem) {}
});

window.mySwipe = new Swipe(document.getElementById('slider'));

$('.main-brands').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    fade: false,
    autoplay: false,
});

$('.brands').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    autoplay: true,
    autoPlaySpeed: 500,
});