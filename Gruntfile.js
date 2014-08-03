module.exports = function(grunt) {

    /**
     * @property appFiles
     * @type {String[]}
     */
    var appFiles = ['public/js/Default.js', 'public/js/controllers/*.js', 'public/js/directives/*.js',
                    'public/js/services/*.js', 'public/js/filters/*.js'];

    /**
     * Responsible for finding the third-party modules that need to be included as part of the build.
     *
     * @method getVendorFiles
     * @return {Array}
     *
     */
    var getVendorFiles = function getVendorFiles() {

        /**
         * @property pkg
         * @type {Object}
         */
        var pkg = grunt.file.readJSON('package.json');

        // Ensure the `vendor` property exists in the configuration document.
        if (!pkg.hasOwnProperty('vendor')) {
            return [];
        }

        // List of all `vendor` documents defined in "package.json".
        return pkg.vendor.map(function map(file) {
            return 'public/js/vendor/' + file
        });

    };

    grunt.initConfig({

        /**
         * @property pkg
         * @type {Object}
         */
        pkg: grunt.file.readJSON('package.json'),

        /**
         * @property jshint
         * @type {Object}
         */
        jshint: {
            all: ['public/js/Default.js', 'js/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

//        /**
//         * @property karma
//         * @type {Object}
//         */
//        karma: {
//            unit: {
//                configFile: 'KarmaUnit.js',
//                background: false,
//                browsers: ['Firefox', 'PhantomJS']
//            }
//        },

        /**
         * @property processhtml
         * @type {Object}
         */
        processhtml: {
            dist: {
                files: {
                    'public/index.html': ['public/index.html']
                }
            }
        },

        /**
         * @property concat
         * @type {Object}
         */
        concat: {
            javascript: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'public/dist/<%= pkg.name %>.min.js.map'
                },
                src: getVendorFiles().concat(appFiles),
                dest: 'public/dist/<%= pkg.name %>.min.js'
            },
            stylesheets: {
                src: ['public/css/*.css', 'public/css/**/*.css'],
                dest: 'public/dist/<%= pkg.name %>.min.css'
            }
        },

        /**
         * @property uglify
         * @type {Object}
         */
        uglify: {
            dist: {
                options: {
                    sourceMap: true,
                    sourceMapIn: 'public/dist/<%= pkg.name %>.min.js.map'
                },
                files: {
                    'public/dist/<%= pkg.name %>.min.js': 'public/dist/<%= pkg.name %>.min.js'
                }
            }
        },

        /**
         * @property cssmin
         * @type {Object}
         */
        cssmin: {
            combine: {
                files: {
                    'public/dist/<%= pkg.name %>.min.css': ['public/dist/<%= pkg.name %>.min.css']
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-processhtml');

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('build', ['concat', 'uglify', 'cssmin', 'processhtml']);
    grunt.registerTask('default', ['jshint', 'karma']);

};