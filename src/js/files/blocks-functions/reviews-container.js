document.addEventListener("DOMContentLoaded", () => {

	const reviews = document.querySelectorAll('.reviews-container__review-image');

	let currentAnimation;

	function handleMouseEnter(event) {
			const item = event.currentTarget;
			currentAnimation = window.getComputedStyle(item).getPropertyValue('animation');
			item.style.animation = 'none';

			if ( window.innerWidth > 768 ) {
				item.style.transform = 'scale(2.2)';
			} else if ( window.innerWidth <= 768 && window.innerWidth > 500 ) {
				item.style.transform = 'scale(1.5)';
			} else {
				item.style.transform = 'scale(1.3)';
			}
			
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
			item.style.transform = 'scale(1)';

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