var nav = document.querySelector(".site-list");
var toggle = document.querySelector(".main-nav__toggle");

toggle.addEventListener("click", function() {
	console.log("Работает");
	if(nav.classList.contains("site-list--active")) {
		nav.classList.remove("site-list--active");
		console.log("Удалить");
	} else {
		nav.classList.add("site-list--active");
		console.log("Добавить");
	}
});