/**
 * 获取配置问题答案
 * Get answer with config question
 */
'use strict';
const inquirer = require('inquirer');
module.exports = function(opt){
    return new Promise(function(resolve){
        if(!opt.prompts||opt.prompts.length===0) throw new Error('无效的模板(Invalid butter template):Wrong meta prompts');
        return inquirer.prompt(opt.prompts);
    });
};