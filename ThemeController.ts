import { ThemeList, } from './Interfaces'

export default class ThemeController {
	Themes: ThemeList
	CurrentTheme: string
	updateThemeCallback: (x: string) => void

	constructor(themeLists, updateThemeCallback = () => {},) {
		this.Themes = themeLists
		this.updateThemeCallback = updateThemeCallback

		// Default theme
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)',).matches) {
			this.CurrentTheme = 'dark'
		} else {
			this.CurrentTheme = 'light'
		}

		Object.keys(this.Themes[this.CurrentTheme],).forEach((el,) => {
			document.documentElement.style.setProperty(`--${el}`, this.Themes[this.CurrentTheme][el],)
		},)
	}

	doesThemeExist(theme,) {
		return this.themeList.includes(theme,)
	}

	addNewTheme(theme,) {
		const themeName = Object.keys(theme,)[0]
		if (this.doesThemeExist(themeName,)) {
			throw new Error(`Theme ${themeName} already exists`,)
		}
		this.Themes = { ...theme, ...this.Themes, }
	}

	deleteTheme(theme,) {
		if (!this.doesThemeExist(theme,)) {
			throw new Error(`Theme ${theme} does not exist`,)
		}
		delete this.Themes[theme]
	}

	updateTheme(theme,) {
		const themeName = Object.keys(theme,)[0]
		if (!this.doesThemeExist(themeName,)) {
			throw new Error(`Theme ${themeName} does not exist`,)
		}
		this.Themes[themeName] = theme[themeName]

		Object.keys(this.Themes[themeName],).forEach((el,) => {
			document.documentElement.style.setProperty(`--${el}`, this.Themes[themeName][el],)
		},)

		this.theme = themeName
	}

	set theme(theme,) {
		if (!this.doesThemeExist(theme,)) {
			throw new Error(`Theme ${theme} does not exist`,)
		}
		Object.keys(this.Themes[theme],).forEach((el,) => {
			document.documentElement.style.setProperty(`--${el}`, this.Themes[theme][el],)
		},)
		this.CurrentTheme = theme

		this.updateThemeCallback(theme,)
		// Create the event
		const themeChange = new CustomEvent('themeChange', {
			detail: { theme, },
		},)
		// Dispatch the event
		document.dispatchEvent(themeChange,)
	}

	get theme() {
		return this.CurrentTheme
	}

	get themeList() {
		return Object.keys(this.Themes,)
	}
}
