module.exports = function (grunt) {
	var sourceDirectory = 'src/';
	var buildDirectory = 'build/';

	var npmTasks = [
		'grunt-contrib-jshint',
		'grunt-contrib-clean',
		'grunt-contrib-copy',
		'grunt-contrib-uglify'
	];
	npmTasks.forEach(function (task) {
		grunt.loadNpmTasks(task);
	});

	grunt.config.init({
		jshint: {
			default: [
				'Gruntfile.js',
				sourceDirectory + '*.js'
			]
		},
		clean: {
			default: [buildDirectory]
		},
		copy: {
			default: {
				sourceMap: true,
				files: [
					{
						expand: true,
						cwd: sourceDirectory,
						src: '*.js',
						dest: buildDirectory
					}
				]

			}
		},
		uglify: {
			default: {
				files: [
					{
						src: sourceDirectory + 'jquery.table-fixed-header.js',
						dest: buildDirectory + 'jquery.table-fixed-header.min.js'
					},
					{
						src: sourceDirectory + 'jquery.container-table-fixed-header.js',
						dest: buildDirectory + 'jquery.container-table-fixed-header.min.js'
					}
				]
			}
		}
	});

	grunt.registerTask('default', ['jshint', 'clean', 'copy', 'uglify']);

};