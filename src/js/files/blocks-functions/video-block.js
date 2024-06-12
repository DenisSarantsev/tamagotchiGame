document.addEventListener("DOMContentLoaded", () => {
	const hoverAndActiveVideoPlayButton = () => {
		const defaultPlayButton = document.querySelector(".video__button-default");
		const hoverPlayButton = document.querySelector(".video__button-hover");
		const activePlayButton = document.querySelector(".video__button-active");
		const playButtonBlock = document.querySelector(".video-button");
		
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

	hoverAndActiveVideoPlayButton()
})