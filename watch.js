#!/usr/bin/env node
const build = require('./_lib/build')
const watch = require('./_lib/watch')
const server = require('./_lib/server')
const path = require('path')
const post = process.argv[2] || ''

let name = process.argv.slice(2).join(' ') || ''
let abs = path.join(process.cwd(), `./${name}`)

server(abs)

watch(abs, () => build(abs))
