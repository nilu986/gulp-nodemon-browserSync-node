/**
 * Module Dependencies
 */

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

/**
 * Gulp Tasks
 */



gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: './bin/www',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      reload({ stream: false });
    }, 1000);
  });
});
gulp.task('browser-sync', gulp.series('nodemon', function() {
  browserSync.init(null, {
    proxy: "http://localhost:3000",  // local node app address
    files:["views/**/*.*"],
    port: 5000,  // use *different* port than above
    notify: true
  });
})
);
gulp.task('default', gulp.series('browser-sync'), function () {
  gulp.watch(['views/*.pug'], reload);
});
