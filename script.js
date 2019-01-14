window.onload = function () {
var d = document,
	sliderImages = d.querySelectorAll('.slide'),
	arrowLeft = d.querySelector('#arrowLeft'),
	arrowRight = d.querySelector('#arrowRight'),
	current = 0;

// clear all images
function reset() {
	for (var i = 0; i < sliderImages.length; i++) {
		sliderImages[i].style.display = 'none';
	}
}

// init slider
function startSlider() {
	reset();
	sliderImages[0].style.display = 'block';
}

// show prev image
function slideLeft() {
	reset();
	sliderImages[current - 1].style.display = 'block';
	current--;
}

// show next image
function slideRight() {
	reset();
	sliderImages[current + 1].style.display = 'block';
	current++;
}

// click left arrow
arrowLeft.addEventListener('click', function () {
	if (current === 0) {
		current = sliderImages.length;
	}
	slideLeft();
});

// click right arrow
arrowRight.addEventListener('click', function () {
	if (current === sliderImages.length - 1) {
		current = -1;
	}
	slideRight();
});

startSlider();
}