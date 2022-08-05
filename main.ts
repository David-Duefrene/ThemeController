import ThemeController from './ThemeController'
import './styles.css'

const themes = {
	'dark': {
		'main-color': 'hsl(0, 0%, 13%)',
		'text-color': 'black',
		'line-color': 'hsl(267, 95%, 76%)',
		'alt-color': 'hsl(0, 0%, 66%)',
	},
	'light': {
		'main-color': 'hsl(0, 0%, 90%)',
		'text-color': 'white',
		'line-color': 'hsl(267, 95%, 76%)',
		'alt-color': 'hsl(0, 0%, 66%)',
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
