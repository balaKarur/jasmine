module.exports = function(config){
    config.set({
        frameworks:['jasmine'],
        files:["./customMatcher.js","*.js","*.spec.js"],
        Plugins:["karma-jasmine","karma-chrome-launcher"],
        //karma-chrome-launcher this will start chrome browser and run the test
        //reporters:["dots"],
        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            '*.js': ['coverage']
          },
           // optionally, configure the reporter
            coverageReporter: {
                type : 'html',
                dir : 'coverage/'
            },
        colors:true,
        singleRun:true,
        //browsers:["Chrome"],
        browsers:["ChromeHeadless"]
    })
}