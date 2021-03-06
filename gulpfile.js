const
    gulp         = require('gulp')
    plumber      = require('gulp-plumber')
    pug          = require('gulp-pug')
    sass         = require('gulp-sass')
    autoprefixer = require('gulp-autoprefixer')
    uglify       = require('gulp-uglify')
    rename       = require('gulp-rename')
    webserver    = require('gulp-webserver')

gulp.task('pug', function(){
    return gulp.src('./src/views/*.pug')
        .pipe(plumber())
        .pipe(pug())
        .pipe(gulp.dest('./'))
});

gulp.task('sass', function(){
    return gulp.src('./src/sass/master.sass')
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
                browsers: [
                    "Android 2.3",
                    "Android >= 4",
                    "Chrome >= 20",
                    "Firefox >= 24",
                    "Explorer >= 7",
                    "iOS >= 6",
                    "Opera >= 12",
                    "Safari >= 6"
                ],
                cascade: false,
        }))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('js', function(){
    return gulp.src('./src/js/master.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('bootstrap', function(){
    return gulp.src('./src/bootstrap/override.scss')
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename('bootstrap.css'))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('run', function(){
    gulp.src('./')
        .pipe(webserver({
            open: true
        }))
})

gulp.task('default', ['pug', 'sass', 'js', 'bootstrap', 'run'], function(){
    console.log("If everything is ok, open: http://localhost:8000 in your browser to see the page.")
})