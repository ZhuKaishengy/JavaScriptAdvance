module.exports = function(grunt) {

    require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        clean: ['dist'],
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/js/*.js'],
                dest: 'dist/js/app.js',
            },
        },
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            dist: {
                files: {
                    'dist/js/bundle.min.js': ['dist/js/bundle.js']
                }
            }
        },
        jshint : {
            options: {
                jshintrc : '.jshintrc' //指定配置文件
            },
            build : ['Gruntfile.js', 'dist/js/bundle.js'] //指定检查的文件
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            dist: {
                files: {
                    'dist/css/app.min.css': 'src/css/*.css'
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/js/*.js','src/css/*.css'],
                tasks: ['clean','concat:dist','babel','jshint:build','uglify:dist','cssmin:dist','imagemin:dynamic'],
                options: {
                    spawn: false,
                },
            },
        },
        imagemin: {
            static: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}]
                },
                files: {
                    'dist/image/*.png': 'src/image/*.png',
                    'dist/image/*.jpg': 'src/image/*.jpg',
                    'dist/image/*.gif': 'src/image/*.gif'
                }
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            }
        },
        babel: {
            options: {
                sourceMap: false,
            },
            dist: {
                files: {
                    'dist/js/bundle.js': 'dist/js/app.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    //注意：这个插件不支持ES6语法，会自动删除没有调用的函数
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    //grunt执行任务是同步的
    grunt.registerTask('default', ['clean','concat:dist','babel','uglify:dist','cssmin:dist','imagemin:dynamic']);
    grunt.registerTask('cloud', ['clean','concat:dist','babel','jshint:build','uglify:dist','cssmin:dist','imagemin:dynamic']);
    grunt.registerTask('dev', ['default','watch']);

}