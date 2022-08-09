![](https://img.shields.io/github/license/David-Duefrene/ThemeController)
[![](https://img.shields.io/badge/Demo-CodeSandBox-brightgreen)](https://codesandbox.io/embed/eager-night-2mntxj?fontsize=14&hidenavigation=1&theme=dark)
![](https://img.shields.io/github/languages/top/David-Duefrene/ThemeController)
![](https://img.shields.io/npms-io/final-score/themecontroller)
![](https://img.shields.io/npms-io/maintenance-score/themecontroller)
![](https://img.shields.io/npms-io/popularity-score/themecontroller)
![](https://img.shields.io/npms-io/quality-score/themecontroller)
![](https://img.shields.io/github/issues-raw/David-Duefrene/ThemeController)
![](https://img.shields.io/npm/v/themecontroller)

# Theme Controller
Theme Controller is a quick and easy theme manager.

## Usage

### Light and Dark mode switching with event listeners
#### LightDarkExample.js
```javascript
    import ThemeController from "./ThemeController";

    const themes = {
        "Light": {
            "main-color": "white",
            "text-color": "black",
        },
        "Dark": {
            "main-color": "black",
            "text-color": "white",
        }
    }

    document.addEventListener('themeChange', eve => {
        document.getElementById("currentTheme").innerHTML = eve.detail.theme;
    })

    let theme_controller = new ThemeController(themes, "Light");

    const switchTheme = () => {
        theme_controller.theme = currentTheme == "Light" ? "Dark" : "Light";
    }

    document.getElementById("ChangeThemeButton").addEventListener("click", switchTheme);
```
#### LightDarkExample.html
```HTML
<html>
    <body>
        <p id="currentTheme">Light</p>
        <button id="ChangeThemeButton">Test</button>
        <script type="module" src="./LightDarkExample.js"></script>
    </body>
</html>

```
