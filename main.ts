import ThemeController from './ThemeController'
import './styles.css'

const themes = {
	'Dark': {
		'main-color': 'hsl(0, 0%, 13%)',
		'text-color': 'black',
		'line-color': 'hsl(267, 95%, 76%)',
		'alt-color': 'hsl(0, 0%, 66%)',
	},
	'Light': {
		'main-color': 'hsl(0, 0%, 90%)',
		'text-color': 'white',
		'line-color': 'hsl(267, 95%, 76%)',
		'alt-color': 'hsl(0, 0%, 66%)',
	},
}

// For demo purposes
// eslint-disable-next-line @typescript-eslint/no-explicit-any
document.addEventListener('themeChange', (eve: any,) => {
	const newTheme = eve.detail.theme
	document.getElementById('currentTheme',).innerHTML = newTheme
},)

const testThemeController = new ThemeController(themes,)
document.getElementById('currentTheme',).innerHTML = testThemeController.theme
const switchTheme = () => {
	testThemeController.theme = testThemeController.theme === 'Light' ? 'Dark' : 'Light'
}

document.getElementById('ChangeThemeButton',).addEventListener('click', switchTheme,)
