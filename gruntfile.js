/**
 * Created by chao on 2016/10/20.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            js: {
                options: {
                    appDir: './',   //项目根目录
                    dir: './dist',  //输出目录，全部文件打包后要放入的文件夹（如果没有会自动新建的）
                    baseUrl: './js',   //相对于appDir，代表要查找js文件的起始文件夹，下文所有文件路径的定义都是基于这个baseUrl的
                    modules: [					  //要优化的模块
                        {name: 'main'} 	//说白了就是各页面的入口文件，相对baseUrl的路径，也是省略后缀“.js”
                    ],
                    fileExclusionRegExp: /^\..*|r\.js|build\.js|node.*|grunt.*|package\.json$/,	//过滤，匹配到的文件将不会被输出到输出目录去
                    optimizeCss: 'standard',
                    removeCombined: true,   //如果为true，将从输出目录中删除已合并的文件
                    findNestedDependencies: true,
                    onModuleBundleComplete: function (data) {
                        var fs = require('fs'),
                            amdclean = require('amdclean'),
                            outputFile = 'dist/' + data.path;  //输出文件的路径
                        fs.writeFileSync(outputFile, amdclean.clean({
                            'filePath': outputFile
                        }));
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('build', ['requirejs:js']);
    grunt.registerTask('default', ['build']);
};