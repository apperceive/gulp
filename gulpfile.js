var gulp = require('gulp');

var src = 'in/**/*.txt',
    dest = 'out';

gulp.task('copytree', function() {
  return gulp.src(src)
    .pipe(gulp.dest(dest));
});

var foreach = require('gulp-foreach');

// std in and out?
function doSomethingWithEachFileIndividually(arg) {
  return arg + " markus";
}
 
gulp.task('foreach', function () {
  return gulp.src(src)
    .pipe(foreach(function(stream, file){
      return stream
        .pipe(doSomethingWithEachFileIndividually('test'))
        .pipe(concat(file.name));
    }))
    .pipe(gulp.dest(dest));
});

var todo = require('gulp-todo');
var base = '/var/www/html/sln.apperceive.net/public/sites/all/';
var paths = base + 'themes/**/*.php';

// generate todo from files 
gulp.task('todo', function() {
    gulp.src(paths)
//        .pipe(todo({ fileName: 'tw-todo.md' }))
        .pipe(todo())
        .pipe(gulp.dest('./'));
});




