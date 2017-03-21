/**
 * 获取cli本地配置
 * Get cli local config
 */
'use strict';
const Configstore = require('configstore');
const pkg = require('../package.json');
const conf = new Configstore(pkg.name);

// Set default repo
if(!conf.get('repo')){
    conf.set({repo: 'baka397/butter-template-express'});
}

module.exports = conf;