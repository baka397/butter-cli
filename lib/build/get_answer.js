/**
 * 获取配置问题答案
 * Get answer with config question
 */
'use strict';
const inquirer = require('inquirer');
const tool = require('../common/tool');
module.exports = function(opt){
    if(!opt.prompts||opt.prompts.length===0) return tool.nextPromise(new Error('无效的模板(Invalid butter template):Wrong meta prompts'));
    return inquirer.prompt(opt.prompts);
};