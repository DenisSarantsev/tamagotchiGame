document.addEventListener("DOMContentLoaded", () => {
	const blockContent = document.querySelector(".dollars-block__content");

	// Створюємо об'єкт спостереження
	setTimeout(() => {
		const target = document.querySelector(".dollars-block__content");
		const observer = new IntersectionObserver(onVisibilityChange, {
				root: null, 
				rootMargin: '0px',
				threshold: 1.0 // Виконуємо функцію, коли 100: елемента буде в зоні в'юпорту
		});
		observer.observe(target);
	}, 1000)


	// Виконуємо дії, коли об'єкт потрапляє у поле зору
	function onVisibilityChange(entries, observer) {
		entries.forEach(entry => {
				if (entry.isIntersecting) {
						// Виконуємо функції:
						blockContent.classList.remove("_hidden");
						setTimeout(() => {
							blockContent.style.opacity = "1";
						}, 200)
						console.log("watch")
						observer.disconnect(); // Зупиняємо нагляд
				}
		});
	}




	// Функціонал кнопки
	const hoverAndActivePlayButton = () => {
		const defaultPlayButton = document.querySelector(".dollars-block__button-default");
		const hoverPlayButton = document.querySelector(".dollars-block__button-hover");
		const activePlayButton = document.querySelector(".dollars-block__button-active");
		const playButtonBlock = document.querySelector(".dollars-block__play-button");
		
		playButtonBlock.addEventListener("mouseenter", () => {
			defaultPlayButton.classList.add("_hidden");
			hoverPlayButton.classList.remove("_hidden");
			activePlayButton.classList.add("_hidden");
		})
		playButtonBlock.addEventListener("mouseleave", () => {
			defaultPlayButton.classList.remove("_hidden");
			hoverPlayButton.classList.add("_hidden");
			activePlayButton.classList.add("_hidden");
		})
		playButtonBlock.addEventListener("mousedown", () => {
			defaultPlayButton.classList.add("_hidden");
			hoverPlayButton.classList.add("_hidden");
			activePlayButton.classList.remove("_hidden");
		})
		playButtonBlock.addEventListener("mouseup", () => {
			defaultPlayButton.classList.add("_hidden");
			hoverPlayButton.classList.remove("_hidden");
			activePlayButton.classList.add("_hidden");
		})
	}
	hoverAndActivePlayButton();

	// const effectBgImagesArray = document.querySelectorAll(".effect-bg-img");

	// // Визначаємо розмір зображень
	// const changeImagesSize = (sizeImg, viewportWidth, effectBgImagesArray) => {
	// 	viewportWidth >= 1900 ? sizeImg = 1 : null;
	// 	viewportWidth < 1900 && viewportWidth > 1440 ? sizeImg = 0.9 : null;
	// 	viewportWidth <= 1440 && viewportWidth > 1200 ? sizeImg = 0.85 : null;
	// 	viewportWidth <= 1200 && viewportWidth > 1100 ? sizeImg = 0.75 : null;
	// 	viewportWidth <= 1100 && viewportWidth > 992 ? sizeImg = 0.65 : null;
	// 	viewportWidth < 992 ? sizeImg = 0.55 : null;

	// 	for ( let item of effectBgImagesArray ) {
	// 		const originalWidth = item.naturalWidth; // Исходная ширина изображения
	// 		const newWidth = originalWidth * sizeImg; // 90% от исходной ширины
	// 		item.style.width = newWidth + 'px'; // Устанавливаем новую ширину
	// 	}
	// }

	// // Зменшуємо фонові зображення при зменшенні екрану
	// const bigToSmallBgImages = () => {
		
	// 	let viewportWidth = window.innerWidth;
	// 	let sizeImg = 1;
	// 	changeImagesSize(sizeImg, viewportWidth, effectBgImagesArray);
		
	// 	window.addEventListener("resize", () => {
	// 		viewportWidth = window.innerWidth;
	// 		changeImagesSize(sizeImg, viewportWidth, effectBgImagesArray)
	// 	})
	// }
	// bigToSmallBgImages()

})




