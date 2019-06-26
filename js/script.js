//Открываем окно "Напишите нам" нажатием на кнопку
var write = document.querySelector(".button--write-us");
var writePopup = document.querySelector(".modal--write-us");
var closeWritePopup = writePopup.querySelector(".modal--close");
var fio = writePopup.querySelector("[name=fio]");

write.addEventListener("click", function(evt) {
	evt.preventDefault();
	writePopup.classList.add("modal-show");
	fio.focus();
});

//Закрываем окно
closeWritePopup.addEventListener("click", function(evt) {
	evt.preventDefault();
	writePopup.classList.remove("modal-show");	
});

//Открываем окно "Товар добавлен в корзину" нажатием на любую кнопку "Купить"
var cart = document.querySelectorAll(".button--buy");
var cartPopup = document.querySelector(".modal--added-to-cart");
var closeCartPopup = cartPopup.querySelector(".modal--close");
var closeContinueShopping = cartPopup.querySelector(".button--continue-shopping");

for (var i = 0; i < cart.length; i++) {
	cart[i].addEventListener("click", function(evt) {
		evt.preventDefault();
		cartPopup.classList.add("modal-show");
	});
};

//Закрываем окно
closeCartPopup.addEventListener("click", function(evt) {
	evt.preventDefault();
	cartPopup.classList.remove("modal-show");	
});

closeContinueShopping.addEventListener("click", function(evt) {
	evt.preventDefault();
	cartPopup.classList.remove("modal-show");
});


//Открываем окно с картой нажатием на кнопку
var map = document.querySelector(".big-map");
var mapPopup = document.querySelector(".modal--big-map");
var closeMapPopup = mapPopup.querySelector(".modal--close");

map.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
});

//Закрываем окно
closeMapPopup.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");	
});

//Закрываем все окна по нажатию ESC
document.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		writePopup.classList.remove("modal-show");
		cartPopup.classList.remove("modal-show");
		mapPopup.classList.remove("modal-show");
	}
});

//Пока неработающие табы
var tabs = document.querySelectorAll('.services__item');
var descriptions = document.querySelectorAll('.services__definition-card');

var tabHandler = function (tab, description) {
	tab.addEventListener('click', function () {
		tab.classList.add('services__item--active');
		description.classList.add('services__definition-card--show');
	});
};

for (var i = 0; i < tabs.length; i++) {
	tabHandler(tabs[i], descriptions[i]);
}

