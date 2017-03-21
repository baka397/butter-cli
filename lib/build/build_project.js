/**
 * 创建项目
 * Build project
 */
'use strict';
const fs = require('fs');
const path = require('path');
const Metalsmith = require('metalsmith');
const Handlebars = require('Handlebars');
const match = require('minimatch');
const async = require('async');
module.exports = function(tmpFile,buildPath,data,filters){
    return new Promise(function(resolve){
        let templatePath = path.join(tmpFile, 'template');
        if(!fs.existsSync(templatePath)){
            throw new Error('无效的模板(Invalid butter template):No template file');
        }
        let metalsmith = Metalsmith(templatePath);
        metalsmith
            .use(renderTemplateFiles(filters,data))
            .clean(false)
            .source('.') //start scan in .
            .destination(buildPath)
            .build(function (err) {
                if(err) throw err;
                resolve();
            });
    });
};
function renderTemplateFiles(skipInterpolation,data){
    return function (files, metalsmith, done) {
        let keys = Object.keys(files);
        if(skipInterpolation.length>0){
            skipInterpolation.forEach(function (glob) {
                keys.every(function (file) {
                    if(match(file, glob, { dot: true })) {
                        delete files[file];
                        return false;
                    }
                    return true;
                })
            });
        }
        async.each(keys, function (file, next) {
            let str = files[file].contents.toString();
            // do not attempt to render files that do not have mustaches
            if (!/{{([^{}]+)}}/g.test(str)) {
                return next();
            }
            let template = Handlebars.compile(str);
            files[file].contents = new Buffer(template(data));
            next();
        }, done)
    };
}