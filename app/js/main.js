$(function () {

   //for menu anchor
   var StickyElement = function (node) {
     var doc = $(document),
       fixed = false,
       anchor = node.find('.anchor'),
       content = node.find('.menu');

     var onScroll = function (e) {
       var docTop = doc.scrollTop(),
         anchorTop = anchor.offset().top;

       console.log('scroll', docTop, anchorTop);
       if (docTop > anchorTop) {
         if (!fixed) {
           anchor.height(content.outerHeight());
           content.addClass('fixed');
           fixed = true;
         }
       } else {
         if (fixed) {
           anchor.height(0);
           content.removeClass('fixed');
           fixed = false;
         }
       }
     };

     $(window).on('scroll', onScroll);
   };

   var demo = new StickyElement($('#fixed'));


  
  $('.top-slider__items').slick({
    dots: true,
    arrows: false,
    fade: true,
    // autoplay: true,
    // autoplaySpeed: 3000
  });
  
  $('.filter__btn').on('click', function () {
    $('.filter__btn.active').removeClass('active');
    $(this).addClass('active');
  });
  
  // var mixer1 = mixitup('.production');
  // var mixer2 = mixitup('.design');

  document.onkeydown = function (e) {
    if (e.keyCode === 13) {
      document.activeElement.click();
    }
  };

  // $('.menu__btn, .menu a').on('click', function () {
  //   $('.header__top').toggleClass('header__top--active');
  // });


});