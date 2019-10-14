`git init`

create .gitignore and add `/node_modules/`

`npm init` and follow prompts

```
npm install @babel/core @babel/preset-env autoprefixer babel-loader css-loader mini-css-extract-plugin fibers node-sass postcss-loader sass sass-loader style-loader webpack webpack-cli webpack-dev-server webpack-merge

```

create basic `/src` subdirectory file structure

```
- src/
    - index.js
    styles/
        - index.scss
    scripts/

```

in root directory, create `webpack.common.js`

```JavaScript
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const outputDir = "./dist";

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"), //
    output: {
        path: path.join(__dirname, outputDir),
        filename: "[name].js",
        publicPath: "/dist/"
    },
    resolve: {
        extensions: [".js"] // if we were using React.js, we would include ".jsx"
    },
    module: {
        rules: [{
                test: /\.js$/, // if we were using React.js, we would use \.jsx?$/
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        exclude: /node_modules/
                    } // if we were using React.js, we would include "react"
                }
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: "../",
                            hmr: process.env.NODE_ENV === "development"
                        }
                    },
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.scss/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: "../",
                            hmr: process.env.NODE_ENV === "development"
                        }
                    },
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
        ignoreOrder: false // Enable to remove warnings about conflicting order
    }), require("autoprefixer")]
};
```

Create `webpack.dev.js`

```JavaScript
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./",
        watchContentBase: true,
        open: "Google Chrome"
    }
});
```

Create `webpack.prod.js`

```JavaScript
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map"
});
```

create `postcss.config.js`

```JavaScript
module.exports = {
    plugins: {
        autoprefixer: {}
    }
};
```

add `browserlist` key and update `scripts` in `package.json`

```JavaScript
  "browserslist": [
    "last 1 version",
    "> 1%",
    "maintained node versions",
    "not dead"
  ],
  "scripts": {
    "start": "webpack-dev-server --config webpack.dev.js",
    "webpack:watch": "webpack --watch --config webpack.dev.js",
    "webpack:build": "webpack --config webpack.prod.js  --optimize-minimize"
  },
```

create `index.scss` in `/src/styles`

create `index.js` in `/src` directory and import style `/src/styles/index.scss`

create `index.html` and import `dist/main.css` and `dist/main.js` appropriately
