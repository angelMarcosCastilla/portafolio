import { theme } from "./theme.js";
import { showMenu } from "./showMenu.js";
const $aboutInfo = document.getElementById("aboutInfo");
let defaultTheme = localStorage.getItem("theme") || "ligth";

const saveThemeLocalStorage = (theme) => {
	localStorage.setItem("theme", theme);
};
const toggleInfo = (option) => {
	document
		.querySelector(".about-info__item--active")
		.classList.remove("about-info__item--active");
	$aboutInfo.children[option].classList.add("about-info__item--active");
};

const toggleClassOption = (elementToggleClass) => {
	document
		.querySelector(".option__item--active")
		.classList.remove("option__item--active");

	elementToggleClass.classList.add("option__item--active");
};

const changeTheme = (defaultTheme) => {
	const themeToApply = Object.entries(theme[defaultTheme]);
	themeToApply.map(([themeProperty, themeValues]) =>
		document.documentElement.style.setProperty(themeProperty, themeValues)
	);
};
addEventListener("click", (e) => {
	if (e.target.matches(".option__item")) {
		toggleClassOption(e.target);
		toggleInfo(e.target.dataset.option);
	}

	if (e.target.closest(".toggle-switch")) {
		defaultTheme == "ligth"
			? (defaultTheme = "dark")
			: (defaultTheme = "ligth");
		saveThemeLocalStorage(defaultTheme);
		changeTheme(defaultTheme);
	}
});

showMenu("menu-icon", "menu");
changeTheme(defaultTheme);
