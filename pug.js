#!/usr/bin/env node
const sh = require('shelljs')
const path = require('path')
const build = require('./_lib/build')
const watch = require('./_lib/watch')
const server = require('./_lib/server')
let name = process.argv.slice(2).join(' ') || '/*.pug'

const doPug = function () {
  let from = path.join(process.cwd(), `./${name}`)
  let to = path.join(process.cwd(), `./${name}/build/`)
  console.log('compiling', from)
  sh.exec(`pug ${from} -o ${to}`)
}

let dir = process.argv.slice(2).join(' ') || ''
let abs = path.join(process.cwd(), `./${dir}`)

server(abs)

watch(abs, () => {
  doPug()
  build(abs)
})
