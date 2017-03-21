/**
 * 获取模板meta
 * Get meta
 */
'use strict';
const fs = require('fs');
const path = require('path');
module.exports = function(tmpFile){
    return new Promise(function(resolve){
        let metaPath=path.join(tmpFile,'meta.js');
        if(!fs.existsSync(metaPath)){
            throw new Error('无效的模板(Invalid butter template):No meta');
        }
        let opt=require(metaPath);
        resolve(opt);
    });
};