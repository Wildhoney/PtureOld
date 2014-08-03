module.exports = function(config) {

    config.set({
        basePath: '',
        frameworks: ['jasmine', 'fixture'],
        files: [
            'public/js/vendor/angular/angular.js',
            'public/js/vendor/angular-mocks/angular-mocks.js',
            'public/js/Default.js',
            'public/js/controllers/*.js',
            'public/js/directives/*.js',
            'public/js/services/*.js',
            'public/js/filters/*.js',
            'node_modules/kiwi-js/dist/kiwi.js',
            'tests/Setup.js',
            'tests/**/fixtures/*',
            'tests/**/*.Test.js'
        ],
        reporters: ['progress'],
        port: 9876,
        captureTimeout: 0,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Firefox', 'PhantomJS'],
        singleRun: true,
        preprocessors: {
            '**/*.html': ['html2js'],
            '**/*.json': ['html2js']
        }
    });

};