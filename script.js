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

startSlider();
}