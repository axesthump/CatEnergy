$before = document.querySelector('.slider__btn--before');
$after = document.querySelector('.slider__btn--after');
$beforeImg = document.querySelector('.slider__img--before');
$afterImg = document.querySelector('.slider__img--after');

before.addEventListener("click", function() {
	afterImg.setAttribute("style", "display:none;");
	beforeImg.setAttribute("style", "display:block;");
});

after.addEventListener("click", function() {
	beforeImg.setAttribute("style", "display:none;");
	afterImg.setAttribute("style", "display:block;");
});