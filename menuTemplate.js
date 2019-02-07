const {BrowserWindow} = require("electron");
const mainWindow = BrowserWindow.getFocusedWindow();

//メニューバーテンプレート作成
module.exports= {
  template : [
    {
      label: 'ファイル',
      submenu: [
        { 
          label: '開く'

        },
        { 
          label: '保存'

        },
        { type: 'separator' },
        { role: 'quit' }
      ]
    },
    {
      label: '編集',
      submenu: [
        { label: '元に戻す', role: 'undo' },
        { label: 'やり直し', role: 'redo' },
        { type: 'separator' },
        { label: '切り取り', role: 'cut' },
        { label: 'コピー', role: 'copy' },
        { label: '貼り付け', role: 'paste' },
        { label: '書式なし貼り付け', role: 'pasteandmatchstyle' },
        { label: '削除', role: 'delete' },
        { label: '全て選択', role: 'selectall' }
      ]
    },
    {
      label: '表示',
      submenu: [
        { label: '更新', role: 'reload' },
        { label: '開発者向けツール', role: 'toggledevtools' },
        { type: 'separator' },
        { label: 'リセット', role: 'resetzoom' },
        { label: '拡大', role: 'zoomin' },
        { label: '縮小', role: 'zoomout' },
        { type: 'separator' },
        { label: 'フルスクリーン', role: 'togglefullscreen' },
      ]
    },
    {
      label: 'ウィンドウ',
      role: 'window',
      submenu: [
        { label: '最小化', role: 'minimize' },
        { label: '閉じる', role: 'close' },
        {
          label: '背景',
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
      label: 'ヘルプ',
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click () { require('electron').shell.openExternal('https://electronjs.org') }
        }
      ]
    }
  ]
}