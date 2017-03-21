'use strict';
const cliOption = require('./option');
const downloadRepo = require('./download_repo');
const build = require('./build/');
const chalk = require('chalk');
const error = chalk.bold.red;
const success = chalk.green;
const info = chalk.gray;

module.exports = function(buildPath){
    cliOption().then(function(option){
        return downloadRepo(option.repo);
    })
    .then(function(tmpFile){
        global.console.log(success('Download success:'+tmpFile));
        global.console.log(info('Template build start'));
        return build(tmpFile,buildPath);
    })
    .catch(function(err){
        global.console.log(error(err.message));
    });
};