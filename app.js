var menubar = require('menubar')
var globalShortcut = require('global-shortcut')

var mb = menubar({dir: process.cwd()})
 
mb.on('ready', function ready () {
  console.log('app is ready')
  
  globalShortcut.register('F7', function () {
    mb.window.webContents.send('shortcut', 'prev')
  })
  
  globalShortcut.register('F8', function () {
    mb.window.webContents.send('shortcut', 'toggle')
  })
  
  globalShortcut.register('F9', function () {
    mb.window.webContents.send('shortcut', 'next')
  })
})

mb.app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})