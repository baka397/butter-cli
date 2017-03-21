/**
 * 下载repo
 * Download repo
 */
'use strict';
const download = require('download-git-repo');
const os = require('os');
const path = require('path');
const ora = require('ora');
const rm = require('rimraf').sync;
const tmpFile = path.join(os.tmpdir(),'/butter-template');

module.exports = function(repo){
    return new Promise(function(resolve,reject){
        // Add spinner
        const spinner = ora('Downloading '+repo);
        spinner.start();
        // Download repo
        download(repo,tmpFile,function(err){
            spinner.stop();
            // Remove tmp when exit
            process.on('exit', function () {
                rm(tmpFile);
            });
            if(err) reject(err);
            else resolve(tmpFile);
        });
    });
};