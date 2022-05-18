export default class ThemeController {
    constructor(themeLists, startTheme = 'None', updateThemeCallback = () => {}) {
        this.Themes = themeLists;
        this.ThemeList = Object.keys(themeLists);
        this.CurrentTheme = startTheme;
        this.updateThemeCallback = updateThemeCallback; // TODO get this working
        Object.keys(this.Themes[startTheme]).forEach(el => {
            document.documentElement.style.setProperty(`--${el}`, this.Themes[startTheme][el]);
        });
    }

    doesThemeExist(theme) {
        return this.ThemeList.includes(theme);
    }

    setTheme(theme) {
        if (!this.doesThemeExist(theme)) {
            throw new Error(`Theme ${theme} does not exist`);
        }
        Object.keys(this.Themes[theme]).forEach(el => {
            document.documentElement.style.setProperty(`--${el}`, this.Themes[theme][el]);
        });
        this.CurrentTheme = theme;
        this.updateThemeCallback(theme);

        // create the event
        let themeChange = new CustomEvent('themeChange', {
            detail: { theme }
        });
        // dispatch the event
        document.dispatchEvent(themeChange);
    }

    get theme() {
        return this.CurrentTheme;
    }

    get themeList() {
        return this.ThemeList;
    }
}
