#!/usr/bin/env node
const sh = require('shelljs')
const path = require('path')
const build = require('./_lib/build')

let name = process.argv.slice(2).join(' ') || ''
let dir = path.join(process.cwd(), `./${name}`)
// ok, go
build(dir)
