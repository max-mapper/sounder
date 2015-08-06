var ipc = require('ipc')
var createPlaylist = require('playlist')
var createPlayer = require('playlist/player')

var player = createPlayer()
player.appendTo(document.querySelector('.demo-player'))

var pl = createPlaylist(player)
pl.add('file://' + __dirname + '/808clap.mp3')
pl.add('file://' + __dirname + '/tetris.mp3')
pl.add('file://' + __dirname + '/techno.mp3')
pl.play()

window.pl = pl

var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var pause = document.querySelector('.pause')
var resume = document.querySelector('.resume')

prev.addEventListener('click', function () {
  pl.prev()
})

next.addEventListener('click', function () {
  pl.next()
})

pause.addEventListener('click', function () {
  pl.pause()
})

resume.addEventListener('click', function () {
  pl.resume()
})

ipc.on('shortcut', function (arg) {
  if (arg === 'next') return pl.next()
  if (arg === 'prev') return pl.prev()
  if (arg === 'toggle') return pl.toggle()
})
