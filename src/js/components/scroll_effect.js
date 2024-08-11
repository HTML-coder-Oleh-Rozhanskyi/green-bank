export function scrollEffect() {
	document.addEventListener('scroll', function () {
		const targetElement = document.querySelector('.design__block-card');

		const elementPosition = targetElement.getBoundingClientRect().top;

		const windowHeight = window.innerHeight;

		const viewportMiddle = windowHeight * 70 / 100;

		if (Math.abs(elementPosition - viewportMiddle) < 10 || elementPosition < viewportMiddle) {
			targetElement.classList.add('active');
		}
	});
};

scrollEffect();

export function scrollEffect_2() {
	document.addEventListener('scroll', function () {
		const targetElement = document.querySelector('.find__block-card');

		const elementPosition = targetElement.getBoundingClientRect().top;

		const windowHeight = window.innerHeight;

		const viewportMiddle = windowHeight * 70 / 100;

		if (Math.abs(elementPosition - viewportMiddle) < 10 || elementPosition < viewportMiddle) {
			targetElement.classList.add('active');
		}
	});
};

scrollEffect_2();






