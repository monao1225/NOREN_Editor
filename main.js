const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu
const BrowserWindow = electron.BrowserWindow;
const fs = require("fs")

let mainWindow = null;
let bgColor = false;
exports.bgColor = bgColor;

//メニューバーテンプレート作成
const template = [
  {
    label: 'File',
    submenu: [
      { 
        label: 'Open'

      },
      { 
        label: 'Save'

      },
      { type: 'separator' },
      { role: 'quit' }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'pasteandmatchstyle' },
      { role: 'delete' },
      { role: 'selectall' }
    ]
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' },
    ]
  },
  {
    role: 'window',
    submenu: [
      { role: 'minimize' },
      { role: 'close' },
      {
        label: 'Background',
        submenu: [
          {
            label: '明るいやつ',
            type: 'radio',
            checked: true,
            click () {
              exports.bgColor = false;
              mainWindow.loadURL('file://' + __dirname + '/index.html');
            }
          },
          {
            label: '暗いやつ',
            type: 'radio',
            click () {
              exports.bgColor = true;
              mainWindow.loadURL('file://' + __dirname + '/index.html');
            }
          }
        ]
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('https://electronjs.org') }
      }
    ]
  }
]

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {

  // ブラウザ(Chromium)の起動, 初期画面のロード
  mainWindow = new BrowserWindow({
    width: 800, 
    height: 600
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});


//メニューバー生成
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);