
// This file updates the scss style sheets to css style sheets

// Import stuff
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

//Set file paths
var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

gulp.task('compile_scss',function() {
	gulp.src(SCSS_SRC)
	.pipe(sass().on('error',sass.logError))
	.pipe(minifyCSS())
	.pipe(rename({ suffix: '.min'}))
	.pipe(changed(SCSS_DEST))
	.pipe(gulp.dest(SCSS_DEST));
});
//"&& cd build && git add . && git commit -m 'most recent build' && git push"

gulp.task('watch_scss', function() {
	gulp.watch(SCSS_SRC,function(){
		return gulp.src(SCSS_SRC)
		.pipe(sass().on('error',sass.logError))
		.pipe(minifyCSS())
		.pipe(rename({ suffix: '.min'}))
		.pipe(changed(SCSS_DEST))
		.pipe(gulp.dest(SCSS_DEST));
	});
});

gulp.task('default',gulp.series('watch_scss',function() {

}));
