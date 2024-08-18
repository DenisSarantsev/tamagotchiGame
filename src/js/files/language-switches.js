document.addEventListener("DOMContentLoaded", () => {
	console.log(localStorage.getItem("lang"))
// Определяем текущий язык и если он не определялся ранее, устанавливаем его как русский по умолчанию
let currentLanguage = "ua";
if ( localStorage.getItem("lang") === null ) {
	localStorage.setItem("lang", `${currentLanguage}`);
}
if ( localStorage.getItem("lang") === "ru" ) {
	currentLanguage = "ru";
} else if ( localStorage.getItem("lang") === "ua" ) {
	currentLanguage = "ua";
}

console.log(localStorage.getItem("lang"))
console.log(currentLanguage)
// --------------------------------------------------------------------- Элементы, в которых нам нужно отображать текст
// Блок 1 - Стартовый блок с гоблином)
const goblinTitle = document.querySelector(".timer-content__title"); // Заголовок (без тегов)
const goblinSubtitle = document.querySelector(".timer-content__subtitle"); // Подзаголовлк (без тегов)

// Блок 2 - С падающими долларами
const dollarsSubtitle = document.querySelector(".dollars-block__top-title-container-subtitle"); // Подзаголовок (без тегов)
const dollarsListItemOne = document.querySelector(".dollars-list-item-one"); // Элемент списка (с тегами)
const dollarsListItemTwo = document.querySelector(".dollars-list-item-two"); // Элемент списка (с тегами)
const dollarsListItemThree = document.querySelector(".dollars-list-item-three"); // Элемент списка (с тегами)
const dollarsListItemFour = document.querySelector(".dollars-list-item-four"); // Элемент списка (с тегами)
const dollarsBottomSubtitle = document.querySelector(".dollars-block__bottom-text-container"); // Нижний подзаголовок (без тегов)

// Блок 3 - Вращающееся колесо ( с 17.08.2024 были внесены изменения, и текст снизу и сверху больше не меняется а является статичным )
const jackpotTopText = document.querySelector(".jackpot-block__after-top-text"); // Верхний элемент с текстом (с тегами)
const jackpotBottomText = document.querySelector(".jackpot-block__after-bottom-text"); // Нижний элемент с текстом (без тегов)

// Блок 4 - Реферальная программа
const refTitle = document.querySelector(".reviews-content__title"); // Заголовок (без тегов)
const refListItemOne = document.querySelector(".ref-list-item-one"); // Элемент списка 1 (с тегами)
const refListItemTwo = document.querySelector(".ref-list-item-two"); // Элемент списка 2 (без тегов)
const refListItemThree = document.querySelector(".ref-list-item-three"); // Элемент списка 3 (без тегов)
const refListItemFour = document.querySelector(".ref-list-item-four"); // Элемент списка 4 (с тегами)
const refListItemFive = document.querySelector(".ref-list-item-five"); // Элемент списка 5 (без тегов)
const refCallToAction = document.querySelector(".reviews-content__call-to-action"); // Призыв к действию внизу страницы (Без тегов)

// Блок 5 - Последний блок с видео
const videoBlockTopText = document.querySelector(".dance-animation-block__text-wrapper-content"); // Текст (без тегов)
const videoBlockButtonText = document.querySelector(".video-block-button-text"); // Кнопка 
const videoBlockBottomText = document.querySelector(".dance-animation-block__bottom-subtitle"); // Текст под кнопкой (без тегов)


// --------------------------------------------------------------------- Логика переключения языка
const switchLanguage = () => {
	console.log(localStorage.getItem("lang"))
	if ( localStorage.getItem("lang") === "ru" ) {
		console.log("ru sd")
		// Блок 1
		goblinTitle.innerText = "Приглашаем вас в увлекательный мир игры Tamagotchi Money!";
		goblinSubtitle.innerText = "Начните свое приключение в мире экономических стратегий прямо сейчас! Не упустите возможность стать успешным!";
		// Блок 2
		dollarsSubtitle.innerText = "Это увлекательная игра о деньгах!";
		dollarsListItemOne.innerHTML = "Здесь вы сможете легко <span>заработать</span> всего одним нажатием кнопки раз в сутки.";
		dollarsListItemTwo.innerHTML = "Испытайте удачу, вращая <span>'Колесо фортуны'</span>, и получите шанс сорвать <span>Джекпот</span>.";
		dollarsListItemThree.innerHTML = "Постройте свою карьеру, <span>приглашая друзей</span> и знакомых в игру и получая за это <spanv>щедрые бонусы</span>.";
		dollarsListItemFour.innerHTML = "<span>Ваш заработок в игре</span> зависит только от ваших усилий и настойчивости.";
		dollarsBottomSubtitle.innerText = "Это не просто игра, это уникальная возможность погрузиться в захватывающий мир финансов и инвестиций.";
		// Блок 3
		jackpotTopText.innerHTML = "Для того чтоб его прокрутить нужно иметь на балансе <span>100$</span>. После прокрутка вам выпадет одно из этих 12 яиц. Каждое яйцо имеет срок действия <span>от 10 дней до 90 дней</span> и <span>от 105$ до 145$</span> к выплате.";
		jackpotBottomText.innerText = "Когда на барабане выпадает одно из особенных яиц, оно остается в накопительной джекпотной ячейке. Собрав коллекцию джекпотных яиц ты выигрываешь соответствующий джекпот.";
		// Блок 4
		refTitle.innerText = "Реферальная программа";
		refListItemOne.innerHTML = "Реферальная бонусы составляет <span>от 10% и до 20%</span> за каждую покупку вашего приглашенного.";
		refListItemTwo.innerText = "Процент меняется от количества приглашенных вами людей.";
		refListItemThree.innerText = "Чем больше вы приглашаете людей тем больше процент к выплатам вы получаете.";
		refListItemFour.innerHTML = "Выплаты за реферальную программу начисляются на баланс <span> 3 раза в месяц 7 -17- 27 </span> числа каждого месяца.";
		refListItemFive.innerText = "Для получения выплат необходимо иметь активный рацион питания";
		refCallToAction.innerText = "Приглашайте друзей и получайте дополнительные бонусы!";
		// Блок 5
		videoBlockTopText.innerText = "Не упустите свой шанс изменить свою финансовую жизнь к лучшему!"
		videoBlockButtonText.innerText = "Присоединяйся";
		videoBlockBottomText.innerText = "Присоединяйся к нашему Telegram-каналу и будь в курсе всех новостей!";
	} else if ( localStorage.getItem("lang") === "ua" ) {
		console.log("ua sd")
		// Блок 1
		goblinTitle.innerText = "Запрошуємо вас у захоплюючий світ гри Tamagotchi Money!";
		goblinSubtitle.innerText = "Почніть свою пригоду у світі економічних стратегій прямо зараз! Не пропустіть можливість стати успішним!";
		// Блок 2
		dollarsSubtitle.innerText = "Це захоплююча гра про гроші!";
		dollarsListItemOne.innerHTML = "Тут ви зможете легко <span>заробити</span> лише одним натисканням кнопки щодня.";
		dollarsListItemTwo.innerHTML = "Випробуйте удачу, обертаючи <span>'Колесо фортуни'</span>, і отримайте шанс зірвати <span>Джекпот</span>.";
		dollarsListItemThree.innerHTML = "Побудуйте свою кар'єру, <span>запрошуючи друзів</span> та знайомих у гру і отримуючи за це<spanv> щедрі бонуси/span>.";
		dollarsListItemFour.innerHTML = "<span>Ваш заробіток у грі</span> залежить тільки від ваших зусиль та наполегливості.";
		dollarsBottomSubtitle.innerText = "Це не просто гра, це унікальна можливість поринути у захоплюючий світ фінансів та інвестицій.";
		// Блок 3
		jackpotTopText.innerHTML = "Щоб прокрутити колесо, необхідно мати на балансі <span>100$</span>. Після прокручування вам випаде одне з цих 12 яєць. Кожне яйце має термін дії <span>від 10 днів до 90 днів</span> та <span>від 105$ до 145$</span> до виплати.";
		jackpotBottomText.innerText = "Коли на барабані випадає одне з особливих яєць, воно залишається в накопичувальному джекпотному сховищі. Зібравши колекцію джекпотних яєць ти виграєш відповідний джекпот.";
		// Блок 4
		refTitle.innerText = "Реферальна програма";
		refListItemOne.innerHTML = "Реферальні бонуси становлять <span>від 10% до 20%</span> за кожну покупку вашого запрошеного гравця";
		refListItemTwo.innerText = "Відсоток змінюється від кількості запрошених вами людей.";
		refListItemThree.innerText = "Чим більше ви запрошуєте людей, тим більший відсоток до виплат ви отримуєте.";
		refListItemFour.innerHTML = "Виплати за реферальну програму нараховуються на баланс <span> 3 рази в місяць: 7-17-27 </span> числа кожного місяця.";
		refListItemFive.innerText = "Для отримання виплат необхідно мати активний раціон харчування";
		refCallToAction.innerText = "Запрошуйте друзів та отримуйте додаткові бонуси!";
		// Блок 5
		videoBlockTopText.innerText = "Не пропустіть свій шанс змінити своє фінансове життя на краще!"
		videoBlockButtonText.innerText = "Приєднатись";
		videoBlockBottomText.innerText = "Приєднуйся до нашого Telegram-каналу та будь в курсі всіх новин!";
	}
}
switchLanguage()
// --------------------------------------------------------------------- Логика переключения языка и смены картинки
if ( document.querySelector(".lang-button") ) {
	const langButton = document.querySelector(".lang-button");
	const ruFlagImage = document.querySelector(".lang-button__ru-flag");
	const uaFlagImage = document.querySelector(".lang-button__ua-flag");
	if ( currentLanguage === "ru" ) {
		ruFlagImage.classList.add("_hidden");
		uaFlagImage.classList.remove("_hidden");
	} else if ( currentLanguage === "ua" ) {
		ruFlagImage.classList.remove("_hidden");
		uaFlagImage.classList.add("_hidden");
	}
	langButton.addEventListener("click", () => {
		ruFlagImage.classList.toggle("_hidden");
		uaFlagImage.classList.toggle("_hidden");
		localStorage.getItem("lang") === "ru" ? localStorage.setItem("lang", "ua") : localStorage.setItem("lang", "ru")
		switchLanguage()
	})
}
if ( document.querySelector(".mobile-header-lang-button") ) {
	const langMobileButton = document.querySelector(".mobile-header-lang-button");
	const ruFlagMobileImage = document.querySelector(".mobile-header-lang-button__ru-flag");
	const uaFlagMobileImage = document.querySelector(".mobile-header-lang-button__ua-flag");
	if ( currentLanguage === "ru" ) {
		ruFlagMobileImage.classList.add("_hidden");
		uaFlagMobileImage.classList.remove("_hidden");
	} else if ( currentLanguage === "ua" ) {
		ruFlagMobileImage.classList.remove("_hidden");
		uaFlagMobileImage.classList.add("_hidden");
	}
	langMobileButton.addEventListener("click", () => {
		ruFlagMobileImage.classList.toggle("_hidden");
		uaFlagMobileImage.classList.toggle("_hidden");
		localStorage.getItem("lang") === "ru" ? localStorage.setItem("lang", "ua") : localStorage.setItem("lang", "ru")
		switchLanguage()
	})
}



})