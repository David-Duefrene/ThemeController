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


<iframe src="https://codesandbox.io/embed/eager-night-2mntxj?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="eager-night-2mntxj"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
