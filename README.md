1. create your new project directory and `cd` into it 
2. `git init`
3. create a simple `.gitignore`
        
        # .gitignore

        /node_modules/
4. `npm init` and follow prompts
5. install dev dependencies
   
        npm install @babel/core @babel/preset-env autoprefixer babel-loader css-loader fibers file-loader mini-css-extract-plugin node-sass postcss-loader sass sass-loader style-loader url-loader webpack webpack-cli webpack-dev-server webpack-merge --save-dev

6. create basic `/src` subdirectory file structure

        - src/
            - index.js
            styles/
                - index.scss
            scripts/

7. In your root directory, create `webpack.common.js`

    ```JavaScript
    // webpack.common.js

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
        rules: [
        {
            test: /\.js$/, // if we were using React.js, we would use \.jsx?$/
            use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: ["@babel/plugin-proposal-optional-chaining"],
                exclude: /node_modules/
            } // if we were using React.js, we would include "react"
            }
        },
        {
            test: /\.css$/,
            use: [
            {
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
            test: /\.(png|jpe?g|gif)$/i,
            use: [
            {
                loader: "file-loader",
                options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                name: "[name].[ext]",
                outputPath: "images/",
                publicPath: "images/"
                }
            }
            ]
        },
        {
            test: /\.scss/,
            use: [
            {
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
    plugins: [
        new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
        ignoreOrder: false // Enable to remove warnings about conflicting order
        }),
        require("autoprefixer")
    ]
    };

    ```

8. Create `webpack.dev.js`

    ```JavaScript
    // wepack.dev.js
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

9. Create `webpack.prod.js`

    ```JavaScript
    // webpack.prod.js
    const merge = require("webpack-merge");
    const common = require("./webpack.common.js");

    module.exports = merge(common, {
        mode: "production",
        devtool: "source-map"
    });
    ```

10. create `postcss.config.js`

    ```JavaScript
    // postcss.config.js
    module.exports = {
        plugins: {
            autoprefixer: {}
        }
    };
    ```

11. add `browserlist` key and update `scripts` in `package.json`

    ```JavaScript
    // package.json
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

12. create `index.scss` in `/src/styles`

13. create `index.js` in `/src` directory and import style `/src/styles/index.scss`

14. create `index.html` and import `dist/main.css` and `dist/main.js` appropriately
