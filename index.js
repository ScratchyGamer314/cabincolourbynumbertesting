const { app, BrowserWindow } = require('electron')
var path = require('path')

function createWindow () {
	// Create the browser window.
	let win = new BrowserWindow({
	width: 800,
	height: 600,
	webPreferences: {
		nodeIntegration: true
	},
		icon: path.join(__dirname, 'images/favicon.png')
	})

	// and load the index.html of the app.
	win.loadFile('index.html')
//	win.setMenuBarVisibility(false)
}

app.on('ready', createWindow)
