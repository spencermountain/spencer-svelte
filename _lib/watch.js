const chokidar = require('chokidar')

// watch svelte files for changes
const watch = function (abs, doit) {
  const watcher = chokidar
    .watch(`${abs}/**/*.svelte`, {
      ignored: [/node_modules/, /(^|[\/\\])\../],
      persistent: true,
    })
    .on('ready', () => {
      doit()
      watcher.on('add', () => {
        doit()
      })
      watcher.on('addDir', () => {
        doit()
      })
    })
    .on('change', () => {
      doit()
    })
    .on('unlink', () => {
      doit()
    })
    .on('unlinkDir', () => {
      doit()
    })
}
module.exports = watch
