document.addEventListener("DOMContentLoaded", () => {
	const blockContent = document.querySelector(".dollars-block__content");

	document.addEventListener("watcherCallback", function (e) {
		// Повна інформація від спостерігача
		const entry = e.detail.entry;
		// Спостерігаємий об'єкт
		const targetElement = entry.target;
		if ( targetElement.classList.contains("dollars-block") ) {
			blockContent.classList.remove("_hidden");
			setTimeout(() => {
				blockContent.style.opacity = "1";
			}, 200)
			addAnimationToTopDollars();
			addAnimationToCenterDollars();
			addAnimationToBottomDollars();
		}
	});

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
		const bottomDollars = document.querySelector(".dollars-block__bottom-dollars-wrapper").children;
		const animationSwaySpeed = [9, 9.5, 8.9, 5.7, 4.2, 6.3, 5.1, 7.6, 6.2, 8.4, 6.6, 5.9, 6.1, 4.5, 4.8, 6.0, 5.3, 4.2];
		const animationDownDollars = [80, 94, 120, 87, 65, 77, 75, 89, 101, 94, 86, 89, 74, 120, 150, 69, 130, 77]
		for ( let i = 1; i <= 18; i++ ) {
			bottomDollars[i - 1].style.display = "block";
			bottomDollars[i - 1].style.animation = `slideDownBottomDollarsAnimation${i} linear ${animationDownDollars[i - 1]}s infinite,
																					swayBottomDollarsAnimation ease ${animationSwaySpeed[i - 1]}s infinite`;
		}
	}


})




