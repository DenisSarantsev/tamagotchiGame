document.addEventListener("DOMContentLoaded", () => {
	// Контейнер сторінки завантаження і таймеру
	const loadingAndTimerBlocksWrapper = document.querySelector(".loading-timer");
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
			loadingAndTimerBlocksWrapper.removeAttribute("data-no-event");
		})
	}
	hoverStartButton()

	// -------------------------------------------------------- Логіка після натискання кнопки "Старт"
	const hiddenLoadPageAndShowTimerPage = () => {
		startAndLoadingContainer.style.transform = "translateZ(1100px)";
		startAndLoadingContainer.style.animation = "loadingLineHiddenAnimation 1.4s ease";

		async function setOpacityEllipses() {
			for (let i = 100; i > 0; i--) {
				setTimeout(() => {
						topLeftEllipse.style.opacity = `${i / 100}`;
						topRightEllipse.style.opacity = `${i / 100}`;
						bottomLeftEllipse.style.opacity = `${i / 100}`;
						bottomRightEllipse.style.opacity = `${i / 100}`;
				}, (100 - i) * 20); // Увеличиваем время задержки для каждого шага
			}
		} setOpacityEllipses()

		setTimeout(() => {
			blackBackground.style.opacity = "0.35";
			ellipsesContainer.classList.add("_hidden");
			startAndLoadingContainer.style.display = "none";
			timerBlock.classList.remove("_hidden");
			timerBgImage.classList.remove("_hidden");

			// Поява листків
			leafsContainer.classList.remove("_hidden");
			firstLeaf.style.animation = "showFirstLeaf 0.45s ease";
			secondLeaf.style.animation = "showSecondLeaf 0.6s ease";
			thirdLeaf.style.animation = "showThirdLeaf 0.55s ease";
			firstLeaf.style.animation = "firstLeafAnimation 15s infinite";
			secondLeaf.style.animation = "secondLeafAnimation 10s infinite";
			thirdLeaf.style.animation = "thirdLeafAnimation 25s infinite";

			// Поява гобліна
			setTimeout(() => {
				goblinImage.classList.remove("_hidden");
				goblinImage.style.animation = "goblinAnimation 0.8s ease";
			}, 4000)
			

			// Поява контенту таймера
			setTimeout(() => {
				timerBlock.style.animation = "showSmallLogoOpacity 1s ease";
				setTimeout(() => {
					timerBlock.style.opacity = "1";
				}, 999)
			}, 100)


		}, 1500)
	}

	// Анимація кнопки "Играть"
	const hoverAndActivePlayButton = () => {
		const defaultPlayButton = document.querySelector(".play-button__button-default");
		const hoverPlayButton = document.querySelector(".play-button__button-hover");
		const activePlayButton = document.querySelector(".play-button__button-active");
		const playButtonBlock = document.querySelector(".play-button__wrapper");
		
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

	// Логика работы таймера
	const setTimerToApp = (durationInDays) => {
		const durationInMs = durationInDays * 24 * 60 * 60 * 1000;
		let endTime = localStorage.getItem('timerEndTime');

		if (!endTime || new Date().getTime() > endTime) {
				endTime = new Date().getTime() + durationInMs;
				localStorage.setItem('timerEndTime', endTime);
		}

		function updateTimer() {
				const now = new Date().getTime();
				const remainingTime = endTime - now;

				if (remainingTime <= 0) {
						endTime = new Date().getTime() + durationInMs;
						localStorage.setItem('timerEndTime', endTime);
				}

				const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
				const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

				const daysElement = document.querySelector(".days-timer-element");
				const hoursElement = document.querySelector(".hours-timer-element");
				const minutesElement = document.querySelector(".minutes-timer-element");
				const secondsElement = document.querySelector(".seconds-timer-element");

				daysElement.innerHTML = `${days}`;
				hoursElement.innerHTML = `${hours}`;
				minutesElement.innerHtml = `${minutes}`;
				secondsElement.innerHTML = `${seconds}`;
		}

		setInterval(updateTimer, 1000);
		updateTimer(); // Initial call to display the timer immediately
	}

	setTimerToApp(5)

	// Прокрутка сторінки при натисканні на кнопку
	// document.querySelector(".timer-bottom-scroll-button").addEventListener('click', function() {
	// 	document.querySelector(".loading-timer").scrollIntoView({ behavior: 'smooth' });
	// 	console.log("SCROLL")
	// });

})