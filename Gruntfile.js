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
      files: ['**/*.html', '**/*.css', '!dist/**'],
      tasks: ['clean', 'copy'],
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
        base: 'dist',
        branch: 'master',
        message: 'Auto-generated build commit'
      },
      src: ['**']
    },

    copy: {
      build: {
          expand: true,
          src: ['css/*', 'js/**', 'img/*', 'index.html', 'CNAME', 'robots.txt'],
          dest: 'dist',
      }
    },

    // wipe clean the distribution folder
    clean: {
      build: {
        src: ['dist']
      }
    },

  });

  // Default task(s)
  grunt.registerTask('publish', ['copy', 'gh-pages']);
  grunt.registerTask('dev', ['connect', 'open', 'clean', 'copy', 'watch']);
  grunt.registerTask('default', ['watch']);

};