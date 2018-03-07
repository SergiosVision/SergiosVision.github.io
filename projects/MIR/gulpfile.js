var gulp         = require('gulp'), // Подключаем Gulp
    sass         = require('gulp-sass'), //Подключаем Sass пакет,
    sourcemaps   = require('gulp-sourcemaps'),
    plumber      = require('gulp-plumber'), //продолжить работу даже при возникновении ошибки
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
    autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('frontend/sass/**/*.sass') // Берем источник
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css')) // Выгружаем результата в папку app/css
});

gulp.task('scripts', function() {
    return gulp.src([ // Берем все необходимые библиотеки
        'frontend/libs/*.js' // Берем JS
    ])
        .pipe(plumber())
        .pipe(concat('main.min.js')) // Собираем их в кучу в новом файле main.min.js
        .pipe(uglify('main.min.js', {
            outSourceMap: true
        })) // Сжимаем JS файл
        .pipe(gulp.dest('./js')); // Выгружаем в папку app/js
});
gulp.task('scripts_vendor', function() {
    return gulp.src([ // Берем все необходимые библиотеки
        'frontend/libs/vendor/*.js' // Берем JS
    ])
        .pipe(plumber())
        .pipe(concat('vendor.min.js')) // Собираем их в кучу в новом файле vendor.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('./js')); // Выгружаем в папку app/js
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: './' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('clear', function () {
    return cache.clearAll();
});

gulp.task('watch', ['browser-sync', 'clear', 'sass', 'scripts'], function() {
    gulp.watch('frontend/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch('frontend/libs/*.js', ['scripts']);   // Наблюдение за JS файлами в папке js
});

gulp.task('default', ['watch']);
