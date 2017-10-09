/**
 * Created by summer on 2017/10/9.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var miniCss = require('gulp-minify-css')
gulp.task('uglify', function() {
    gulp.src(["js/*.js"])
        .pipe(concat('main.js'))
        .pipe(rename({'suffix': '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('js/'))
});
gulp.task('minicss', function() {
    gulp.src(["css/*.css"])
        .pipe(concat('main.css'))
        .pipe(rename({'suffix': '.min'}))
        .pipe(miniCss())
        .pipe(gulp.dest('css/'))
})