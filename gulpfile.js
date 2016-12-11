'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify');

    // svgmin = require('gulp-svgmin'),
    // svgstore = require('gulp-svgstore'),
    // cheerio = require('gulp-cheerio');

gulp.task('css', function () {
    return gulp.src(['styles/main.scss', 'styles/components/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(autoprefixer({ browsers: ['ie >= 9', 'last 3 versions', '> 2%'] }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/css/'))
        .pipe(livereload());
});

gulp.task('js', function() {
    return gulp.src(['scripts/main.js', 'scripts/modules/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/js/'))
        .pipe(livereload());
});

// gulp.task('icons', function () {
//     return gulp.src('assets/icons/sprite/*.svg')
//         .pipe(svgmin())
//         .pipe(svgstore({ inlineSvg: true }))
//         .pipe(cheerio({
//             run: function ($, file) {
//                 $('[fill]').removeAttr('fill');
//             },
//             parserOptions: { xmlMode: true }
//         }))
//         .pipe(gulp.dest('assets/build/'))
//         .pipe(livereload());
// });

gulp.task('watch', ['css', 'js'], function () {
    livereload.listen();
    
    gulp.watch('styles/**/*.scss', ['css']);
    gulp.watch('scripts/**/*.js', ['js']);
    // gulp.watch('assets/icons/sprite/*.svg', ['icons']);
});

gulp.task('default', ['css', 'js']);