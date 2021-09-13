var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browsersync = require("browser-sync").create(),
    autoprefixer = require('gulp-autoprefixer');

function styles() {
    return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 15 versions', "ie >= 10"],
        cascade: false
    }))
    .pipe(gulp.dest('./css/'));
}

function browserSync(done) {
    browsersync.init({
        server: {
        baseDir: ""
        },
        port: 5000,
        startPath: 'index.html'
    });
    done();
}

function watch() {
    return gulp.watch('sass/**/*.scss', gulp.series(styles));
}

exports.default = gulp.series(gulp.parallel(styles, browserSync, watch));