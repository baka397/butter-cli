'use strict';
const localConfig = require('../../lib/local_config');
describe('Local config', ()=>{
    it('Init local config', done=>{
        done(localConfig.get('repo')!=='baka397/butter-template-express');
    });
    it('Set local config to empty', done=>{
        localConfig.set('repo','')
        done(localConfig.get('repo')!=='');
    });
});