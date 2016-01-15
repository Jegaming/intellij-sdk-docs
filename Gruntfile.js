module.exports = function(grunt) {

    grunt.initConfig({
        exec: {
            build: {
                cmd: 'rake build[_config_gh-pages.yml]'
            }
        },
        buildcontrol: {
            options: {
                dir: '_site',
                commit: true,
                push: true,
                message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
            },
            pages: {
                options: {
                    remote: 'git@github.com:JetBrains/intellij-sdk-docs.git',
                    branch: 'gh-pages'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-build-control');

    grunt.registerTask('build', ['exec:build']);
    grunt.registerTask('deploy', ['build', 'buildcontrol:pages']);
    grunt.registerTask('default', ['deploy']);
};