var nav = document.querySelector(".site-list");
var toggle = document.querySelector(".main-nav__toggle");

toggle.addEventListener("click", function() {
	if(nav.classList.contains("site-list--active")) {
		nav.classList.remove("site-list--active");
	} else {
		nav.classList.add("site-list--active");
	}
});