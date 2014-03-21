module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // lookout for changes that force a reload
    watch: {
      options: {
        livereload: true
      },
      files: ['**/*.html', '**/*.css']
    },

    // local web server to view changes
    connect: {
      server: {
        options: {
          port: 9002,
          base: '.',
          // ensures reload without he need for browser plugin or livereload.js script
          middleware: function (connect, options) {
            return [
              require('connect-livereload')(),
              connect.static(options.base),
              connect.directory(options.base)
            ];
          }
        }
      }
    },

    // opens the browser at the project's URL
    open: {
      all: {
        path: 'http://localhost:<%= connect.server.options.port %>'
      }
    }

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');

  // Default task(s)
  grunt.registerTask('dev', ['connect', 'open', 'watch']);
  grunt.registerTask('default', ['watch']);

};