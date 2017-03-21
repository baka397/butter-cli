'use strict';
const path = require('path');
const getMeta = require('../../../lib/build/get_meta');
const getFilter = require('../../../lib/build/get_filter');
const buildProject = require('../../../lib/build/build_project');
const expressTemplatePath = path.resolve('test/mock-template/express-template/');
const expressErrorTemplatePath = path.resolve('test/mock-template/express-error-template/');
const expressBuildPath = path.resolve('test/cache/');
module.exports=function(){
    describe('Build project', ()=>{
        it('Build express project', done=>{
            getMeta(expressTemplatePath).then(function(opt){
                return getFilter({
                    'redis':false,
                    'mongoose':false
                },opt);
            }).then(function(filters){
                return buildProject(expressTemplatePath,expressBuildPath,{
                    'redis':false,
                    'mongoose':false
                },filters);
            }).then(function(){
                done();
            }).catch(function(err){
                done(err);
            });
        });
        it('Build express project with wrong template', done=>{
            getMeta(expressErrorTemplatePath).then(function(opt){
                return getFilter({
                    'redis':false,
                    'mongoose':false
                },opt);
            }).then(function(filters){
                return buildProject(expressErrorTemplatePath,expressBuildPath,{
                    'redis':false,
                    'mongoose':false
                },filters);
            }).then(function(){
                done(true);
            }).catch(function(err){
                global.console.log(err);
                done();
            });
        });
    });
}