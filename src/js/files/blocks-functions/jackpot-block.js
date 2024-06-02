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
				showJackpotText()
			}, 5100)
		}, 2000)
		
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

				if ( window.innerWidth >= 1920 ) {
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
				} else if ( window.innerWidth < 1920 && window.innerWidth > 1500 ) {
					egg1.style.transform = `translateX(3.125vw) translateY(-10.417vw)`;
					egg2.style.transform = `translateX(6.771vw) translateY(-4.167vw) translateZ(15.625vw)`;
					egg3.style.transform = `translateX(18.229vw) translateY(-3.125vw)`;
					egg4.style.transform = `translateX(8.333vw) translateY(1.302vw) translateZ(15.625vw)`;
					egg5.style.transform = `translateX(9.896vw) translateY(8.333vw)`;
					egg6.style.transform = `translateX(1.302vw) translateY(4.948vw) translateZ(15.625vw)`;
					egg7.style.transform = `translateX(-2.083vw) translateY(8.854vw)`;
					egg8.style.transform = `translateX(-6.25vw) translateY(5.729vw) translateZ(15.625vw)`;
					egg9.style.transform = `translateX(-14.583vw) translateY(4.167vw)`;
					egg10.style.transform = `translateX(-16.667vw) translateY(-3.646vw)`;
					egg11.style.transform = `translateX(-6.771vw) translateY(-5.208vw) translateZ(15.625vw)`;
					egg12.style.transform = `translateX(-2.083vw) translateY(-8.333vw)`;
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