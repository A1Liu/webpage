# Directory Guide
The directory structure is:

```
.
├── DIRECTORY.md
├── README.md
├── ReactTutorial.md
├── gulpfile.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.js
    ├── App.test.js
    ├── Assets
    │   ├── css
    │   │   └── default.min.css
    │   └── scss
    │       ├── _config.scss
    │       └── default.scss
    ├── components
    │   ├── footerComponent
    │   │   └── footer.js
    │   ├── headerComponent
    │   │   └── header.js
    │   └── pages
    │       ├── homepage.js
    │       ├── page2.js
    │       └── page3.js
    ├── index.js
    └── registerServiceWorker.js
```
<!--
tree --filelimit=10 -I 'build|node_modules'
-->