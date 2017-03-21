'use strict';
const getMeta = require('../../../lib/build/get_meta');
const getFilter = require('../../../lib/build/get_filter');
const path = require('path');
const expressTemplatePath = path.resolve('test/mock-template/express-template/');
module.exports=function(){
    describe('Get filter', ()=>{
        it('Get express filter file list', done=>{
            getMeta(expressTemplatePath).then(function(opt){
                return getFilter({
                    'redis':false,
                    'mongoose':false
                },opt);
            }).then(function(filters){
                if(filters.length!==3) throw new Error('不符合预期结果');
                if(filters[0]!=='common/redis.js') throw new Error('不符合预期结果');
                if(filters[1]!=='models/**') throw new Error('不符合预期结果');
                if(filters[2]!=='proxy/**') throw new Error('不符合预期结果');
                done();
            }).catch(function(err){
                done(err);
            });
        });
    });
}