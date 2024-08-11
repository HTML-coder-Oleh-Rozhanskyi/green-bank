export function linkMessage() {
	const link = document.querySelectorAll('.message');


	for (let el of link) {
		el.addEventListener('click', () => {
			const newElement = document.createElement('span');

			newElement.textContent = 'the link is not connected';

			el.appendChild(newElement);

			newElement.classList.add('message-active')

			const rect = newElement.getBoundingClientRect();

			if (rect.right > window.innerWidth) {
				newElement.style.left = "auto";
				newElement.style.right = 0;
			};

			setTimeout(() => {
				newElement.remove();
			}, 2000);



		});
	};
};

linkMessage();