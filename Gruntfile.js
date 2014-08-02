module.exports = function(grunt) {

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
//
//        /**
//         * @property processhtml
//         * @type {Object}
//         */
//        processhtml: {
//            dist: {
//                files: {
//                    'public/index.html': ['public/index.html']
//                }
//            }
//        },
//
//        /**
//         * @property concat
//         * @type {Object}
//         */
//        concat: {
//            javascript: {
//                options: {
//                    sourceMap: true,
//                    sourceMapName: 'public/dist/<%= pkg.name %>.min.js.map'
//                },
//                src: getVendorFiles().concat(appFiles),
//                dest: 'public/dist/<%= pkg.name %>.min.js'
//            },
//            stylesheets: {
//                src: ['public/css/*.css', 'public/css/**/*.css'],
//                dest: 'public/dist/<%= pkg.name %>.min.css'
//            }
//        },
//
//        /**
//         * @property uglify
//         * @type {Object}
//         */
//        uglify: {
//            dist: {
//                options: {
//                    sourceMap: true,
//                    sourceMapIn: 'public/dist/<%= pkg.name %>.min.js.map'
//                },
//                files: {
//                    'public/dist/<%= pkg.name %>.min.js': 'public/dist/<%= pkg.name %>.min.js'
//                }
//            }
//        },
//
//        /**
//         * @property cssmin
//         * @type {Object}
//         */
//        cssmin: {
//            combine: {
//                files: {
//                    'public/dist/<%= pkg.name %>.min.css': ['public/dist/<%= pkg.name %>.min.css']
//                }
//            }
//        },
//        /**
//         * @property watch
//         * @type {Object}
//         */
//        watch: {
//            images: {
//                files: ['public/images/*.png'],
//                tasks: ['sprite'],
//                options: {
//                    spawn: false
//                }
//            }
//        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-processhtml');

//    grunt.registerTask('test', ['jshint', 'karma']);
    grunt.registerTask('test', ['jshint']);
//    grunt.registerTask('build', ['concat', 'uglify', 'cssmin', 'processhtml']);
    grunt.registerTask('default', ['jshint', 'karma']);

};