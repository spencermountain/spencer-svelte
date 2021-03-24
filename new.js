#!/usr/bin/env node
const sh = require('shelljs')
const path = require('path')
let name = process.argv.slice(2).join(' ')
let d = new Date()
let date = d.toISOString().substr(0, 10)
let dir = `./${name || date}`

let dest = path.join(__dirname, './defaults/')
sh.cp('-R', dest, dir)
