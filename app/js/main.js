$(function () {

  //anchor
  var StickyElement = function (node) {
    var doc = $(document),
      fixed = false,
      anchor = node.find('.anchor'),
      content = node.find('.menu, .menu__list, .toolbar__link');
    contentAside = node.find('.blog-page__aside-btn, .blog-page__aside, .shop__filters, .blog__aside .aside--active');

    var onScroll = function (e) {
      var docTop = doc.scrollTop(),
        anchorTop = anchor.offset().top;

      console.log('scroll', docTop, anchorTop);
      if (docTop > anchorTop) {
        if (!fixed) {
          anchor.height(content.outerHeight());
          content.addClass('fixed');
          contentAside.addClass('fixedAside');
          fixed = true;
        }
      } else {
        if (fixed) {
          anchor.height(0);
          content.removeClass('fixed');
          contentAside.removeClass('fixedAside');
          fixed = false;
        }
      }
    };

    $(window).on('scroll', onScroll);
  };

  var demo = new StickyElement($('#fixed'));
  var demo2 = new StickyElement($('#fixedAside'));

  $('.filter__btn').on('click', function () {
    $('.filter__btn.active').removeClass('active');
    $(this).addClass('active');
  });

  //styler number
  $('.details__number').styler();

  $(".star-details").rateYo({
    starWidth: "18px",
    spacing: "13px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    "starSvg": '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg - inline--fa fa - star fa - w - 18 " role="img" xmlns="http: //www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>',
  });

  //slick-slider
  $('.top-slider__items').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: 'progressive',
  });

  $('.details-slider__samll').slick({
    asNavFor: '.details-slider__normal',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,
    centerMode: true,
  });

  $('.details-slider__normal').slick({
    asNavFor: '.details-slider__samll',
    focusOnSelect: true,
    draggable: false,
    arrows: false,
    fade: true,
  });

  $('.slider-product__items').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrows-slide-left.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrows-slide-right.svg" alt="next"></button>',
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.slick-arrow').on('click', function () {
    $('.slick-arrow').removeClass('slick-arrow--active');
    $(this).addClass('slick-arrow--active');
  });

  //tab menu
  $('.details__item').on('click', function (e) {
    e.preventDefault();
    $('.details__item').removeClass('details__item--active');
    $(this).addClass('details__item--active');

    $('.details__content-tab').removeClass('details__content-tab--active');
    $($(this).attr('href')).addClass('details__content-tab--active');
  });

  // button toolbar
  const btnBar = document.querySelector('.toolbar__link--bar');
  const menuBar = document.querySelector('.toolbar__link--bar, .toolbar__link--search, .toolbar__link--likes, .toolbar__link--cart, .menu__list');
  const toggleMenuBar = function () {
    menuBar.classList.toggle('menu__btn--active');
  }

  btnBar.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenuBar();
  });

  document.addEventListener('click', function (e) {
    const target = e.targe;
    const its_menuBar = target == menuBar || menuBar.contains(target);
    const its_btnBar = target == btnBar;
    const menu_is_activeBar = menuBar.classList.contains('menu__btn--active');

    if (!its_menuBar && !its_btnBar && menu_is_activeBar) {
      toggleMenuBar();
    }
  });

  // button blog-page
  const btnMenu = document.querySelector('.blog-page__aside-btn');
  const menu = document.querySelector('.blog__aside');
  const toggleMenu = function () {
    menu.classList.toggle('aside--active');
  }

  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener('click', function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains('aside--active');

    if (!its_menu && !its_btnMenu && menu_is_active) {
      toggleMenu();
    }
  });


  document.onkeydown = function (e) {
    if (e.keyCode === 13) {
      document.activeElement.click();
    }
  };

  //ionRangeSlider
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

  //rateYo rating
  $(".star").rateYo({
    starWidth: "12px",
    spacing: "7px",
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

  //hover_effect
  $('.hover').on('touchstart touchend', function (e) {
    e.preventDefault();
    $(this).toggleClass('hover_effect');
  });

});

// Filterizr
// const filterizr = new Filterizr('.filter-container', {
//   controlsSelector: '.fltr-controls',
//   gridItemsSelector: '.filtr-item',
//   spinner: {
//     enabled: true,
//   },
// });

var mixer = mixitup('.product__content');
var mixer = mixitup('.design__content');