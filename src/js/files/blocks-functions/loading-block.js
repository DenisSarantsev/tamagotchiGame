document.addEventListener("DOMContentLoaded", () => {
	// Елементи сторінки завантаження
	const loadingLineBlock = document.querySelector(".loading__loading-container");
	const startButtonBlock = document.querySelector(".loading__start-button");
	const startAndLoadingContainer = document.querySelector(".loading");
	// Еліпси із загальним контейнером
	const topLeftEllipse = document.querySelector(".loading-timer__left-top-ellipse");
	const topRightEllipse = document.querySelector(".loading-timer__right-top-ellipse");
	const bottomLeftEllipse = document.querySelector(".loading-timer__left-bottom-ellipse");
	const bottomRightEllipse = document.querySelector(".loading-timer__right-bottom-ellipse");
	const ellipsesContainer = document.querySelector(".loading-timer__bg-elements-container");
	// Контейнер з чорним фоном
	const blackBackground = document.querySelector(".loading-timer__black-bg");
	// Елементи сторінки таймеру
	const timerBlock = document.querySelector(".timer");
	const timerBgImage = document.querySelector(".loading-timer__mountains-bg");
	// Зображення листків
	const firstLeaf = document.querySelector(".loading-timer__first-leaf");
	const secondLeaf = document.querySelector(".loading-timer__second-leaf");
	const thirdLeaf = document.querySelector(".loading-timer__third-leaf");
	const leafsContainer = document.querySelector(".loading-timer__bg-effects");
	// Зображення гобліна
	const goblinImage = document.querySelector(".loading-timer__goblin");

	// Логіка появи/зникнення лінії завантаження
	const hiddenLoadingLineShowStartButton = () => {
		setTimeout(() => {
			loadingLineBlock.style.animation = "loadingLineHiddenAnimation 0.2s ease";
			setTimeout(() => {
				loadingLineBlock.style.display = "none";
				setTimeout(() => {
					startButtonBlock.style.animation = "startButtonShowAnimation 0.3s ease";
					setTimeout(() => {
						startButtonBlock.style.display = "block";
					}, 300)
				}, 200)
			}, 200)
		}, 1500)
	}
	hiddenLoadingLineShowStartButton()

	// Логіка ховеру та кліку стартової кнопки
	const hoverStartButton = () => {
		const loadingButtonDefault = document.querySelector(".loading__button-default");
		const loadingButtonHover = document.querySelector(".loading__button-hover");
		const loadingButtonActive = document.querySelector(".loading__button-active");

		startButtonBlock.addEventListener("mouseenter", () => {
			loadingButtonDefault.classList.add("_hidden");
			loadingButtonHover.classList.remove("_hidden");
			loadingButtonActive.classList.add("_hidden");
		})
		startButtonBlock.addEventListener("mouseleave", () => {
			loadingButtonDefault.classList.remove("_hidden");
			loadingButtonHover.classList.add("_hidden");
			loadingButtonActive.classList.add("_hidden");
		})
		startButtonBlock.addEventListener("mousedown", () => {
			loadingButtonDefault.classList.add("_hidden");
			loadingButtonHover.classList.add("_hidden");
			loadingButtonActive.classList.remove("_hidden");
		})
		startButtonBlock.addEventListener("mouseup", () => {
			loadingButtonDefault.classList.add("_hidden");
			loadingButtonHover.classList.remove("_hidden");
			loadingButtonActive.classList.add("_hidden");
			hiddenLoadPageAndShowTimerPage();
		})
	}
	hoverStartButton()

	// Логіка після натискання кнопки "Старт"
	const hiddenLoadPageAndShowTimerPage = () => {
		startAndLoadingContainer.style.transform = "translateZ(1100px)";
		topLeftEllipse.style.animation = "hiddenLeftTopEllipse 1s ease";
		topRightEllipse.style.animation = "hiddenRightTopEllipse 1s ease";
		bottomLeftEllipse.style.animation = "hiddenLeftBottomEllipse 1s ease";
		bottomRightEllipse.style.animation = "hiddenRightBottomEllipse 1s ease";
		setTimeout(() => {
			ellipsesContainer.classList.add("_hidden");
			blackBackground.style.opacity = "0.35";
			startAndLoadingContainer.style.display = "none";
			timerBlock.classList.remove("_hidden");
			timerBgImage.classList.remove("_hidden");

			// Поява листків
			leafsContainer.classList.remove("_hidden");
			firstLeaf.style.animation = "showFirstLeaf 0.45s ease";
			secondLeaf.style.animation = "showSecondLeaf 0.6s ease";
			thirdLeaf.style.animation = "showThirdLeaf 0.55s ease";
			firstLeaf.style.animation = "leafsAnimation 15s infinite";
			secondLeaf.style.animation = "leafsAnimation 20s infinite";
			thirdLeaf.style.animation = "leafsAnimation 25s infinite";

			// Поява контенту таймера
			setTimeout(() => {
				timerBlock.style.animation = "showSmallLogoOpacity 1s ease";
				setTimeout(() => {
					timerBlock.style.opacity = "1";
				}, 999)
			}, 100)
		}, 350)
	}
})