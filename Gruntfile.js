module.exports = function(grunt){
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    
    express: {
      dev: {
        options: {
          port: 1337,
          script: 'server.js'
        }
      }
    },
    
    jshint: {
      all: [
        'client/**/*.js',
        'components/*',
        'Gruntfile.js', 
        'models/*.js',  
        'server.js'
      ]
    },
    
    watch: {
      css: {
        files: '**/*.less',
        tasks: ['less'],
        options: {
          livereload: true
        }
      },
      express: {
        files: [
          'client/**/*.js',
          'Gruntfile.js', 
          'models/*.js',  
          'server.js'
        ],
        tasks: ['express:dev'],
        options: {
          spawn: false
        }
      },
      js: {
        files: [
          'client/**/*.js',
          'components/*',
          'Gruntfile.js', 
          'models/*.js',  
          'server.js'
        ],
        options: {
          livereload: true
        },
        tasks: ['jshint']
      }
    }
  });
  
  grunt.registerTask('default', ['express:dev', 'watch']);
};