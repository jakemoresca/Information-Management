/// <binding AfterBuild='build-script' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps');

var paths = {
    bower: "./bower_components/",
    npm: "./node_modules/",
    lib: "./Scripts/"
};

var npm = {
    "babel": "babel-standalone/**/*.js",
    "react": "react/dist/**/*.js",
    "react-dom": "react-dom/dist/**/*.js",
    "react-router": "react-router/umd/**/*.js",
    "react-router-dom": "react-router-dom/umd/**/*.js",
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

// build all the JavaScript things
gulp.task('build-script', function ()
{
    var src = [
        './Scripts/app/**/*.jsx'
    ];

    return gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['react', 'es2015']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./Scripts/dist/app'));
});