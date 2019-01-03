const { src, dest } = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const tildeImporter = require('node-sass-tilde-importer');

function buildSass() {
  return src("./assets/main.scss")
    .pipe(sass({
      outputStyle: "compressed",
      importer: tildeImporter,
      includePaths: ["./_sass/"]
    }))
    .pipe(autoprefixer())
    .pipe(dest("./assets"))
}

exports.sass = buildSass;