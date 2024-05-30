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
						// --------------- Поява променів на фоні
						const backgroundLights = document.querySelector(".jackpot-block__lights");
						backgroundLights.style.animation = "showObjectAfterLazyLoading 3s linear";
						setTimeout(() => {
							backgroundLights.style.opacity = "1";
						})

						// --------------- Анімація обертання колеса
						const rotateObject = (object) => {
							object.style.animation = "wheelRotateAnimation 10s cubic-bezier(.39,.01,.49,.99)";
						}

						setTimeout(() => {
							rotateObject(rotateWheel)
						}, 2000)

						// --------------- Анімація яєць
						const allEggsShadows = document.querySelectorAll(".eggs-rotate__egg-shadow");

						setTimeout(() => {
							rotateEggs.style.animation = "wheelRotateAnimation 10s cubic-bezier(.39,.01,.49,.99)";
							setTimeout(() => {
								rotateEggs.style.animation = "eggsFlyAnimation 1s cubic-bezier(0,1.03,.17,1)";
								flyEggs();
							}, 5100)
						}, 2000)
						
						// --------------- Розліт яєць
						const egg1 = document.querySelector(".egg1");
						const egg2 = document.querySelector(".egg2");
						const egg3 = document.querySelector(".egg3");
						const egg4 = document.querySelector(".egg4");
						const egg5 = document.querySelector(".egg5");
						const egg6 = document.querySelector(".egg6");
						const egg7 = document.querySelector(".egg7");
						const egg8 = document.querySelector(".egg8");
						const egg9 = document.querySelector(".egg9");
						const egg10 = document.querySelector(".egg10");
						const egg11 = document.querySelector(".egg11");
						const egg12 = document.querySelector(".egg12");

						let indexFly = 1;

						const flyEggs = () => {
							egg1.style.animation = "flyEgg1 1s cubic-bezier(0,1.03,.17,1)";
							egg2.style.animation = `flyEgg2 1s cubic-bezier(0,1.03,.17,1)`;
							egg3.style.animation = "flyEgg3 1s cubic-bezier(0,1.03,.17,1)";
							egg4.style.animation = `flyEgg4 1s cubic-bezier(0,1.03,.17,1)`;
							egg5.style.animation = "flyEgg5 1s cubic-bezier(0,1.03,.17,1)";
							egg6.style.animation = `flyEgg6 1s cubic-bezier(0,1.03,.17,1)`;
							egg7.style.animation = "flyEgg7 1s cubic-bezier(0,1.03,.17,1)";
							egg8.style.animation = `flyEgg8 1s cubic-bezier(0,1.03,.17,1)`;
							egg9.style.animation = "flyEgg9 1s cubic-bezier(0,1.03,.17,1)";
							egg10.style.animation = "flyEgg10 1s cubic-bezier(0,1.03,.17,1)";
							egg11.style.animation = `flyEgg11 1s cubic-bezier(0,1.03,.17,1)`;
							egg12.style.animation = "flyEgg12 1s cubic-bezier(0,1.03,.17,1)";

							showJackpotText()

							setTimeout(() => {
								egg1.style.transform = `translateX(${60 * indexFly}px) translateY(-${200 * indexFly}px)`;
								egg2.style.transform = `translateX(${130 * indexFly}px) translateY(-${80 * indexFly}px) translateZ(300px)`;
								egg3.style.transform = `translateX(${350 * indexFly}px) translateY(-${60 * indexFly}px)`;
								egg4.style.transform = `translateX(${160 * indexFly}px) translateY(${25 * indexFly}px) translateZ(300px)`;
								egg5.style.transform = `translateX(${190 * indexFly}px) translateY(${160 * indexFly}px)`;
								egg6.style.transform = `translateX(${25 * indexFly}px) translateY(${95 * indexFly}px) translateZ(300px)`;
								egg7.style.transform = `translateX(${-40 * indexFly}px) translateY(${170 * indexFly}px)`;
								egg8.style.transform = `translateX(${-120 * indexFly}px) translateY(${110 * indexFly}px) translateZ(300px)`;
								egg9.style.transform = `translateX(${-280 * indexFly}px) translateY(${80 * indexFly}px)`;
								egg10.style.transform = `translateX(${-320 * indexFly}px) translateY(${-70 * indexFly}px)`;
								egg11.style.transform = `translateX(${-130 * indexFly}px) translateY(${-100 * indexFly}px) translateZ(300px)`;
								egg12.style.transform = `translateX(${-40 * indexFly}px) translateY(${-160 * indexFly}px)`;

								for ( let item of allEggsShadows ) {
									item.style.animation = "allEggsShadows 2s linear";
								}
								setTimeout(() => {
									for ( let item of allEggsShadows ) {
										item.classList.add("egg-shadow");
									}
								}, 2000)
							}, 1000)
						}

						// Поява блоку з написом "Jackpot"
						const jackpotTextBlock = document.querySelector(".jackpot-text");

						const showJackpotText = () => {
							jackpotTextBlock.style.animation = "showJackpotText 2s linear";
							setTimeout(() => {
								jackpotTextBlock.style.opacity = "1";
							}, 2000)
						}
						
						// --------------- Анімація іскр
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