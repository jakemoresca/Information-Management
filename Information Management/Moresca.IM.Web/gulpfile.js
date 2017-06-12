/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

var paths = {
    bower: "./bower_components/",
    npm: "./node_modules/",
    lib: "./Scripts/"
};

var npm = {
    "react": "react/dist/**/*.js",
    "react-router": "react-router/es/**/*.js",
    "requirejs": "requirejs/**/*.js",
    "requirejs-babel": "requirejs-babel/**/*.js"
}

gulp.task("copy", function ()
{
    for (var destinationDir in npm)
    {
        gulp.src(paths.npm + npm[destinationDir])
            .pipe(gulp.dest(paths.lib + destinationDir));
    }
});

gulp.task('clean', function ()
{
});