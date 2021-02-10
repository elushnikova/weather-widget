# Open Weather Map widget

## How to use

### Use in own app
Insert the following snippet to your HTML page.
```html
<weather-widget />
<script src="https://owm-widget.netlify.app/weather-widget.min.js"></script>
```

Publish your page and serve it via HTTPS. Without HTTPS geolocation API will not be available.

### Demo
You can see published demo here: https://owm-widget.netlify.app/demo

### Script files
- Minified: https://owm-widget.netlify.app/weather-widget.min.js
- Regular: https://owm-widget.netlify.app/weather-widget.js

### Icons
UI icons are taken from [Icons8](https://icons8.com/).

---

## How to develop

Create own account at [Open Weather](https://openweathermap.org/current). Get API key and use it to replace value of `API_KEY` constant in `src/classes/url/ApiUrl.ts` file.

### Setup project
```
npm install
```

### Compile and hot-reload for development
```
npm run dev
```

or

```
npm run serve
```

### Compile and minify for production
```
npm run build
```

Project compiles as web component, with Vue.js code already included in `weather-widget.js`

Publish resulting `dist/` folder and link to JS file in it.

### Run unit tests
```
npm run test
```

### Lint and fix files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
