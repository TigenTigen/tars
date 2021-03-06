'use strict';

const gulp = tars.packages.gulp;
const runSequence = tars.packages.runSequence.use(gulp);

/**
 * Watcher for separate Js files files
 */
module.exports = () => {
    return tars.packages.chokidar
        .watch(`markup/${tars.config.fs.staticFolderName}/js/separate-js/**/*.js`, tars.options.watch)
        .on('all', (event, watchedPath) => {
            tars.helpers.watcherLog(event, watchedPath);
            runSequence('js:move-separate');
        });
};
