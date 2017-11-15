module.exports = function(grunt) {
    
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		watch: {
			scripts: {
				files: ["scripts/*.js"],
				tasks: ["eslint", "uglify"],
				options: {
					spawn: false,
				},
			}
		},
		eslint: {
			all: ["scripts/*.js"]
		},
		uglify: {
			options: {
				banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
			},
			build: {
				files: [{
					expand: true,
					cwd: "scripts",
					src: "*.js",
					dest: "build",
					ext: ".min.js"
				}]
			}
		},
	})
    
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks("grunt-contrib-uglify")
	grunt.loadNpmTasks("grunt-contrib-watch")
	grunt.loadNpmTasks("gruntify-eslint")
        
        
	grunt.registerTask("default", ["uglify", "eslint", "watch"])
	// Default task(s).
    
}