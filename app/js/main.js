$(function () {
  $('.top-slider__items').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });
  
  $('.filter__btn').on('click', function () {
    $('.filter__btn.active').removeClass('active');
    $(this).addClass('active');
  });
  
  var mixer1 = mixitup('.production');
  var mixer2 = mixitup('.design');

});