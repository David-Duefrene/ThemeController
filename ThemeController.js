export default class ThemeController {
    constructor(themeLists, startTheme = 'None', updateThemeCallback = () => {}) {
        this.Themes = themeLists;
        this.CurrentTheme = startTheme;
        this.updateThemeCallback = updateThemeCallback;

        Object.keys(this.Themes[startTheme]).forEach(el => {
            document.documentElement.style.setProperty(`--${el}`, this.Themes[startTheme][el]);
        });
    }

    doesThemeExist(theme) {
        return this.themeList.includes(theme);
    }

    addNewTheme(theme) {
        const themeName = Object.keys(theme)[0];
        if (this.doesThemeExist(themeName)) {
            throw new Error(`Theme ${themeName} already exists`);
        }
        this.Themes = { ...theme, ...this.Themes };
    }

    deleteTheme(theme) {
        if (!this.doesThemeExist(theme)) {
            throw new Error(`Theme ${theme} does not exist`);
        }
        delete this.Themes[theme];
    }

    set updateTheme(theme) {
        const themeName = Object.keys(theme)[0];
        if (!this.doesThemeExist(themeName)) {
            throw new Error(`Theme ${themeName} does not exist`);
        }
        this.Themes[themeName] = { ...this.Themes[themeName], ...theme[themeName]};

        Object.keys(this.Themes[themeName]).forEach(el => {
            document.documentElement.style.setProperty(`--${el}`, this.Themes[themeName][el]);
        });

        // create the event
        let themeChange = new CustomEvent('themeUpdated', {
            detail: { theme }
        });
        // dispatch the event
        document.dispatchEvent(themeChange);
        this.updateThemeCallback(themeName);
    }

    set theme(theme) {
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
        return Object.keys(this.Themes);
    }
}
