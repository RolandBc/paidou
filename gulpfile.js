var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload');

gulp.task('webserver', function () {
    connect.server({
        port: 8080,
        livereload: true,
        root: ['.', '.tmp']
    });
});

gulp.task('livereload', function () {
    gulp.src(['.tmp/styles/*.css', '.tmp/scripts/*.js', '**/*.html'])
        .pipe(connect.reload());
});

// gulp.task('less', function () {
//     gulp.src('styles/main.less')
//         .pipe(less())
//         .pipe(gulp.dest('styles'))
//         .pipe(connect.reload());
// });

gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(less())
        .pipe(gulp.dest('html'))
        .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src('./*.css')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('styles/*.less', ['less']);
    gulp.watch('./*.html', ['html']);
    gulp.watch('./*.css', ['css']);
})

gulp.task('default', ['webserver', 'watch', 'livereload']);