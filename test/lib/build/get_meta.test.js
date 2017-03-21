'use strict';
const getMeta = require('../../../lib/build/get_meta');
const path = require('path');
const emptyTemplatePath = path.resolve('test/mock-template/empty-template/');
const expressTemplatePath = path.resolve('test/mock-template/express-template/');
module.exports=function(){
    describe('Get template meta', ()=>{
        it('Get meta', done=>{
            getMeta(expressTemplatePath).then(function(opt){
                done(!opt.prompts&&!opt.filters);
            }).catch(function(err){
                done(err);
            });
        });
    });
    describe('Get empty meta', ()=>{
        it('Get meta', done=>{
            getMeta(emptyTemplatePath).then(function(){
                done(true);
            }).catch(function(err){
                global.console.log(err);
                done();
            });
        });
    });
}