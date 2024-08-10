export function linkMessage() {
	const link = document.querySelectorAll('.message');
	console.log('link: ', link);
	link.forEach((el) => {
		el.addEventListener('click', () => {
			el.classList.add('message-active');

			setTimeout(() => {
				el.classList.remove('message-active');
			}, 2000);
		})
	});
};
linkMessage();