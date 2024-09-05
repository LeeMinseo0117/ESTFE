const childProcess = require("child_process");

const path = require("path");

module.exports = {
  mode: "development",

  entry: {
    main: path.resolve("./src/app.js"),
  },

  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [path.resolve("./myLoader.js")],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      //toLocaleString : 날짜의 문자열 표현을 지역의 언어에 맞는 형식으로 반환합니다.
      banner: `'마지막 빌드 시간은 ' + new Date().toLocaleString() + ' 입니다.'
      Commit version : ${childProcess.execSync("git rev-parse --short HEAD")}
    Committer : ${childProcess.execSync("git config user.name")}
    Commit Date : ${new Date().toLocaleString()}`,
    }),
    new webpack.DefinePlugin({
      pw: 123456,
    }),
  ],
  banner: `
    Commit version : ${childProcess.execSync("git rev-parse --short HEAD")}
    Committer : ${childProcess.execSync("git config user.name")}
    Commit Date : ${new Date().toLocaleString()}`,
};
