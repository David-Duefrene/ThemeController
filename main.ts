import ThemeController from './ThemeController'

const themes = {
	'dark': {
		'main-color': 'black',
		'text-color': 'white',
	},
	'light': {
		'main-color': 'white',
		'text-color': 'black',
	},
}

// Capitalize first letter of string
const capitalize = (string,) => {
	return string.charAt(0,).toUpperCase() + string.slice(1,)
}

// For demo purposes
// eslint-disable-next-line @typescript-eslint/no-explicit-any
document.addEventListener('themeChange', (eve: any,) => {
	const newTheme = eve.detail.theme
	document.getElementById('currentTheme',).innerHTML = capitalize(newTheme,)
},)

const testThemeController = new ThemeController(themes,)
document.getElementById('currentTheme',).innerHTML = capitalize(testThemeController.theme,)
const switchTheme = () => {
	testThemeController.theme = testThemeController.theme === 'light' ? 'dark' : 'light'
}

document.getElementById('ChangeThemeButton',).addEventListener('click', switchTheme,)
