import Path from 'path';
import fs from 'fs'
import { app } from 'electron';
import { ipcMain } from "electron";

const configPath = Path.join(app.getPath('userData'), 'config.json');
if (!fs.existsSync(configPath)) {
    fs.writeFileSync(configPath, JSON.stringify({}));
}

const updateConfig = (data: { key: string; value: any; }) => {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    config[data.key] = data.value;
    fs.writeFileSync(configPath, JSON.stringify(config));
    return config;
};
const findConfig = (key: string) => {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    return config[key];
};



const initConfig = () => {
    ipcMain.handle('updateConfig', async (event: any, data: any) => {
        return await updateConfig(data)
    });
    ipcMain.handle('findConfig', async (event: any, data: any) => {
        return await findConfig(data)
    });
};

export default initConfig
