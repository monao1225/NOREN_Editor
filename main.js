const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu;
const BrowserWindow = electron.BrowserWindow;
const fs = require("fs");

let mainWindow = null;


// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {

  // ブラウザ(Chromium)の生成
  mainWindow = new BrowserWindow({
    width: 800, 
    height: 600
  });

  const menuTemplate = require("./menuTemplate");
  
  //メニューバー生成
  const menu = Menu.buildFromTemplate(menuTemplate.template);
  Menu.setApplicationMenu(menu);

  //初期画面のロード
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});


