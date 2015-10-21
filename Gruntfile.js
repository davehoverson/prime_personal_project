module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'client',
                    src: '**/*.js',
                    dest: 'public/javascripts',
                    ext: '.min.js'
                }]
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular/angular-csp.css",
                    "angular-route/angular-route.min.js",
                    "bootstrap/dist/css/bootstrap.min.css",
                    "bootstrap/dist/js/bootstrap.min.js",
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map",
                    "font-awesome/css/font-awesome.min.css"
                ],
                "dest": "public/vendors/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);

};