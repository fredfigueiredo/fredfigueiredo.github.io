module.exports = function(grunt) {

  // Loads all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Wipe clean the dist folder
    clean: {
      build: {
        src: ['dist']
      }
    },

    // Sets up a local web server to view changes
    connect: {
      server: {
        options: {
          port: 9002,
          base: '.',
          // Ensures reload without he need for browser plugin or livereload.js script
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

    // Copies all assets to the dist folder
    copy: {
      build: {
          expand: true,
          src: ['css/*', 'js/**', 'img/*', 'index.html', 'CNAME', 'robots.txt'],
          dest: 'dist',
      }
    },

    // Commits the dist folder to the master branch
    'gh-pages': {
      options: {
        base: 'dist',
        branch: 'master',
        message: 'Auto-generated build commit.'
      },
      src: ['**']
    },

    // Opens the browser at the project's URL
    open: {
      all: {
        path: 'http://localhost:<%= connect.server.options.port %>'
      }
    },

    // Lookout for changes that force a reload
    watch: {
      options: {
        livereload: true
      },
      files: ['**/*.html', '**/*.css', '!**/dist/**', '!**/node_modules/**'],
      tasks: ['clean', 'copy'],
    },

  });

  // Default task(s)
  grunt.registerTask(
    'publish',
    'Publishes all the files in the dist directory to the master branch.'
    ['clean', 'copy', 'gh-pages']
  );

  grunt.registerTask(
    'dev',
    'Watches for changes in the project, builds them, runs a server, and opens the browser.',
    ['clean', 'copy', 'connect', 'open', 'watch']);

  grunt.registerTask(
    'default',
    'Watches for changes in the project',
    ['clean', 'copy', 'watch']);

};