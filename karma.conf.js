module.exports = function(config) {
  config.set({
    basePath: 'src/',
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      { pattern: 'test/**/*.spec.ts' }
    ],
    exclude: [
      'node_modules'
    ],
    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },
    karmaTypescriptConfig: {
      tsconfig: "../tsconfig.json",
    },
    reporters: ['progress', 'karma-typescript'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity
  })
}
