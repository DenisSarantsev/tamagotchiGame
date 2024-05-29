document.addEventListener("DOMContentLoaded", () => {

	const reviews = document.querySelectorAll('.reviews-container__review-image');

	let currentAnimation;

	function handleMouseEnter(event) {
			const item = event.currentTarget;
			item.style.animation = 'none';
			item.style.transform = 'translateZ(300px)';
			currentAnimation = window.getComputedStyle(item).getPropertyValue('animation');

			// Убираем обработчики mouseenter у всех элементов
			reviews.forEach(review => {
					if (review !== item) {
							review.removeEventListener('mouseenter', handleMouseEnter);
					}
			});
	}

	function handleMouseLeave(event) {
			const item = event.currentTarget;
			item.style.animation = currentAnimation;
			item.style.transform = 'translateZ(0px)';

			// Возвращаем обработчики mouseenter ко всем элементам
			reviews.forEach(review => {
					review.addEventListener('mouseenter', handleMouseEnter);
			});
	}

	reviews.forEach(item => {
			item.addEventListener('mouseenter', handleMouseEnter);
			item.addEventListener('mouseleave', handleMouseLeave);
	});
})