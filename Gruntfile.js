module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// vars

		project: {
			css: [
				'sass/style.scss'
			],
			js: [
				'js/*.js'
			]
		},

		// banner

		// tag: {
		// 	banner: '/*!\n' +
		// 			' * <%= pkg.name %>\n' +
		// 			' * <%= pkg.title %>\n' +
		// 			' * <%= pkg.url %>\n' +
		// 			' * @author <%= pkg.author %>\n' +
		// 			' * @version <%= pkg.version %>\n' +
		// 			' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
		// 			' */\n'
		// },

		// sass
		
		sass: {
			dev: {
				options: {
					style: 'expanded',
					//banner: '<%= tag.banner %>',
					compass: false
				},
				files: {
					'style.css': '<%= project.css %>'
				}
			},
			dist: {
				options: {
					style: 'compressed',
					compass: false
				},
				files: {
					'style.css': '<%= project.css %>'
				}
			}
		},
		watch: {
			sass: {
				files: 'sass/{,*/}*.{scss,sass}',
				tasks: ['sass:dev']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['sass']);

};