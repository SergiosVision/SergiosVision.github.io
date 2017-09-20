module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Optimize SVGs
    svgmin: {
        dist: {
            options: {
                plugins: [
                    { removeXMLProcInst: false },       // Don't remove XML declaration (needed to avoid errors creating PNG on Win 7)
                    { removeViewBox: false },           // Don't remove the viewbox attribute from the SVG
                    { removeEmptyAttrs: false }         // Don't remove Empty Attributes from the SVG
                ]
            },
            files: [{
                expand: true,
                cwd: 'icons/socialmedia/SVG_raw',
                src: ['*.svg'],
                dest: 'icons/socialmedia/SVG_optim',
            }]
        },
    },
    // Do the Grunticon thing
    grunticon: {
        myIcons: {
            files: [{
                expand: true,
                cwd: 'icons/socialmedia/SVG_optim',
                src: ['*.svg', '*.png'],
                dest: "icons/socialmedia/SVG"
            }],
            options: {
                enhanceSVG: true
            }
        }
    },
    watch: {
        svgs: {
            files: 'icons/socialmedia/SVG_raw/*.svg',
            tasks: ['svgmin', 'grunticon'],
        }
    },
});

//require('load-grunt-tasks')(grunt);
grunt.loadNpmTasks('grunt-svgmin');
grunt.loadNpmTasks('grunt-grunticon');
grunt.loadNpmTasks('grunt-contrib-watch');

// Default task(s).
grunt.registerTask('default', 'watch');

};
