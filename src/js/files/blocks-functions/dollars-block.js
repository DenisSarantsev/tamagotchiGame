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
	}, 2000)


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
						addAnimationToTopDollars()
						addAnimationToCenterDollars()
						observer.disconnect(); // Зупиняємо нагляд
				}
		});
	}

	// Додаємо анімацію до доларів
	const addAnimationToTopDollars = () => {
		const dollarsWrapper = document.querySelector(".dollars-block__top-dollars-wrapper");
		dollarsWrapper.firstElementChild.style.animation = "slideDownDollarsAnimation12 linear 60s infinite, swayTopDollarsAnimation ease 10s infinite";
	}

	const addAnimationToCenterDollars = () => {
		const centerDollars = document.querySelector(".dollars-block__center-dollars-wrapper").children;
		const animationSwaySpeed = [9.1, 6, 7, 8.2, 6.5, 5.5, 6.3, 7.2, 6.9, 8.7, 7.9];
		const animationDownDollars = [60, 65, 53, 74, 45, 49, 63, 53, 78, 72, 66]
		for ( let i = 1; i <= 11; i++ ) {
			centerDollars[i - 1].style.animation = `slideDownDollarsAnimation${i} linear ${animationDownDollars[i - 1]}s infinite,
																					swayTopDollarsAnimation ease ${animationSwaySpeed[i - 1]}s infinite`;
		}
	}

	const addAnimationToBottomDollars = () => {
		
	}


})




