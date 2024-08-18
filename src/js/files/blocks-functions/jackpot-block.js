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

	setTimeout(() => {
		const loadingMainButton = document.querySelector(".loading__start-button");
		loadingMainButton.addEventListener("click", () => {
			setTimeout(() => {
				addListenerToJackpotBlockAndShowAnimation()
			}, 200)
		})
	}, 200)

	const addListenerToJackpotBlockAndShowAnimation = () => {
		let showAnimations = false; // Індикатор, який спрацьовує при показі анімацій для запобігання повторного відтворення
		// Якщо вьюпорт прівнюється з елементом, запускаємо анімацію
		if ( window.innerWidth > 768 ) {
			document.addEventListener("watcherCallback", function (e) {
				const entry = e.detail.entry;
				const targetElement = entry.target;
				if ( targetElement.classList.contains("jackpot-block") && showAnimations === false ) {
					showAnimations = true;
					animationFunctions();
				}
			});
		} else {
			window.addEventListener("scroll", () => {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				if ( scrollTop > showElementPosition(blockContent) && showAnimations === false ) {
					showAnimations = true;
					animationFunctions();
				}
			})
		}
	}

	// Вираховуємо позицію елемента з колесом
	function showElementPosition(el) {
		var rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		let topElem = rect.top + scrollTop - 100
    return topElem
	}

	// Всі функції для запуску анімацій в одній
	const animationFunctions = () => {
		// Виконуємо функції:
		// --------------- Поява променів на фоні
		const backgroundLights = document.querySelector(".jackpot-block__lights");
		backgroundLights.style.opacity = "1";
		//backgroundLights.style.animation = "showObjectAfterLazyLoading 3s linear";
		setTimeout(() => {
			//backgroundLights.style.opacity = "1";
		})

		// --------------- Анімація обертання колеса
		const rotateObject = (object) => {
			object.style.animation = "wheelRotateAnimation 10s cubic-bezier(.39,.01,.49,.99)";
		}
		setTimeout(() => {
			rotateObject(rotateWheel)
		}, 500)

		// --------------- Анімація яєць
		const allEggsShadows = document.querySelectorAll(".eggs-rotate__egg-shadow");
		setTimeout(() => {
			rotateEggs.style.animation = "wheelRotateAnimation 10s cubic-bezier(.39,.01,.49,.99)";
			setTimeout(() => {
				rotateEggs.style.animation = "eggsFlyAnimation 1s cubic-bezier(0,1.03,.17,1)";
				flyEggs();
				showJackpotText();
				// hiddenAndShowText();
			}, 5100)
		}, 500)
		
		// --------------- Розліт яєць
		for ( let item of allEggsShadows ) {
			item.style.animation = "allEggsShadows 2s linear";
		}
		setTimeout(() => {
			for ( let item of allEggsShadows ) {
				item.classList.add("egg-shadow");
			}
		}, 2000)


		// ------------- Поява блоку з написом "Jackpot"
		const jackpotTextBlock = document.querySelector(".jackpot-text");

		const showJackpotText = () => {
			jackpotTextBlock.style.opacity = "1";
		}

		// ------------- Заміна тексту зверху і знизу
		// const topBeforeText = document.querySelector(".jackpot-block__before-top-text")
		// const topAfterText = document.querySelector(".jackpot-block__after-top-text")
		// const bottomBeforeText = document.querySelector(".jackpot-block__before-bottom-text")
		// const bottomAfterText = document.querySelector(".jackpot-block__after-bottom-text")

		// const hiddenAndShowText = () => {
		// 	topBeforeText.style.opacity = "0";
		// 	topBeforeText.style.height = "0px";
		// 	topAfterText.style.opacity = "1";
		// 	topAfterText.style.height = "auto";

		// 	bottomBeforeText.style.opacity = "0";
		// 	bottomBeforeText.style.height = "0px";
		// 	bottomAfterText.style.opacity = "1";
		// 	bottomAfterText.style.height = "auto";
		// }
		
		// --------------- Анімація іскр
		addAnimationToBigSparks()
		addAnimationToSmallSparks()
		// ----------------------------------------------------------- Поява елементів, що підтягуються по LazyLoading 
		showObjectAfterLazyLoading(wheelAndEggsContainer)
		showObjectAfterLazyLoading(sparksContainer)
		showObjectAfterLazyLoading(shadowSparksContainer)
	}




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

	const flyEggs = () => {
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

				let	indexFly = 1;

				rotateEggs.style.maxWidth = "480.34px";
				rotateEggs.style.maxHeight = "480.34px";

				if ( window.innerWidth > 1920 ) {
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
				} else if ( window.innerWidth <= 1920 && window.innerWidth > 1500 ) {
					egg1.style.transform = `translateX(1.8vw) translateY(-6vw)`;
					egg2.style.transform = `translateX(3vw) translateY(-1.5vw) translateZ(15.625vw)`;
					egg3.style.transform = `translateX(10vw) translateY(-2vw)`;
					egg4.style.transform = `translateX(6vw) translateY(1vw) translateZ(15.625vw)`;
					egg5.style.transform = `translateX(5vw) translateY(4vw)`;
					egg6.style.transform = `translateX(0.8vw) translateY(2vw) translateZ(15.625vw)`;
					egg7.style.transform = `translateX(-1.8vw) translateY(6.5vw)`;
					egg8.style.transform = `translateX(-3.5vw) translateY(3vw) translateZ(15.625vw)`;
					egg9.style.transform = `translateX(-12vw) translateY(3vw)`;
					egg10.style.transform = `translateX(-10vw) translateY(-2.5vw)`;
					egg11.style.transform = `translateX(-2.5vw) translateY(-1.85vw) translateZ(15.625vw)`;
					egg12.style.transform = `translateX(-1.85vw) translateY(-6vw)`;
				} else if ( window.innerWidth <= 1500 && window.innerWidth > 1200 ) {
					egg1.style.transform = `translateX(1vw) translateY(-3vw)`;
					egg2.style.transform = `translateX(3vw) translateY(-1.5vw) translateZ(15.625vw)`;
					egg3.style.transform = `translateX(7vw) translateY(-1vw)`;
					egg4.style.transform = `translateX(4vw) translateY(0.6vw) translateZ(15.625vw)`;
					egg5.style.transform = `translateX(5vw) translateY(4vw)`;
					egg6.style.transform = `translateX(0.8vw) translateY(2vw) translateZ(15.625vw)`;
					egg7.style.transform = `translateX(-1.5vw) translateY(5vw)`;
					egg8.style.transform = `translateX(-2vw) translateY(1.3vw) translateZ(15.625vw)`;
					egg9.style.transform = `translateX(-6vw) translateY(2vw)`;
					egg10.style.transform = `translateX(-7vw) translateY(-1vw)`;
					egg11.style.transform = `translateX(-2vw) translateY(-1.5vw) translateZ(15.625vw)`;
					egg12.style.transform = `translateX(-0.7vw) translateY(-3vw)`;
				} else if ( window.innerWidth <= 1200 && window.innerWidth > 992 ) {
					egg1.style.transform = `translateX(0.5vw) translateY(-0.5vw)`;
					egg2.style.transform = `translateX(1vw) translateY(-0.5vw) translateZ(15.625vw)`;
					egg3.style.transform = `translateX(7vw) translateY(-1vw)`;
					egg4.style.transform = `translateX(4vw) translateY(0.6vw) translateZ(15.625vw)`;
					egg5.style.transform = `translateX(5vw) translateY(4vw)`;
					egg6.style.transform = `translateX(0.8vw) translateY(0.8vw) translateZ(15.625vw)`;
					egg7.style.transform = `translateX(-0.8vw) translateY(3vw)`;
					egg8.style.transform = `translateX(-1vw) translateY(1.3vw) translateZ(15.625vw)`;
					egg9.style.transform = `translateX(-6vw) translateY(2vw)`;
					egg10.style.transform = `translateX(-5vw) translateY(-1vw)`;
					egg11.style.transform = `translateX(-0.3vw) translateY(-0.2vw) translateZ(15.625vw)`;
					egg12.style.transform = `translateX(-0.3vw) translateY(-1vw)`;
				} else if ( window.innerWidth <= 992 && window.innerWidth > 768 ) {
					egg1.style.transform = `translateX(1.4vw) translateY(2vw)`;
					egg2.style.transform = `translateX(1.5vw) translateY(3vw) translateZ(15.625vw)`;
					egg3.style.transform = `translateX(7vw) translateY(-1vw)`;
					egg4.style.transform = `translateX(4vw) translateY(0.6vw) translateZ(15.625vw)`;
					egg5.style.transform = `translateX(3vw) translateY(2.5vw)`;
					egg6.style.transform = `translateX(0.1vw) translateY(0.1vw) translateZ(15.625vw)`;
					egg7.style.transform = `translateX(0.5vw) translateY(1.5vw)`;
					egg8.style.transform = `translateX(2vw) translateY(0vw) translateZ(15.625vw)`;
					egg9.style.transform = `translateX(-5vw) translateY(2vw)`;
					egg10.style.transform = `translateX(-2vw) translateY(-1vw)`;
					egg11.style.transform = `translateX(1.5vw) translateY(2vw) translateZ(15.625vw)`;
					egg12.style.transform = `translateX(-0.3vw) translateY(-1vw)`;
				} else if ( window.innerWidth <= 768 ) {
					egg1.style.transform = `translateX(15px) translateY(-65px)`;
					egg2.style.transform = `translateX(65px) translateY(-65px) translateZ(50px)`;
					egg3.style.transform = `translateX(65px) translateY(6px)`;
					egg4.style.transform = `translateX(55px) translateY(22px) translateZ(50px)`;
					egg5.style.transform = `translateX(65px) translateY(65px)`;
					egg6.style.transform = `translateX(14px) translateY(65px) translateZ(50px)`;
					egg7.style.transform = `translateX(-14px) translateY(65px)`;
					egg8.style.transform = `translateX(-65px) translateY(65px) translateZ(50px)`;
					egg9.style.transform = `translateX(-65px) translateY(22px)`;
					egg10.style.transform = `translateX(-65px) translateY(-20px)`;
					egg11.style.transform = `translateX(-65px) translateY(-65px) translateZ(50px)`;
					egg12.style.transform = `translateX(-12px) translateY(-69px)`;
				}
			}

})