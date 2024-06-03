export const showObjectAfterLazyLoading = (object) => {
	object.style.opacity = "1";
};

document.addEventListener("DOMContentLoaded", () => {
	const hoverAndActivePlayButton = () => {
		const defaultPlayButton = document.querySelector(".main__button-default");
		const hoverPlayButton = document.querySelector(".main__button-hover");
		const activePlayButton = document.querySelector(".main__button-active");
		const playButtonBlock = document.querySelector(".main-button");
		
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
	if ( window.innerWidth < 768 ) {
		hoverAndActivePlayButton();
	}
	
})

// Включаем и выключаем звук на сайте
document.addEventListener("DOMContentLoaded", () => {
	const audio = document.querySelector(".bg-music");
	if (audio.paused) {
		audio.play();
	}

	document.addEventListener("click", (e) => {
		if ( e.target.classList.contains("volume-button__image") || e.target.classList.contains("volume-button__image") ) {
			if (audio.paused) {
				audio.play();
		} else {
				audio.pause();
		}
		}
	})


})