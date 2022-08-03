import ThemeController from './ThemeController';
import './styles.css'

const themes = {
    "Light": {
        "main-color": "hsl(0, 0%, 13%)",
        "text-color": "black",
        "line-color": "hsl(267, 95%, 76%)",
        "alt-color": "hsl(0, 0%, 66%)"
    },
    "Dark": {
        "main-color": "hsl(0, 0%, 90%)",
        "text-color": "white",
        "line-color": "hsl(267, 95%, 76%)",
        "alt-color": "hsl(0, 0%, 66%)"
    }
}
let currentTheme = "Light";
document.getElementById("currentTheme").innerHTML = currentTheme;

document.addEventListener('themeChange', (eve: any) => {
    currentTheme = eve.detail.theme;
    console.table(eve);
    console.log(`Theme: ${currentTheme}`);
    document.getElementById("currentTheme").innerHTML = currentTheme;
})

let theme_controller = new ThemeController(themes, currentTheme);

const switchTheme = () => {
    theme_controller.theme = currentTheme == "Light" ? "Dark" : "Light";
}

document.getElementById("ChangeThemeButton").addEventListener("click", switchTheme);
