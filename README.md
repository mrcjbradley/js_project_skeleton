## Node Version Manager (NVM)
- To find out which version of node your machine is currently running, use the command `node -v` in your terminal
- We want to build our projects in the latest stable build that is supported by all of our dependencies.
- For easy node version management, we'll use the [Node Version Manager](https://github.com/nvm-sh/nvm)
  
### Installation and Config
We can use homebrew to install the manager:
1. update homebrew with `brew update`
2. install the manager with `brew install nvm`
3. make a directory for the manger in your root folder with `mkdir ~/.nvm`
4. in your `~/.zshrc` file for zsh users or in your `.bash_profile` for bash users, add the following:

   ```
   export NVM_DIR=~/.nvm
   source $(brew --prefix nvm)/nvm.sh
   ```
5. Finally, we need to restart our terminal to load the new changes.

### Versioning
- Once nvm is installed and configured, we want to install the needed version of node with the command `nvm install 14.15.0`
- In order to switch node versions, use the command `nvm use <desired node version>` (in our case, we want to run `nvm use 14.15.0`)

## Project Set Up

1. create your new project directory and `cd` into it 
2. `git init`
3.  create a simple `.gitignore`
    ```
    # .gitignore

    /node_modules/
    ```
    > **NOTE WE WILL NOT IGNORE OUR BUNDLE FILES IN ORDER TO HOST ON GITHUB PAGES**
4.  `npm init` and follow prompts
5.  install dev dependencies
    ```
    npm install  @babel/core @babel/plugin-proposal-optional-chaining @babel/preset-env autoprefixer babel-loader css-loader fibers file-loader mini-css-extract-plugin postcss-loader sass sass-loader style-loader url-loader webpack webpack-cli webpack-dev-server webpack-merge --save-dev
    ```
6.  create basic `/src` subdirectory and file structure
    ```
    - src/
        - index.js
        styles/
            - index.scss
        scripts/
    ```
7.  In your root directory, create `webpack.common.js`

    ```JavaScript
    // webpack.common.js

    const path = require("path");
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    const outputDir = "./dist";

    module.exports = {
      entry: path.resolve(__dirname, "src", "index.js"), 
      output: {
        path: path.join(__dirname, outputDir),
        filename: "[name].js",
        publicPath: "/dist/",
      },
      resolve: {
        extensions: [".js"], // if we were using React.js, we would include ".jsx"
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
                exclude: /node_modules/,
              }, // if we were using React.js, we would include "react"
            },
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
                },
              },
              "css-loader",
              "postcss-loader",
            ],
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
                  publicPath: "images/",
                },
              },
            ],
          },
          {
            test: /\.s[ca]ss/i,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // you can specify a publicPath here
                  // by default it uses publicPath in webpackOptions.output
                  publicPath: "../",
                },
              },
              "css-loader",
              "resolve-url-loader",
              {
                loader: "sass-loader", 
                options: {
                  implementation: require('sass')
                }
              },
              "postcss-loader",
            ],
          },
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // all options are optional
          filename: "[name].css",
          chunkFilename: "[id].css",
          ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        require("autoprefixer"),
      ],
    };

    ```

8.  Create `webpack.dev.js`

    ```JavaScript
    // webpack.dev.js
    const { merge } = require("webpack-merge");
    const common = require("./webpack.common.js");

    module.exports = merge(common, {
      mode: "development",
      devtool: "inline-source-map",
      devServer: {
        contentBase: "./",
        watchContentBase: true,
        open: true, // use "chrome" for PC
      },
    });
    ```

9.  Create `webpack.prod.js`

    ```JavaScript
    // webpack.prod.js
    const { merge } = require("webpack-merge");
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

    ...

    "browserslist": [
    "last 1 version",
    "> 1%",
    "maintained node versions",
    "not dead"
    ],
    "scripts": {
       "serve": "NODE_ENV=development webpack-dev-server --config webpack.dev.js ",
       "watch": "NODE_ENV=development webpack --watch --config webpack.dev.js ",
       "build": "NODE_ENV=production webpack --config webpack.prod.js"
     },

    ...


    ```

12. create `index.scss` in `/src/styles`
    - this will be a place to import all of your custom style sheets
13. create `index.js` in `/src` directory and import style `/src/styles/index.scss`
    ```JS
    // src/index.js
    import "./styles/index.scss";
    ```
14. create `index.html` and import `dist/main.css` and `dist/main.js` appropriately

    ``` html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="./dist/main.css" />
        <title>Project Name</title>
    </head>

    <body>
        <script src="./dist/main.js"></script>
    </body>
    </html>
    ```