#!/usr/bin/env node
const sh = require('shelljs')
const path = require('path')
const server = require('./_lib/server')
const build = require('./_lib/build')
const watch = require('./_lib/watch')

let args = process.argv.slice(1)
let cmd = 'watch'
args = args.filter((a) => {
  a = a.trim()
  if (a === '-w') {
    return false
  }
  if (a === '-b') {
    cmd = 'build'
    return false
  }
  if (a === '-n') {
    cmd = 'new'
    return false
  }
  if (a === '-p') {
    cmd = 'pug'
    return false
  }
  if (a === 'npx' || a === 'node' || a === 'spencer-svelte') {
    return false
  }
  return true
})

if (cmd === 'build') {
  // build command
  let name = args.join(' ') || ''
  let dir = path.join(process.cwd(), `./${name}`)
  // ok, go
  build(dir)
} else if (cmd === 'new') {
  // new command
  let name = args.join(' ')
  let d = new Date()
  let date = d.toISOString().substr(0, 10)
  let dir = `./${name || date}`
  let dest = path.join(__dirname, './defaults/')
  sh.cp('-R', dest, dir)
} else if (cmd === 'pug') {
  // pug watch command
  let name = args.join(' ') || '/*.pug'
  let dir = args.join(' ') || ''
  let abs = path.join(process.cwd(), `./${dir}`)
  server(abs)
  watch(abs, () => {
    let from = path.join(process.cwd(), `./${name}`)
    let to = path.join(process.cwd(), `./${name}/build/`)
    console.log('compiling', from)
    sh.exec(`pug ${from} -o ${to}`)
    build(abs)
  })
} else {
  // watch command
  let name = args.join(' ') || ''
  let abs = path.join(process.cwd(), `./${name}`)
  server(abs)
  watch(abs, () => build(abs))
}
