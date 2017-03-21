/**
 * 创建cli选项并存入配置
 * Create cli option & save loacl config
 */
'use strict';
const inquirer = require('inquirer');
const localConfig = require('../local_config');
const tool = require('../common/tool');

module.exports=function(){
    return inquirer.prompt([
        {
            type:'input',
            name:'repo',
            message:'github/gitlab模板仓库地址 github/gitlab template repository\n可用格式(Available format):github:owner/name,owner/name,gitlab:owner/name\n',
            default:localConfig.get('repo')
        }
    ]).then(function(option){
        let valid = /^((github|gitlab)\:|)[^\s]+\/[^\s]+$/.test(option.repo);
        if(!valid) throw new Error('错误的格式(Wrong format)');
        localConfig.set('repo',option.repo);
        return tool.nextPromise(null,option);
    });
};