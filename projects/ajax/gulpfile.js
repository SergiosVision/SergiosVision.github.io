var gulp = require('gulp'),
    webserver = require('gulp-webserver');

gulp.task('webserver', function(){
    gulp.src('build/')
        .pipe(webserver({
            livereload: true,
            open: true,
            port: 80
    }));
});

gulp.task('default', ['webserver']);