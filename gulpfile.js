'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();
var run = require("run-sequence");

sass.compiler = require('node-sass');


gulp.task("style", function() {
	gulp.src("sass/style.scss")
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer()
		]))
		.pipe(gulp.dest("css"))
		.pipe(server.stream());
});

gulp.task("serve", function () {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("*.html", ["html"]).on("change", server.reload);
  gulp.watch("js/*.js", ["concat"]).on("change", server.reload);
});

gulp.task("build", function (done) {
  run(
    "style",
    done);
});