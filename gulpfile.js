var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify'); 
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
 
gulp.task('browserify', function() {
    var bundler = browserify({
        entries: ['client/app.js'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
    var watcher  = watchify(bundler);

    return watcher
    .on('update', function () { // When any files update
        var updateStart = Date.now();
        console.log('Updating!');
        watcher.bundle() // Create new bundle that uses the cache for high performance
        .pipe(source('app.js'))
    // This is where you add uglifying etc.
        .pipe(gulp.dest('./build/'));
        console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/'));
});


gulp.task('copy', function() {
 // Copy html
 gulp.src("client/*.html")
 .pipe(gulp.dest("build/"));
});


gulp.task('sass', function () {
  gulp.src('./client/assets/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./build/'));
});


gulp.task('start', function () {
  nodemon({
    script: 'server.js'
  });
})



//watch task

gulp.task('watch', function () {
   gulp.watch('client/*.html', ['copy']);
    gulp.watch('./client/assets/styles/**/*.scss', ['sass']);
});


// Just running the two tasks
gulp.task('default', ['start','browserify', 'copy', 'sass', 'watch']);
