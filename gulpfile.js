"use strict";

const path = require('path'),
    gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    webpack = require('webpack-stream'),
    clean = require('gulp-clean'),
    cache = require('gulp-cache');
const sass = require('gulp-sass')(require('sass'));

const babel = require("gulp-babel");

const isDev = process.env.NODE_ENV == 'development';

gulp.task('move-index-html', function (done) {
    return gulp.src([
        './src/index.html',
    ])
        .pipe(gulp.dest('./dist'));
})

gulp.task('move-assets', function (done) {
    return gulp.src([
        './src/assets/**',
    ])
        .pipe(gulp.dest('./dist/assets'));
})

gulp.task('move-images', function (done) {
    return gulp.src([
        './src/img/**',
    ])
        .pipe(gulp.dest('./dist/img'));
})

gulp.task('move-files-to-js', function (done) {
    return gulp.src([
        './node_modules/jquery/dist/cdn/jquery-1.11.1.min.js',
    ])
        .pipe(gulp.dest('./dist/js'));
})

gulp.task('sass', function () {
    return gulp.src([
        './src/scss/style.scss',
    ])
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});


// Настройка Webpack
const webpackConfig = {
    mode: isDev ? 'development' : 'production',
    entry: {
        sitestories: './src/sitestories.js',
    },
    output: {
        filename: '[name].js',
    },
    optimization: {
        // We no not want to minimize our code.
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //   presets: [['@babel/preset-env', {
                    //     corejs: 3,
                    //     useBuiltIns: 'usage'
                    //   }]]
                    // }
                }
            }

        ]
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
};

// Webpack - сборщик js модулей
gulp.task('webpack', function () {
    return gulp.src([
        './src/sitestories.js',
    ])
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./dist/js'));
});


gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'dist'
        },
        //browser: 'Firefox',
        notify: false
    });
});


gulp.task('clean', function () {
    return gulp.src('./dist', { read: false })
        .pipe(clean());
});

gulp.task('cache', function () {
    return cache.clearAll();
});

gulp.task('watch', function () {
    // Наблюдение
    gulp.watch('./src/scss/style.scss', gulp.parallel('sass'));
    gulp.watch('./src/use_cases/**/*.scss', gulp.parallel('sass'));
    gulp.watch('./src/core/**/*.js', gulp.parallel('webpack'));
    gulp.watch('./src/use_cases/**/*.js', gulp.parallel('webpack'));
    gulp.watch('./src/adapters/**/*.js', gulp.parallel('webpack'));
    gulp.watch('./src/sitestories.js', gulp.parallel('webpack'));
    gulp.watch('./src/index.html', gulp.parallel('move-index-html'));
    // Обновление страницы
    gulp.watch('./dist/css/style.css').on('change', browserSync.reload);
    gulp.watch('./dist/index.html').on('change', browserSync.reload);
    gulp.watch('./dist/js/sitestories.js').on('change', browserSync.reload);
});

gulp.task('create-dist', gulp.series('clean', 'move-index-html', 'move-assets', 'move-images', 'move-files-to-js', 'sass', 'webpack'));

gulp.task('default', gulp.parallel('browser-sync', 'watch'));

gulp.task('build', gulp.series('clean', 'move-index-html', 'move-assets', 'move-images', 'sass', 'webpack'));


