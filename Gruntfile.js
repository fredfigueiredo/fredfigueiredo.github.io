module.exports = function(grunt) {

  // loads all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // project configuration
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
    },

    // commits defined folder to specified branch
    'gh-pages': {
      options: {
        base: 'public',
        branch: 'master',
        message: 'Auto-generated build commit'
      },
      src: ['**']
    }

  });

  // Default task(s)
  grunt.registerTask('publish', ['gh-pages']);
  grunt.registerTask('dev', ['connect', 'open', 'watch']);
  grunt.registerTask('default', ['watch']);

};