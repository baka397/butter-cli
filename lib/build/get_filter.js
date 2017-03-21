/**
 * 获取文件过滤列表
 * Get file filter list
 */
'use strict';
const tool = require('../common/tool');
module.exports = function(answers,opt){
    return new Promise(function(resolve){
        let files=[];
        if(!tool.isObjEmpty(opt.filters)){
            Object.keys(answers).forEach(function(key){
                if(!answers[key]&&opt.filters[key]){
                    if(Array.isArray(opt.filters[key])) files=files.concat(opt.filters[key]);
                    else files.push(opt.filters[key]);
                }
            })
        }
        resolve(files);
    });
};