'use strict';
const localConfigTest = require('./lib/local_config.test');
const buildTest = require('./lib/build/');
module.exports=function(){
    describe('butter-cli', ()=>{
        localConfigTest();
        buildTest();
    });
}