import { lstat } from 'fs/promises'
import { cwd } from 'process'
import { ipcRenderer } from 'electron'

// Usage of ipcRenderer.on
ipcRenderer.on('main-process-message', (_event, ...args) => {
  console.log('[Receive Main-process message]:', ...args)
})

ipcRenderer.invoke('updateConfig', {
  key: 'test',
  value: 28,
}).then((res: any) => {
  console.log('[Receive Main-process insertData]:', res)
})

ipcRenderer.invoke('findConfig', 'test').then((res: any) => {
  console.log('[Receive Main-process findData]:', res)
})


lstat(cwd()).then(stats => {
  console.log('[fs.lstat]', stats)
}).catch(err => {
  console.error(err)
})
