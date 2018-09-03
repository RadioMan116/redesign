//Доступный hamburger https://foxland.fi/simple-accessible-svg-menu-hamburger-animation
function hamburger(element, menu) {
	var button = document.getElementById(element),
		menu = document.getElementById(menu);
	button.onclick = function () {
		// Toggle class "opened". Set also aria-expanded to true or false.
		if (-1 !== button.className.indexOf('opened')) {
			button.className = button.className.replace(' opened', '');
			button.setAttribute('aria-expanded', 'false');
			menu.className = menu.className.replace(' active', '');
			menu.setAttribute('aria-expanded', 'false');
		} else {
			button.className += ' opened';
			button.setAttribute('aria-expanded', 'true');
			menu.className += ' active';
			menu.setAttribute('aria-expanded', 'true');
		}
	};
}

$(document).ready(function () {




	var mySwiper = new Swiper('.swiper-container-main', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.main_next',
			prevEl: '.main_prev',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	
	})

	var mySwiper2 = new Swiper('.swiper-container-two', {
		slidesPerView: 4,
		spaceBetween: 27,
		slidesPerGroup: 4,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.special-offers_next',
			prevEl: '.special-offers_prev',
		},
		breakpoints: {
			// when window width is <= 320px
			320: {
			  slidesPerView: 1,
			  spaceBetween: 10
			},
			// when window width is <= 480px
			480: {
			  slidesPerView: 2,
			  spaceBetween: 20
			},
			// when window width is <= 640px
			768: {
			  slidesPerView: 3
			}
		  }
	})
	var mySwiper3 = new Swiper('.swiper-container-three', {
		slidesPerView: 4,
		spaceBetween: 27,
		slidesPerGroup: 4,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.new-items_next',
			prevEl: '.new-items_prev',
		},
		breakpoints: {
			// when window width is <= 320px
			320: {
			  slidesPerView: 1,
			  spaceBetween: 10
			},
			// when window width is <= 480px
			480: {
			  slidesPerView: 2,
			  spaceBetween: 20
			},
			// when window width is <= 640px
			768: {
			  slidesPerView: 3
			}
		  }
	})
	$(".js-header__search").click(function () {
		$('.header .search__popup').toggleClass('search__popup-open');
		$('.header__search').toggleClass('header__search-open');
		$('.header__overlay').toggleClass('header__overlay-open')
	});
	$(".header__input").on('input', function () {
		if ($(this).val()) {
			$(".header__button,.header__submit").show();
		} else {
			$(".header__button,.header__submit").hide();
		}
	});
	$(".header__button").click(function () {
		$(".header__input").val('');
		$(this).hide();
	});
	$('.abuse__button').click(function(event){
		event.preventDefault();
		$('.abuse-popup-container').css('display','flex')
		$('.header__overlay').show()
		return false
	});
	$('.header__call-phone-button').click(function(event){
		event.preventDefault();
		$('.callback_popup').css('display','flex')
		$('.header__overlay').show()
		return false
	});
	$('.js-modal-close').click(function(event){
		event.preventDefault();
		$('.popup_container').hide()
		$('.header__overlay').hide()
		return false
	});
	$('.menu__item').first().click(function(event){
		if ($('.header__dropdown-menu').css("display") == "none") {
			$('.header__dropdown-menu').show()
			$('.header__overlay').show()
		} else {
			$('.header__dropdown-menu').hide()
			$('.header__overlay').hide()
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

	hamburger('js-hamburger', "js-menu");

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

			wrapper.style.paddingBottom = height + 'px';
			footer.style.marginTop = (height * (-1)) + 'px';

		}

		setSize();

		window.addEventListener('resize', setSize, false);

	})('#js-footer', '#js-wrapper');

});