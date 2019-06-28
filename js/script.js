//Открываем окно "Напишите нам" нажатием на кнопку
if (document.querySelector(".button--write-us")) {
	var write = document.querySelector(".button--write-us");
	var writePopup = document.querySelector(".modal--write-us");
	var closeWritePopup = writePopup.querySelector(".modal--close");
	var writeForm = writePopup.querySelector(".modal__form");
	var fio = writePopup.querySelector("[name=fio]");
	var email = writePopup.querySelector("[name=email]");
	var emailText = writePopup.querySelector("[name=email-text]");
	write.addEventListener("click", function (evt) {
		evt.preventDefault();
		writePopup.classList.add("modal-show");
		fio.focus();
	});
	//Манипуляции с формой
	writeForm.addEventListener("submit", function (evt) {
		if (!fio.value || !email.value || !emailText.value) {
			evt.preventDefault();
			writePopup.classList.add("modal-error");
		}
	});
	//Закрываем окно
	closeWritePopup.addEventListener("click", function (evt) {
		evt.preventDefault();
		writePopup.classList.remove("modal-show");
		writePopup.classList.remove("modal-error");
	});
}
//Открываем окно с картой нажатием на кнопку
if (document.querySelector(".big-map")) {
	var map = document.querySelector(".big-map");
	var mapPopup = document.querySelector(".modal--big-map");
	var closeMapPopup = mapPopup.querySelector(".modal--close");
	map.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.add("modal-show");
	});
	//Закрываем окно
	closeMapPopup.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.remove("modal-show");
	});
}
//Открываем окно "Товар добавлен в корзину" нажатием на любую кнопку "Купить"
var cart = document.querySelectorAll(".button--buy");
var cartPopup = document.querySelector(".modal--added-to-cart");
var closeCartPopup = cartPopup.querySelector(".modal--close");
var closeContinueShopping = cartPopup.querySelector(".button--continue-shopping");
var cartIndicator = document.querySelector('.cart__link');
for (var i = 0; i < cart.length; i++) {
	cart[i].addEventListener("click", function (evt) {
		evt.preventDefault();
		cartPopup.classList.add("modal-show");
		cartIndicator.classList.add('cart__link--not-empty');
	});
};
//Закрываем окно
closeCartPopup.addEventListener("click", function (evt) {
	evt.preventDefault();
	cartPopup.classList.remove("modal-show");
});
closeContinueShopping.addEventListener("click", function (evt) {
	evt.preventDefault();
	cartPopup.classList.remove("modal-show");
});
//Перекрашиваем фон "Закладок" при добавлении закладки нажатием любой кнопки "В закладки"
var wishlist = document.querySelectorAll(".button--wishlist");
var wishlistIndicator = document.querySelector('.wishlist__link');
for (var i = 0; i < wishlist.length; i++) {
	wishlist[i].addEventListener("click", function (evt) {
		evt.preventDefault();
		wishlistIndicator.classList.add('wishlist--not-empty');
	});
};
//Закрываем все окна по нажатию ESC
document.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (writePopup.classList.contains("modal-show")) {
			writePopup.classList.remove("modal-show");
			writePopup.classList.remove("modal-error");
		}
		if (cartPopup.classList.contains("modal-show")) {
			cartPopup.classList.remove("modal-show");
		}
		if (mapPopup.classList.contains("modal-show")) {
			mapPopup.classList.remove("modal-show");
		}
	}
});
//Переключаем табы на главной
if (document.querySelector('.services__item')) {
	var tabs = document.querySelectorAll('.services__item');
	var descriptions = document.querySelectorAll('.services__definition-card');

	function removeClass(tab, description) {
		for (var i = 0; i < tab.length; i++) {
			tab[i].classList.remove('services__item--active');
			description[i].classList.remove('services__definition-card--show');
		}
	}

	function tabHandler(tab, description) {
		tab.addEventListener('click', function () {
			removeClass(tabs, descriptions);
			tab.classList.add('services__item--active');
			description.classList.add('services__definition-card--show');
		});
	};
	for (var i = 0; i < tabs.length; i++) {
		tabHandler(tabs[i], descriptions[i]);
	}
}
//Переключаем страницы пагинации
if (document.querySelector('.pagination__link')) {
	var pages = document.querySelectorAll('.pagination__link');

	function removeClass(page) {
		for (var i = 0; i < page.length; i++) {
			page[i].classList.remove('pagination__link--active');
		}
	};

	function pageHandler(page) {
		page.addEventListener('click', function (evt) {
			evt.preventDefault();
			removeClass(pages);
			page.classList.add('pagination__link--active');
		});
	};
	for (var i = 0; i < pages.length; i++) {
		pageHandler(pages[i]);
	}
}
var searchForm = document.querySelector(".search-form__form");
var searchInput = searchForm.querySelector("[name=search]");
var searchButton = searchForm.querySelector(".button--search");
searchInput.addEventListener("click", function (evt) {
	evt.preventDefault();
	searchForm.classList.add("search-form--active");
});