var gulp         = require('gulp'), // Подключаем Gulp
    sass         = require('gulp-sass'), //Подключаем Sass пакет,
    jade         = require('gulp-jade'), //Подключаем Jade пакет,
    jadeInherit  = require('gulp-jade-inheritance'), // корректно обрабатываем зависимости
    filter       = require('gulp-filter'), // отфильтровываем не-партиалы (без `_` вначале)
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
    imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
    autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('app/sass/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('templates', function () {
    return gulp.src('app/templates/*.jade')
        .pipe(jadeInherit({basedir: 'app/templates/'}))
        .pipe(filter(function(file) {
            return !/\/_/.test(file.path) || !/^_/.test(file.relative);
        }))
        .pipe(jade({
            locals: true,
            pretty: true
        }))
        .pipe(gulp.dest('./app/'))
})

gulp.task('scripts', function() {
    return script();
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('watch', ['browser-sync', 'sass', 'scripts', 'templates'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch('app/templates/*.jade', ['templates']); // Наблюдение за sass файлами в папке sass
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts', 'templates'], function() {

    var buildCss = gulp.src([ // Переносим библиотеки в продакшен
        'app/css/main.min.css'
    ])
        .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
        .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
        .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
        .pipe(gulp.dest('dist'));

});

gulp.task('default', ['watch']);

gulp.task('clear', function () {
    return cache.clearAll();
})

function script(){
    gulp.src([ // Берем все необходимые библиотеки
        'app/libs/vendor/*.js' // Берем JS
    ])
        .pipe(concat('vendor.min.js')) // Собираем их в кучу в новом файле vendor.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
    gulp.src([ // Берем все необходимые библиотеки
        'app/libs/*.js' // Берем JS
    ])
        .pipe(concat('main.min.js')) // Собираем их в кучу в новом файле main.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
}