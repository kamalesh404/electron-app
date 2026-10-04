#!/usr/bin/env node
{/* Electron Main Process */}

const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

// Handle creating/removing shortcuts on Windows taskbar when un-installing
if (require('electron-squirrel-startup')) {
  app.quit()
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  })

  // and load the index.html of the app.
  if (MAIN_WINDOW_WEBPACK_ENTRY) {
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
  } else {
    mainWindow.loadFile(path.join(__dirname, '../src/index.html'))
  }

  // Open the DevTools.
  if (!IS_DEV) {
    mainWindow.webContents.openDevTools()
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Quit when all windows are closed, except on macOS where it's common to stay open until Cmd+Q
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// IPC communication
ipcMain.handle('ping', () => 'pong')