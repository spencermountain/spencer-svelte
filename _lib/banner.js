const color = require('colorette')

const rando = function () {
  const emojis = {
    lemon: color.yellow('🍋'),
    flower: color.red('🌼'),
    check: color.green('✅'),
    boat: color.blue('⛵ '),
    sun: color.yellow('🌞 '),
    sprout: color.green('🌱 '),
    time: color.green('🕙 '),
    shirt: color.blue('👕 '),
    hat: color.magenta('🎩 '),
    orange: color.red('🍑 '),
    candy: color.magenta('🍬 '),
    lollypop: color.red('🍭 '),
    dress: color.red('👗 '),
    happy: color.green('😊 '),
    trumpet: color.yellow('🎺 '),
  }
  const keys = Object.keys(emojis)
  const r = parseInt(Math.random() * keys.length - 1, 10)
  return emojis[keys[r]]
}

//print a nice emoji
const banner = function () {
  let str = '\n             ' + rando()
  return str + '\n'
}
module.exports = banner
