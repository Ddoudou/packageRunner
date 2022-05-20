import Path from 'path';
import fs from 'fs'
import { app, ipcMain, dialog } from 'electron';

const setPackagePath = async () => {
    let res = await dialog.showOpenDialog({ title: '请选择package.json文件', properties: ['openFile'] })
    if (res.canceled) return;
    const path = res.filePaths[0];
    const packagePath = Path.join(path, '../package.json');
    if (fs.existsSync(packagePath)) {
        const packageJson = require(packagePath);
        return packageJson;
    }
}

const initFile = () => {
    ipcMain.handle('setPackagePath', async (event: any, data: any) => {
        return await setPackagePath()
    });
}

export default initFile
