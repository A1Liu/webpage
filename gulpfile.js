
// This file updates the scss style sheets to css style sheets

// Import stuff
const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');
const markdown = require('gulp-markdown');

//Set file paths
const SCSS_SRC = './src/assets/scss/**/*.scss';
const SCSS_DEST = './src/assets/css';
var MD_SRC = '';
var MD_DEST = '';

function compile_scss() {
	return gulp.src(SCSS_SRC) // Source file is some scss document
	.pipe(sass().on('error',sass.logError)) // compile the source file
	.pipe(minifyCSS()) // Minify the css file
	.pipe(rename({ suffix: '.min'})) // Add a suffix
	// .pipe(changed(SCSS_DEST)) // only pass through changed files
	.pipe(gulp.dest(SCSS_DEST)); // put it in a destination
}
//"&& cd build && git add . && git commit -m 'most recent build' && git push"

gulp.task('watch_scss', function() {
	gulp.watch(SCSS_SRC, compile_scss );
});

gulp.task('default',gulp.series('watch_scss',function() {return 0;}));

gulp.task('compile_md', function(){
	return 0;
});
