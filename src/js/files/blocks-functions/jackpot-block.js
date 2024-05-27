import { showObjectAfterLazyLoading } from "../common-scripts.js";

document.addEventListener("DOMContentLoaded", () => {
	const blockContent = document.querySelector(".jackpot-block");
	const rotateWheel = document.querySelector(".wheel__wheel-image");
	const rotateEggs = document.querySelector(".eggs-rotate");
	const bigSparks = document.querySelectorAll(".spark");
	const smallSparks = document.querySelectorAll(".shadow-spark");
	const wheelAndEggsContainer = document.querySelector(".jackpot-block__wheel-eggs-inner-container");
	const sparksContainer = document.querySelector(".jackpot-block__sparks");
	const shadowSparksContainer = document.querySelector(".jackpot-block__shadow-sparks");
	

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
						rotateWheel.style.animation = "wheelRotateAnimation 10s ease-in-out 2s";
						rotateEggs.style.animation = "eggsRotateAnimation 10s ease-in-out 2s";
						addAnimationToBigSparks()
						addAnimationToSmallSparks()
						// ----------------------------------------------------------- Поява елементів, що підтягуються по LazyLoading 
						showObjectAfterLazyLoading(wheelAndEggsContainer)
						showObjectAfterLazyLoading(sparksContainer)
						showObjectAfterLazyLoading(shadowSparksContainer)

						observer.disconnect(); // Зупиняємо нагляд
				}
		});
	}

	console.log(Math.floor(Math.random() * 10))

	// Додаємо анимації до іскр
	const addAnimationToBigSparks = () => {
		for ( let i = 1; i < bigSparks.length; i++ ) {
			const random = Math.floor(Math.random() * 10);
			bigSparks[i-1].style.animation = `moveSpark${i} ${6 + random}s linear 2s`
		}
	}
	const addAnimationToSmallSparks = () => {
		for ( let i = 1; i < smallSparks.length; i++ ) {
			const random = Math.floor(Math.random() * 10);
			smallSparks[i-1].style.animation = `moveShadowSpark${i} ${4 + random}s linear 2s`
		}
	}

	// const showObjectAfterLazyLoading = (object) => {
	// 	for (let i = 0; i < 100; i++) {
	// 		setTimeout(() => {
	// 			console.log(object)
	// 			console.log(i / 100)
	// 			object.style.opacity = `${i / 100}`;
	// 		}, 100);
	// 	}
	// };



})