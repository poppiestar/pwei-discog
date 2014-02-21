module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/styles.css': 'scss/home.scss'
        },
        options: {
          includePaths: ['bower_components/modularized-normalize-scss']
        }
      }
    },
    watch: {
      sass: {
        files: ['scss/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);
};

