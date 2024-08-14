const { app, BrowserWindow } = require('electron');
const path = require('path');

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 1822,
    height: 1024,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile('index.html');
}

function createCalculatorWindow() {
  const calcWindow = new BrowserWindow({
    width: 1822,
    height: 1024,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  calcWindow.loadFile('calculator.html');
}

app.whenReady().then(() => {
  createMainWindow();
  createCalculatorWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
      createCalculatorWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
