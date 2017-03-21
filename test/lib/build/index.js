'use strict';
const getMetaTest = require('./get_meta.test');
const getFilterTest = require('./get_filter.test');
const buildProjectTest = require('./build_project.test');
describe('Build template', ()=>{
    getMetaTest();
    getFilterTest();
    buildProjectTest();
});