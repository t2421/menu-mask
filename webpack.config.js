module.exports = {
    mode: "development",
    entry: "./src/compile/scripts/main.js",
    output:{
        filename: "scripts/bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            use: [
              {
                loader: "babel-loader",
                options: {
                  presets: [
                    "@babel/preset-env"
                  ]
                }
              }
            ]
          }
        ]
      }
}