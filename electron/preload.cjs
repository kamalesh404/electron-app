{/* Preload Script */}

const { contextBridge, ipcRenderer } = require('electron')

// Expose protected APIs to the renderer process
contextBridge.exposeInMainWorld('electronAPI, {
  ping: () => ipcRenderer.invoke('ping'),
  send: (channel, data) => ipcRenderer.send(channel, data)
})