$(document).ready(function () {
  $('.slider-first').slick({
    autoplay: false,
    autoplaySpeed: 1000000,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    prevArrow: '<img src="img/icons/left.png" alt="prev" class="slick-prev">',
    nextArrow: '<img src="img/icons/right.png" alt="prev" class="slick-next">'
  });
});