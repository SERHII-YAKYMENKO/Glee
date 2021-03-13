$(function () {

$('.details__item').on('click', function (e) {
  e.preventDefault();
  $('.details__item').removeClass('details__item--active');
  $(this).addClass('details__item--active');

  $('.details__content-tab').removeClass('details__content-tab--active');
  $($(this).attr('href')).addClass('details__content-tab--active');
  
});

  $('.details-slide__samll').slick({
    asNavFor: '.details-slide__normal',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $('.details-slide__normal').slick({
    asNavFor: '.details-slide__samll',
    focusOnSelect: true,
    draggable: false,
    arrows: false,
    fade: true,
  });

  $('input, select').styler();

  $('.price__input').ionRangeSlider({
    type: "double",

    onStart: function (data) {
      $('.price__from').text(data.from);
      $('.price__to').text(data.to);
    },
    onChange: function (data) {
      $('.price__from').text(data.from);
      $('.price__to').text(data.to);
    },
  });

  $(".star").rateYo({
    starWidth: "13px",
    spacing: "5px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    "starSvg": '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg - inline--fa fa - star fa - w - 18 " role="img" xmlns="http: //www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
  });

  $(".star-line").rateYo({
    starWidth: "18px",
    spacing: "5px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    "starSvg": '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg - inline--fa fa - star fa - w - 18 " role="img" xmlns="http: //www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
  });

  $(".star-details").rateYo({
    starWidth: "18px",
    spacing: "13px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    "starSvg": '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg - inline--fa fa - star fa - w - 18 " role="img" xmlns="http: //www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
  });

  var StickyElement = function (node) {
    var doc = $(document),
      fixed = false,
      anchor = node.find('.anchor'),
      content = node.find('.menu, .menu__list, .toolbar__link');

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
    // fade: true,
    // respondTo: min,
    // centerMode: true,
    // variableWidth: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
  });

  // $(".top-slider__inner").slick('setPosition');

  $('.filter__btn').on('click', function () {
    $('.filter__btn.active').removeClass('active');
    $(this).addClass('active');
  });

  var mixer1 = mixitup('.production');
  var mixer2 = mixitup('.design');

  document.onkeydown = function (e) {
    if (e.keyCode === 13) {
      document.activeElement.click();
    }
  };

  $('.toolbar__link--bar, .menu a').on('click', function () {
    $('.toolbar__link--bar, .toolbar__link--search, .toolbar__link--likes, .toolbar__link--cart, .menu__list').toggleClass('menu__btn--active');
  });

  $('.hover').on('touchstart touchend', function (e) {
    e.preventDefault();
    $(this).toggleClass('hover_effect');
  });

});