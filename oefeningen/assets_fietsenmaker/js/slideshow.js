
function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`.slideshow .slide`);

	var index = 0, time = 5000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}

document.addEventListener("DOMContentLoaded", function() {
	var slideshows = document.querySelectorAll('.slideshow');
  	slideshows.forEach(initSlideShow);
});