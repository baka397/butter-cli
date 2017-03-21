/**
 * 构建模板
 * Build template
 */
'use strict';
const chalk = require('chalk');
const info = chalk.gray;
const tool = require('../common/tool');
const getMeta = require('./get_meta');
const getAnswer = require('./get_answer');
const getFilter = require('./get_filter');
const buildProject = require('./build_project');
module.exports = function(tmpFile,buildPath){
    return getMeta(tmpFile).then(function(opt){
        global.console.log(info('Get file filter list'));
        return Promise.all([getAnswer(opt),tool.nextPromise(null,opt)]);
    }).then(function(result){
        let answers = result[0];
        let opt = result[1];
        global.console.log(info('Get file filter list'));
        return Promise.all([getFilter(answers,opt),tool.nextPromise(null,answers)])
    }).then(function(result){
        let filters = result[0];
        let answers = result[1];
        return buildProject(tmpFile,buildPath,answers,filters);
    });
};