var pkgjson = require('./package.json');
 
var config = {
  pkg: pkgjson,
  app: 'src',
  dist: 'dist'
}
 
module.exports = function (grunt) {
 
  // Configuration
  grunt.initConfig({
    config: config,
    pkg: config.pkg,
    bower: grunt.file.readJSON('./.bowerrc'),
/*    
    uglify: {
      options: {*/
        // banner: '/*! <%= pkg.name %> lib - v<%= pkg.version %> -' +
        //   '<%= grunt.template.today("yyyy-mm-dd") %> */'
/*      },
      dist: {
        files: {
          '<%= config.dist %>/js/lib.min.js': [
            '<%= bower.directory %>/jquery/jquery.js',
            '<%= bower.directory %>/underscore/underscore.js',
            '<%= bower.directory %>/requirejs/require.js',
          ]
        }
      }*/
    copy: {
			main: {
				files: [
					{ // angular
						expand: true, 
						src: ['src/_lib/angular/angular.min.**'], 
						dest: 'src/lib/angular', 
						flatten: true, 
						filter: 'isFile'
					},
					{ // jQuery
						expand: true, 
						src: ['src/_lib/jquery/dist/jquery.min.**'], 
						dest: 'src/lib/jquery', 
						flatten: true, 
						filter: 'isFile'
					},
					{ // foundation
						expand: true, 
						src: ['src/_lib/foundation/css/foundation.css**','src/_lib/foundation/js/foundation.min.js'], 
						dest: 'src/lib/foundation', 
						flatten: true, 
						filter: 'isFile'
					},
				],
			},
		}
  });
 
  grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
 
  grunt.registerTask('default', [
    'copy',
    // 'uglify'
  ]);
};