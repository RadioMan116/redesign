//Доступный hamburger https://foxland.fi/simple-accessible-svg-menu-hamburger-animation
function hamburger(element, menu) {
  var button = document.getElementById(element),
    menu = document.getElementById(menu);
  button.onclick = function () {
    // Toggle class "opened". Set also aria-expanded to true or false.
    if (-1 !== button.className.indexOf("opened")) {
      button.className = button.className.replace(" opened", "");
      button.setAttribute("aria-expanded", "false");
      menu.className = menu.className.replace(" active", "");
      menu.setAttribute("aria-expanded", "false");
      $("html").removeClass("fixed");
      $(".header__dropdown-menu ").hide();
      $(".header__overlay").hide();
    } else {
      button.className += " opened";
      button.setAttribute("aria-expanded", "true");
      menu.className += " active";
      menu.setAttribute("aria-expanded", "true");
      $("html").addClass("fixed");
    }
  };
}

$(document).ready(function () {
  var mySwiper = new Swiper(".swiper-container-main", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: ".main_next",
      prevEl: ".main_prev"
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar"
    }
  });
  var mySwiper2 = new Swiper(".swiper-container-two", {
    slidesPerView: 4,
    spaceBetween: 27,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination_2",
      clickable: true
    },
    navigation: {
      nextEl: ".special-offers_next",
      prevEl: ".special-offers_prev"
    },
    breakpoints: {
      // when window width is <= 320px
      420: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 0
      },
      // // when window width is <= 480px
      // 480: {
      700: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerGroup: 3,
        slidesPerView: 3
      }
    }
  });
  var mySwiper3 = new Swiper(".swiper-container-three", {
    slidesPerView: 4,
    spaceBetween: 27,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination_3",
      clickable: true
    },
    navigation: {
      nextEl: ".new-items_next",
      prevEl: ".new-items_prev"
    },
    breakpoints: {
      // when window width is <= 320px
      420: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 0
      },
      // // when window width is <= 480px
      // 480: {
      700: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerGroup: 3,
        slidesPerView: 3
      }
    }
  });

  $(".js-header__search").click(function () {
    if ($(".search__popup").hasClass("search__popup-open") == false) {
      $(".header .search__popup").addClass("search__popup-open");
      $(".header__search").addClass("header__search-open");
      $(".header__overlay").addClass("header__overlay-open");
    } else {
      $(".header .search__popup").removeClass("search__popup-open");
      $(".header__search").removeClass("header__search-open");
      $(".header__overlay").removeClass("header__overlay-open");
    }
  });
  $(".header__input").on("input", function () {
    if ($(this).val()) {
      $(".header__button,.header__submit").show();
    } else {
      $(".header__button,.header__submit").hide();
    }
  });
  $(".header__button").click(function () {
    $(".header__input").val("");
    $(this).hide();
  });
  $(".abuse__button").click(function (event) {
    event.preventDefault();
    $(".abuse-popup-container").css("display", "flex");
    $(".header__overlay").show();
    $("html").addClass("fixed");
    return false;
  });
  $(".header__call-phone-button").click(function (event) {
    event.preventDefault();
    $(".callback_popup").css("display", "flex");
    $(".header__overlay").show();
    return false;
  });
  $(".special-offers__buy,.product-card__buy").click(function (event) {
    event.preventDefault();
    $(".added-cart_popup").css("display", "flex");
    $(".header__overlay").show();
    return false;
  });
  $(".js-modal-close").click(function (event) {
    event.preventDefault();
    $(".popup_container").hide();
    $(".header__overlay").hide();
    $("html").removeClass("fixed");
    return false;
  });
  $(".dropdown-menu__back").click(function (event) {
    $(".header__dropdown-menu ").hide();
    return false;
  });
  $(".header__block_bottom .menu__item").first().click(function (event) {
    if ($(".header__dropdown-menu").css("display") == "none") {
      $(".header__dropdown-menu").show();
      $(".header__overlay").show();
    } else {
      $(".header__dropdown-menu").hide();
      $(".header__overlay").hide();
    }
  });
  $(".header__block_top .menu__item").first().click(function (event) {
    if ($(".header__dropdown-menu").css("display") == "none") {
      $(".header__dropdown-menu").show();
      $(".header__overlay").show();
    } else {
      $(".header__dropdown-menu").hide();
      $(".header__overlay").hide();
      $("html").removeClass("fixed");
    }
  });
  $(".dropdown-menu__title").click(function (event) {
    if (
      $(this)
      .parent()
      .parent()
      .hasClass("active") == false
    ) {
      $(".dropdown-menu").removeClass("active");
      $(this)
        .parent()
        .parent()
        .addClass("active");
    } else {
      $(this)
        .parent()
        .parent()
        .removeClass("active");
    }
  });
  $(".menu-footer__title").click(function (event) {
    if ($(this).parent().parent().hasClass("active") == false) {
      $(".menu-footer").removeClass("active");
      $(this).parent().parent().addClass("active");
    } else {
      $(this).parent().parent().removeClass("active");
    }
  });
  $(".tabs__li").click(function (event) {
    event.preventDefault();
    if ($(this).hasClass("active") == false) {
      $(".tabs__li").removeClass("active");
      $(this).addClass("active");
    } else {
      $(".tabs__li").removeClass("active");
      $(this).addClass("active");
    }
  });
  $(".filter__item").click(function (e) {
    if ($(this).hasClass("filter__close") == false) {
      $(this).addClass("filter__close");
    } else {
      $(this).removeClass("filter__close");
    }
  });
  $(".js-characteristic").click(function (event) {
    $(".hide-tabs__characteristic").show();
    $(".hide-tabs__delivery").hide();
  });
  $(".js-delivery").click(function (event) {
    $(".hide-tabs__characteristic").hide();
    $(".hide-tabs__delivery").show();
  });

  // слайдеры для фильтра
  function SetSliders() {
    $("#products-filter div.slider_filter_range").each(function () {
      var handle = $(this);
      var container = handle.parents(".filter-slider-container");
      var inputMin = container.find("input.input_min");
      var inputMax = container.find("input.input_max");

      var min = parseInt(handle.attr("min"));
      var max = parseInt(handle.attr("max"));
      var minVal = parseInt(handle.attr("minval"));
      var maxVal = parseInt(handle.attr("maxval"));

      handle.slider({
        range: true,
        min: min,
        max: max,
        values: [minVal, maxVal],
        slide: function (event, ui) {
          inputMin.val(ui.values[0]);
          inputMax.val(ui.values[1]);
        },
        stop: function () {
          // $('#products-filter').submit();
        }
      });
      inputMin.blur(function () {
        var sliderValues = handle.slider("option", "values");
        // if ($(this).val() != sliderValues[0])
        // $('#products-filter').submit();
      });
      inputMax.blur(function () {
        var sliderValues = handle.slider("option", "values");
        // if ($(this).val() != sliderValues[1])
        // $('#products-filter').submit();
      });
    });
  }
  SetSliders();
  $("#filter_reset").click(function () {
    document.location.href = "";
    return false;
  });
  window.globalPopup = new Popup();

  // $(".js-combox").combox({
  // 	startFn: function(li, index, combox) {

  // 		this.input = combox.getElementsByTagName("input")[0];

  // 		this.input.value = li.getAttribute("value");

  // 	},
  // 	changeFn: function(li, index, combox) {

  // 		var _this = this;

  // 		this.input.value = li.getAttribute("value");

  // 	}
  // });

  hamburger("js-hamburger", "js-menu");

  $("[type=tel]").inputmask("+7 (999) 999-99-99");

  // Прибивка адаптивного футера к низу
  (function (footerSelector, wrapperSelector) {
    var footer = document.querySelector(footerSelector);
    var wrapper = document.querySelector(wrapperSelector);
    var height;
    var setSize;

    if (!wrapper || !footer) {
      return false;
    }

    setSize = function () {
      height = footer.offsetHeight;

      wrapper.style.paddingBottom = height + "px";
      footer.style.marginTop = height * -1 + "px";
    };

    setSize();

    window.addEventListener("resize", setSize, false);
  })("#js-footer", "#js-wrapper");


  var galleryTop = [];
  var galleryThumbs = [];

  $(".gallery-top").each(function (index, element) {
    var $this = $(this);
    galleryTop.push(new Swiper(this, {
      navigation: {
        nextEl: this.querySelector('.swiper-button-next'),
        prevEl: this.querySelector('.swiper-button-prev'),
      },
    }));
  });

  $(".gallery-thumbs").each(function (index, element) {
    var $this = $(this);
    galleryThumbs.push(new Swiper(this, {
      centeredSlides: true,
      spaceBetween: 32,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
    }));
  });

  for (var i = 0; i < galleryTop.length; i++) {
    galleryTop[i].controller.control = galleryThumbs[i];
    galleryThumbs[i].controller.control = galleryTop[i];

  }
});