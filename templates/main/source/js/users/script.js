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
    $("html").addClass('fixed');
    return false;
  });
  $(".header__call-phone-button").click(function (event) {
    event.preventDefault();
    $(".callback_popup").css("display", "flex");
    $(".header__overlay").show();
    return false;
  });
  $(".js-modal-close").click(function (event) {
    event.preventDefault();
    $(".popup_container").hide();
    $(".header__overlay").hide();
    $('html').removeClass('fixed')
    return false;
  });
  $(".dropdown-menu__back").click(function (event) {
    $(".header__dropdown-menu ").hide();
    return false;
  });
  $(".header__block_bottom .menu__item")
    .first()
    .click(function (event) {
      if ($(".header__dropdown-menu").css("display") == "none") {
        $(".header__dropdown-menu").show();
        $(".header__overlay").show();
      } else {
        $(".header__dropdown-menu").hide();
        $(".header__overlay").hide();
      }
    });
  $(".header__block_top .menu__item")
    .first()
    .click(function (event) {
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
    if (
      $(this)
      .parent()
      .parent()
      .hasClass("active") == false
    ) {
      $(".menu-footer").removeClass("active");
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
});