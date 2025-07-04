# Restaurant Page

A modern, single-page restaurant website built with JavaScript and Webpack. This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum and demonstrates modular JavaScript, dynamic DOM manipulation, and asset management with Webpack.

## Features

- **Single Page Application**: Seamless navigation between Home, Menu, and Contact sections without page reloads.
- **Modular Codebase**: Each section is managed by its own JavaScript and CSS module for maintainability.
- **Webpack Bundling**: Uses Webpack for asset bundling, hot reloading, and optimized builds.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dere-12/Restaurant-Page.git
   cd Restaurant-Page
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The app will open automatically in your browser at `http://localhost:8080`.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## Live Demo

[View Live Site](https://dere-12.github.io/Restaurant-Page/)

## Project Structure

```
Restaurant-Page/
├── src/
│   ├── contact.js, contact.css
│   ├── home.js, home.css
│   ├── menu.js, menu.css
│   ├── styles.css
│   ├── template.html
│   └── images/
├── package.json
├── webpack.config.js
└── README.md
```

## Image Credits

- **Beef Tacos**: Krish Parmar on [Unsplash](https://unsplash.com/photos/a-plate-of-tacos-with-a-lime-being-drizzled-on-top-uQx8wPEs8II)
- **Cheeseburger**: amirali mirhashemian on [Unsplash](https://unsplash.com/photos/double-patty-cheeseburger-jh5XyK4Rr3Y)
- **Lemonade**: Francesca Hotchin on [Unsplash](https://unsplash.com/photos/lime-juice-on-drinking-glass-beside-sliced-limes-p5EiqkBYIEE)
- **Pizza**: Aurélien Lemasson-Théobald on [Unsplash](https://unsplash.com/photos/round-cooked-pizza-x00CzBt4Dfk)
- **Spaghetti**: Rob Wicks on [Unsplash](https://unsplash.com/photos/a-white-plate-topped-with-spaghetti-and-bacon-fDLBn8X_IlU)

---

> _This project was created for educational purposes as part of The Odin Project curriculum._
