document.addEventListener("DOMContentLoaded", () => {
	const blockContent = document.querySelector(".jackpot-block");
	const rotateWheel = document.querySelector(".wheel__wheel-image");
	const rotateEggs = document.querySelector(".eggs-rotate");
	const bigSparks = document.querySelectorAll(".spark");
	const smallSparks = document.querySelectorAll(".shadow-spark");

	// Створюємо об'єкт спостереження
	setTimeout(() => {
		const target = document.querySelector(".jackpot-block");
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
						rotateWheel.style.animation = "wheelRotateAnimation 10s ease-in-out";
						rotateEggs.style.animation = "eggsRotateAnimation 10s ease-in-out";
						addAnimationToBigSparks()
						addAnimationToSmallSparks()
						console.log("watch-JACKPOT")

						observer.disconnect(); // Зупиняємо нагляд
				}
		});
	}

	console.log(Math.floor(Math.random() * 10))

	// Додаємо анимації до іскр
	const addAnimationToBigSparks = () => {
		for ( let i = 1; i < bigSparks.length; i++ ) {
			const random = Math.floor(Math.random() * 10);
			bigSparks[i-1].style.animation = `moveSpark${i} ${6 + random}s linear`
		}
	}
	const addAnimationToSmallSparks = () => {
		for ( let i = 1; i < smallSparks.length; i++ ) {
			const random = Math.floor(Math.random() * 10);
			smallSparks[i-1].style.animation = `moveShadowSpark${i} ${4 + random}s linear`
		}
	}
})