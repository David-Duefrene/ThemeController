import ThemeController from './ThemeController'
import './styles.css'

const themes = {
	'Light': {
		'main-color': 'hsl(0, 0%, 13%)',
		'text-color': 'black',
		'line-color': 'hsl(267, 95%, 76%)',
		'alt-color': 'hsl(0, 0%, 66%)',
	},
	'Dark': {
		'main-color': 'hsl(0, 0%, 90%)',
		'text-color': 'white',
		'line-color': 'hsl(267, 95%, 76%)',
		'alt-color': 'hsl(0, 0%, 66%)',
	},
}
let currentTheme = 'Light'
document.getElementById('currentTheme',).innerHTML = currentTheme

// For demo purposes
// eslint-disable-next-line @typescript-eslint/no-explicit-any
document.addEventListener('themeChange', (eve: any,) => {
	currentTheme = eve.detail.theme
	document.getElementById('currentTheme',).innerHTML = currentTheme
},)

const testThemeController = new ThemeController(themes, currentTheme,)

const switchTheme = () => {
	testThemeController.theme = currentTheme === 'Light' ? 'Dark' : 'Light'
}

document.getElementById('ChangeThemeButton',).addEventListener('click', switchTheme,)
