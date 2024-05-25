(() => {
    "use strict";
    const modules_flsModules = {};
    let isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
        }
    };
    class FullPage {
        constructor(element, options) {
            let config = {
                noEventSelector: "[data-no-event]",
                classInit: "fp-init",
                wrapperAnimatedClass: "fp-switching",
                selectorSection: "[data-fp-section]",
                activeClass: "active-section",
                previousClass: "previous-section",
                nextClass: "next-section",
                idActiveSection: 0,
                mode: element.dataset.fpEffect ? element.dataset.fpEffect : "slider",
                bullets: element.hasAttribute("data-fp-bullets") ? true : false,
                bulletsClass: "fp-bullets",
                bulletClass: "fp-bullet",
                bulletActiveClass: "fp-bullet-active",
                onInit: function() {},
                onSwitching: function() {},
                onDestroy: function() {}
            };
            this.options = Object.assign(config, options);
            this.wrapper = element;
            this.sections = this.wrapper.querySelectorAll(this.options.selectorSection);
            this.activeSection = false;
            this.activeSectionId = false;
            this.previousSection = false;
            this.previousSectionId = false;
            this.nextSection = false;
            this.nextSectionId = false;
            this.bulletsWrapper = false;
            this.stopEvent = false;
            if (this.sections.length) this.init();
        }
        init() {
            if (this.options.idActiveSection > this.sections.length - 1) return;
            this.setId();
            this.activeSectionId = this.options.idActiveSection;
            this.setEffectsClasses();
            this.setClasses();
            this.setStyle();
            if (this.options.bullets) {
                this.setBullets();
                this.setActiveBullet(this.activeSectionId);
            }
            this.events();
            setTimeout((() => {
                document.documentElement.classList.add(this.options.classInit);
                this.options.onInit(this);
                document.dispatchEvent(new CustomEvent("fpinit", {
                    detail: {
                        fp: this
                    }
                }));
            }), 0);
        }
        destroy() {
            this.removeEvents();
            this.removeClasses();
            document.documentElement.classList.remove(this.options.classInit);
            this.wrapper.classList.remove(this.options.wrapperAnimatedClass);
            this.removeEffectsClasses();
            this.removeZIndex();
            this.removeStyle();
            this.removeId();
            this.options.onDestroy(this);
            document.dispatchEvent(new CustomEvent("fpdestroy", {
                detail: {
                    fp: this
                }
            }));
        }
        setId() {
            for (let index = 0; index < this.sections.length; index++) {
                const section = this.sections[index];
                section.setAttribute("data-fp-id", index);
            }
        }
        removeId() {
            for (let index = 0; index < this.sections.length; index++) {
                const section = this.sections[index];
                section.removeAttribute("data-fp-id");
            }
        }
        setClasses() {
            this.previousSectionId = this.activeSectionId - 1 >= 0 ? this.activeSectionId - 1 : false;
            this.nextSectionId = this.activeSectionId + 1 < this.sections.length ? this.activeSectionId + 1 : false;
            this.activeSection = this.sections[this.activeSectionId];
            this.activeSection.classList.add(this.options.activeClass);
            for (let index = 0; index < this.sections.length; index++) document.documentElement.classList.remove(`fp-section-${index}`);
            document.documentElement.classList.add(`fp-section-${this.activeSectionId}`);
            if (this.previousSectionId !== false) {
                this.previousSection = this.sections[this.previousSectionId];
                this.previousSection.classList.add(this.options.previousClass);
            } else this.previousSection = false;
            if (this.nextSectionId !== false) {
                this.nextSection = this.sections[this.nextSectionId];
                this.nextSection.classList.add(this.options.nextClass);
            } else this.nextSection = false;
        }
        removeEffectsClasses() {
            switch (this.options.mode) {
              case "slider":
                this.wrapper.classList.remove("slider-mode");
                break;

              case "cards":
                this.wrapper.classList.remove("cards-mode");
                this.setZIndex();
                break;

              case "fade":
                this.wrapper.classList.remove("fade-mode");
                this.setZIndex();
                break;

              default:
                break;
            }
        }
        setEffectsClasses() {
            switch (this.options.mode) {
              case "slider":
                this.wrapper.classList.add("slider-mode");
                break;

              case "cards":
                this.wrapper.classList.add("cards-mode");
                this.setZIndex();
                break;

              case "fade":
                this.wrapper.classList.add("fade-mode");
                this.setZIndex();
                break;

              default:
                break;
            }
        }
        setStyle() {
            switch (this.options.mode) {
              case "slider":
                this.styleSlider();
                break;

              case "cards":
                this.styleCards();
                break;

              case "fade":
                this.styleFade();
                break;

              default:
                break;
            }
        }
        styleSlider() {
            for (let index = 0; index < this.sections.length; index++) {
                const section = this.sections[index];
                if (index === this.activeSectionId) section.style.transform = "translate3D(0,0,0)"; else if (index < this.activeSectionId) section.style.transform = "translate3D(0,-100%,0)"; else if (index > this.activeSectionId) section.style.transform = "translate3D(0,100%,0)";
            }
        }
        styleCards() {
            for (let index = 0; index < this.sections.length; index++) {
                const section = this.sections[index];
                if (index >= this.activeSectionId) section.style.transform = "translate3D(0,0,0)"; else if (index < this.activeSectionId) section.style.transform = "translate3D(0,-100%,0)";
            }
        }
        styleFade() {
            for (let index = 0; index < this.sections.length; index++) {
                const section = this.sections[index];
                if (index === this.activeSectionId) {
                    section.style.opacity = "1";
                    section.style.pointerEvents = "all";
                } else {
                    section.style.opacity = "0";
                    section.style.pointerEvents = "none";
                }
            }
        }
        removeStyle() {
            for (let index = 0; index < this.sections.length; index++) {
                const section = this.sections[index];
                section.style.opacity = "";
                section.style.visibility = "";
                section.style.transform = "";
            }
        }
        checkScroll(yCoord, element) {
            this.goScroll = false;
            if (!this.stopEvent && element) {
                this.goScroll = true;
                if (this.haveScroll(element)) {
                    this.goScroll = false;
                    const position = Math.round(element.scrollHeight - element.scrollTop);
                    if (Math.abs(position - element.scrollHeight) < 2 && yCoord <= 0 || Math.abs(position - element.clientHeight) < 2 && yCoord >= 0) this.goScroll = true;
                }
            }
        }
        haveScroll(element) {
            return element.scrollHeight !== window.innerHeight;
        }
        removeClasses() {
            for (let index = 0; index < this.sections.length; index++) {
                const section = this.sections[index];
                section.classList.remove(this.options.activeClass);
                section.classList.remove(this.options.previousClass);
                section.classList.remove(this.options.nextClass);
            }
        }
        events() {
            this.events = {
                wheel: this.wheel.bind(this),
                touchdown: this.touchDown.bind(this),
                touchup: this.touchUp.bind(this),
                touchmove: this.touchMove.bind(this),
                touchcancel: this.touchUp.bind(this),
                transitionEnd: this.transitionend.bind(this),
                click: this.clickBullets.bind(this)
            };
            if (isMobile.iOS()) document.addEventListener("touchmove", (e => {
                e.preventDefault();
            }));
            this.setEvents();
        }
        setEvents() {
            this.wrapper.addEventListener("wheel", this.events.wheel);
            this.wrapper.addEventListener("touchstart", this.events.touchdown);
            if (this.options.bullets && this.bulletsWrapper) this.bulletsWrapper.addEventListener("click", this.events.click);
        }
        removeEvents() {
            this.wrapper.removeEventListener("wheel", this.events.wheel);
            this.wrapper.removeEventListener("touchdown", this.events.touchdown);
            this.wrapper.removeEventListener("touchup", this.events.touchup);
            this.wrapper.removeEventListener("touchcancel", this.events.touchup);
            this.wrapper.removeEventListener("touchmove", this.events.touchmove);
            if (this.bulletsWrapper) this.bulletsWrapper.removeEventListener("click", this.events.click);
        }
        clickBullets(e) {
            const bullet = e.target.closest(`.${this.options.bulletClass}`);
            if (bullet) {
                const arrayChildren = Array.from(this.bulletsWrapper.children);
                const idClickBullet = arrayChildren.indexOf(bullet);
                this.switchingSection(idClickBullet);
            }
        }
        setActiveBullet(idButton) {
            if (!this.bulletsWrapper) return;
            const bullets = this.bulletsWrapper.children;
            for (let index = 0; index < bullets.length; index++) {
                const bullet = bullets[index];
                if (idButton === index) bullet.classList.add(this.options.bulletActiveClass); else bullet.classList.remove(this.options.bulletActiveClass);
            }
        }
        touchDown(e) {
            this._yP = e.changedTouches[0].pageY;
            this._eventElement = e.target.closest(`.${this.options.activeClass}`);
            if (this._eventElement) {
                this._eventElement.addEventListener("touchend", this.events.touchup);
                this._eventElement.addEventListener("touchcancel", this.events.touchup);
                this._eventElement.addEventListener("touchmove", this.events.touchmove);
                this.clickOrTouch = true;
                if (isMobile.iOS()) {
                    if (this._eventElement.scrollHeight !== this._eventElement.clientHeight) {
                        if (this._eventElement.scrollTop === 0) this._eventElement.scrollTop = 1;
                        if (this._eventElement.scrollTop === this._eventElement.scrollHeight - this._eventElement.clientHeight) this._eventElement.scrollTop = this._eventElement.scrollHeight - this._eventElement.clientHeight - 1;
                    }
                    this.allowUp = this._eventElement.scrollTop > 0;
                    this.allowDown = this._eventElement.scrollTop < this._eventElement.scrollHeight - this._eventElement.clientHeight;
                    this.lastY = e.changedTouches[0].pageY;
                }
            }
        }
        touchMove(e) {
            const targetElement = e.target.closest(`.${this.options.activeClass}`);
            if (isMobile.iOS()) {
                let up = e.changedTouches[0].pageY > this.lastY;
                let down = !up;
                this.lastY = e.changedTouches[0].pageY;
                if (targetElement) if (up && this.allowUp || down && this.allowDown) e.stopPropagation(); else if (e.cancelable) e.preventDefault();
            }
            if (!this.clickOrTouch || e.target.closest(this.options.noEventSelector)) return;
            let yCoord = this._yP - e.changedTouches[0].pageY;
            this.checkScroll(yCoord, targetElement);
            if (this.goScroll && Math.abs(yCoord) > 20) this.choiceOfDirection(yCoord);
        }
        touchUp(e) {
            this._eventElement.removeEventListener("touchend", this.events.touchup);
            this._eventElement.removeEventListener("touchcancel", this.events.touchup);
            this._eventElement.removeEventListener("touchmove", this.events.touchmove);
            return this.clickOrTouch = false;
        }
        transitionend(e) {
            this.stopEvent = false;
            document.documentElement.classList.remove(this.options.wrapperAnimatedClass);
            this.wrapper.classList.remove(this.options.wrapperAnimatedClass);
        }
        wheel(e) {
            if (e.target.closest(this.options.noEventSelector)) return;
            const yCoord = e.deltaY;
            const targetElement = e.target.closest(`.${this.options.activeClass}`);
            this.checkScroll(yCoord, targetElement);
            if (this.goScroll) this.choiceOfDirection(yCoord);
        }
        choiceOfDirection(direction) {
            if (direction > 0 && this.nextSection !== false) this.activeSectionId = this.activeSectionId + 1 < this.sections.length ? ++this.activeSectionId : this.activeSectionId; else if (direction < 0 && this.previousSection !== false) this.activeSectionId = this.activeSectionId - 1 >= 0 ? --this.activeSectionId : this.activeSectionId;
            this.switchingSection(this.activeSectionId, direction);
        }
        switchingSection(idSection = this.activeSectionId, direction) {
            if (!direction) if (idSection < this.activeSectionId) direction = -100; else if (idSection > this.activeSectionId) direction = 100;
            this.activeSectionId = idSection;
            this.stopEvent = true;
            if (this.previousSectionId === false && direction < 0 || this.nextSectionId === false && direction > 0) this.stopEvent = false;
            if (this.stopEvent) {
                document.documentElement.classList.add(this.options.wrapperAnimatedClass);
                this.wrapper.classList.add(this.options.wrapperAnimatedClass);
                this.removeClasses();
                this.setClasses();
                this.setStyle();
                if (this.options.bullets) this.setActiveBullet(this.activeSectionId);
                let delaySection;
                if (direction < 0) {
                    delaySection = this.activeSection.dataset.fpDirectionUp ? parseInt(this.activeSection.dataset.fpDirectionUp) : 500;
                    document.documentElement.classList.add("fp-up");
                    document.documentElement.classList.remove("fp-down");
                } else {
                    delaySection = this.activeSection.dataset.fpDirectionDown ? parseInt(this.activeSection.dataset.fpDirectionDown) : 500;
                    document.documentElement.classList.remove("fp-up");
                    document.documentElement.classList.add("fp-down");
                }
                setTimeout((() => {
                    this.events.transitionEnd();
                }), delaySection);
                this.options.onSwitching(this);
                document.dispatchEvent(new CustomEvent("fpswitching", {
                    detail: {
                        fp: this
                    }
                }));
            }
        }
        setBullets() {
            this.bulletsWrapper = document.querySelector(`.${this.options.bulletsClass}`);
            if (!this.bulletsWrapper) {
                const bullets = document.createElement("div");
                bullets.classList.add(this.options.bulletsClass);
                this.wrapper.append(bullets);
                this.bulletsWrapper = bullets;
            }
            if (this.bulletsWrapper) for (let index = 0; index < this.sections.length; index++) {
                const span = document.createElement("span");
                span.classList.add(this.options.bulletClass);
                this.bulletsWrapper.append(span);
            }
        }
        setZIndex() {
            let zIndex = this.sections.length;
            for (let index = 0; index < this.sections.length; index++) {
                const section = this.sections[index];
                section.style.zIndex = zIndex;
                --zIndex;
            }
        }
        removeZIndex() {
            for (let index = 0; index < this.sections.length; index++) {
                const section = this.sections[index];
                section.style.zIndex = "";
            }
        }
    }
    if (document.querySelector("[data-fp]")) modules_flsModules.fullpage = new FullPage(document.querySelector("[data-fp]"), "");
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("DOMContentLoaded", (() => {
        const loadingLineBlock = document.querySelector(".loading__loading-container");
        const startButtonBlock = document.querySelector(".loading__start-button");
        const startAndLoadingContainer = document.querySelector(".loading");
        const topLeftEllipse = document.querySelector(".loading-timer__left-top-ellipse");
        const topRightEllipse = document.querySelector(".loading-timer__right-top-ellipse");
        const bottomLeftEllipse = document.querySelector(".loading-timer__left-bottom-ellipse");
        const bottomRightEllipse = document.querySelector(".loading-timer__right-bottom-ellipse");
        const ellipsesContainer = document.querySelector(".loading-timer__bg-elements-container");
        const blackBackground = document.querySelector(".loading-timer__black-bg");
        const timerBlock = document.querySelector(".timer");
        const timerBgImage = document.querySelector(".loading-timer__mountains-bg");
        const firstLeaf = document.querySelector(".loading-timer__first-leaf");
        const secondLeaf = document.querySelector(".loading-timer__second-leaf");
        const thirdLeaf = document.querySelector(".loading-timer__third-leaf");
        const leafsContainer = document.querySelector(".loading-timer__bg-effects");
        const goblinImage = document.querySelector(".loading-timer__goblin");
        const hiddenLoadingLineShowStartButton = () => {
            setTimeout((() => {
                loadingLineBlock.style.animation = "loadingLineHiddenAnimation 0.2s ease";
                setTimeout((() => {
                    loadingLineBlock.style.display = "none";
                    setTimeout((() => {
                        startButtonBlock.style.animation = "startButtonShowAnimation 0.3s ease";
                        setTimeout((() => {
                            startButtonBlock.style.display = "block";
                        }), 300);
                    }), 200);
                }), 200);
            }), 1500);
        };
        hiddenLoadingLineShowStartButton();
        const hoverStartButton = () => {
            const loadingButtonDefault = document.querySelector(".loading__button-default");
            const loadingButtonHover = document.querySelector(".loading__button-hover");
            const loadingButtonActive = document.querySelector(".loading__button-active");
            startButtonBlock.addEventListener("mouseenter", (() => {
                loadingButtonDefault.classList.add("_hidden");
                loadingButtonHover.classList.remove("_hidden");
                loadingButtonActive.classList.add("_hidden");
            }));
            startButtonBlock.addEventListener("mouseleave", (() => {
                loadingButtonDefault.classList.remove("_hidden");
                loadingButtonHover.classList.add("_hidden");
                loadingButtonActive.classList.add("_hidden");
            }));
            startButtonBlock.addEventListener("mousedown", (() => {
                loadingButtonDefault.classList.add("_hidden");
                loadingButtonHover.classList.add("_hidden");
                loadingButtonActive.classList.remove("_hidden");
            }));
            startButtonBlock.addEventListener("mouseup", (() => {
                loadingButtonDefault.classList.add("_hidden");
                loadingButtonHover.classList.remove("_hidden");
                loadingButtonActive.classList.add("_hidden");
                hiddenLoadPageAndShowTimerPage();
            }));
        };
        hoverStartButton();
        const hiddenLoadPageAndShowTimerPage = () => {
            startAndLoadingContainer.style.transform = "translateZ(1100px)";
            startAndLoadingContainer.style.animation = "loadingLineHiddenAnimation 1.4s ease";
            async function setOpacityEllipses() {
                for (let i = 100; i > 0; i--) setTimeout((() => {
                    topLeftEllipse.style.opacity = `${i / 100}`;
                    topRightEllipse.style.opacity = `${i / 100}`;
                    bottomLeftEllipse.style.opacity = `${i / 100}`;
                    bottomRightEllipse.style.opacity = `${i / 100}`;
                }), (100 - i) * 20);
            }
            setOpacityEllipses();
            setTimeout((() => {
                blackBackground.style.opacity = "0.35";
                ellipsesContainer.classList.add("_hidden");
                startAndLoadingContainer.style.display = "none";
                timerBlock.classList.remove("_hidden");
                timerBgImage.classList.remove("_hidden");
                leafsContainer.classList.remove("_hidden");
                firstLeaf.style.animation = "showFirstLeaf 0.45s ease";
                secondLeaf.style.animation = "showSecondLeaf 0.6s ease";
                thirdLeaf.style.animation = "showThirdLeaf 0.55s ease";
                firstLeaf.style.animation = "firstLeafAnimation 15s infinite";
                secondLeaf.style.animation = "secondLeafAnimation 10s infinite";
                thirdLeaf.style.animation = "thirdLeafAnimation 25s infinite";
                setTimeout((() => {
                    goblinImage.classList.remove("_hidden");
                    goblinImage.style.animation = "goblinAnimation 0.7s ease";
                }), 1e3);
                setTimeout((() => {
                    timerBlock.style.animation = "showSmallLogoOpacity 1s ease";
                    setTimeout((() => {
                        timerBlock.style.opacity = "1";
                    }), 999);
                }), 100);
            }), 1500);
        };
        const hoverAndActivePlayButton = () => {
            const defaultPlayButton = document.querySelector(".play-button__button-default");
            const hoverPlayButton = document.querySelector(".play-button__button-hover");
            const activePlayButton = document.querySelector(".play-button__button-active");
            const playButtonBlock = document.querySelector(".play-button__wrapper");
            playButtonBlock.addEventListener("mouseenter", (() => {
                defaultPlayButton.classList.add("_hidden");
                hoverPlayButton.classList.remove("_hidden");
                activePlayButton.classList.add("_hidden");
            }));
            playButtonBlock.addEventListener("mouseleave", (() => {
                defaultPlayButton.classList.remove("_hidden");
                hoverPlayButton.classList.add("_hidden");
                activePlayButton.classList.add("_hidden");
            }));
            playButtonBlock.addEventListener("mousedown", (() => {
                defaultPlayButton.classList.add("_hidden");
                hoverPlayButton.classList.add("_hidden");
                activePlayButton.classList.remove("_hidden");
            }));
            playButtonBlock.addEventListener("mouseup", (() => {
                defaultPlayButton.classList.add("_hidden");
                hoverPlayButton.classList.remove("_hidden");
                activePlayButton.classList.add("_hidden");
            }));
        };
        hoverAndActivePlayButton();
        const setTimerToApp = durationInDays => {
            const durationInMs = durationInDays * 24 * 60 * 60 * 1e3;
            let endTime = localStorage.getItem("timerEndTime");
            if (!endTime || (new Date).getTime() > endTime) {
                endTime = (new Date).getTime() + durationInMs;
                localStorage.setItem("timerEndTime", endTime);
            }
            function updateTimer() {
                const now = (new Date).getTime();
                const remainingTime = endTime - now;
                if (remainingTime <= 0) {
                    endTime = (new Date).getTime() + durationInMs;
                    localStorage.setItem("timerEndTime", endTime);
                }
                const days = Math.floor(remainingTime / (1e3 * 60 * 60 * 24));
                const hours = Math.floor(remainingTime % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
                const minutes = Math.floor(remainingTime % (1e3 * 60 * 60) / (1e3 * 60));
                const seconds = Math.floor(remainingTime % (1e3 * 60) / 1e3);
                const daysElement = document.querySelector(".days-timer-element");
                const hoursElement = document.querySelector(".hours-timer-element");
                const minutesElement = document.querySelector(".minutes-timer-element");
                const secondsElement = document.querySelector(".seconds-timer-element");
                daysElement.innerHTML = `${days}`;
                hoursElement.innerHTML = `${hours}`;
                minutesElement.innerHtml = `${minutes}`;
                secondsElement.innerHTML = `${seconds}`;
            }
            setInterval(updateTimer, 1e3);
            updateTimer();
        };
        setTimerToApp(5);
    }));
    document.addEventListener("DOMContentLoaded", (() => {
        const blockContent = document.querySelector(".dollars-block__content");
        const target = document.querySelector(".dollars-block__content");
        const observer = new IntersectionObserver(onVisibilityChange, {
            root: null,
            rootMargin: "0px",
            threshold: 1
        });
        observer.observe(target);
        function onVisibilityChange(entries, observer) {
            entries.forEach((entry => {
                if (entry.isIntersecting) {
                    blockContent.classList.remove("_hidden");
                    setTimeout((() => {
                        blockContent.style.opacity = "1";
                    }), 200);
                    observer.disconnect();
                }
            }));
        }
        const hoverAndActivePlayButton = () => {
            const defaultPlayButton = document.querySelector(".dollars-block__button-default");
            const hoverPlayButton = document.querySelector(".dollars-block__button-hover");
            const activePlayButton = document.querySelector(".dollars-block__button-active");
            const playButtonBlock = document.querySelector(".dollars-block__play-button");
            playButtonBlock.addEventListener("mouseenter", (() => {
                defaultPlayButton.classList.add("_hidden");
                hoverPlayButton.classList.remove("_hidden");
                activePlayButton.classList.add("_hidden");
            }));
            playButtonBlock.addEventListener("mouseleave", (() => {
                defaultPlayButton.classList.remove("_hidden");
                hoverPlayButton.classList.add("_hidden");
                activePlayButton.classList.add("_hidden");
            }));
            playButtonBlock.addEventListener("mousedown", (() => {
                defaultPlayButton.classList.add("_hidden");
                hoverPlayButton.classList.add("_hidden");
                activePlayButton.classList.remove("_hidden");
            }));
            playButtonBlock.addEventListener("mouseup", (() => {
                defaultPlayButton.classList.add("_hidden");
                hoverPlayButton.classList.remove("_hidden");
                activePlayButton.classList.add("_hidden");
            }));
        };
        hoverAndActivePlayButton();
    }));
    window["FLS"] = true;
})();