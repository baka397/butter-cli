#!/usr/bin/env node
'use strict';
const program = require('commander');
const pkg = require('../package.json');
const chalk = require('chalk');
const path = require('path');
const inquirer = require('inquirer');
const init = require('../lib/index');
const fs = require('fs');

program
    .version(pkg.version)
    .usage('<project-name>');

program.on('--help', function () {
    global.console.log('  示例(Examples):');
    global.console.log();
    global.console.log(chalk.gray('    # 创建新项目(Create a new project)'));
    global.console.log('    $ butter-cli my-project');
});

/**
 * Init help
 */
function help () {
    program.parse(process.argv);
    if(program.args.length < 1) return program.help();
}
help();

/**
 * Build start
 */
const rawName = program.args[0];
if(!rawName) return;
const to = path.resolve(rawName);
if (fs.existsSync(to)) {
    inquirer.prompt([{
        type: 'confirm',
        message: '目标文件夹已存在,是否继续?\nTarget directory exists. Continue?',
        name: 'ok'
    }]).then(function(answers){
        if (answers.ok) {
            init(to);
        }
    });
}else{
    init(to);
}
