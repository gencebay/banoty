import * as electron from 'electron';

import {app, Tray, Menu, BrowserWindow} from 'electron';
import notifier = require('node-notifier')

const path = require('path');

const iconPath = path.join(__dirname, 'icon.png');
let appIcon: Electron.Tray = null;
let mainWindow:Electron.BrowserWindow = null;

var createNotification = function(title:string, options:NotificationOptions) {
  notifier.notify({
    'title': title,
    'message': options.body
  })
}

app.on('ready', function(){
  mainWindow = new BrowserWindow({show: false});
  mainWindow.loadURL('file://' + __dirname + '/window.html');
  appIcon = new Tray(iconPath);
  var contextMenu = Menu.buildFromTemplate([
    {
      label: 'Bilge Adam Bilgilendirme Merkezi',
      icon: iconPath
    },
    {
      label: 'Duyuru',
      click: function() {
        let options: NotificationOptions = {body: "Sistem ayarları güncellemesi başlatılacaktır!"};
        createNotification("Bilge Adam Bilgilendirme", options);
      }
    },
    {
      label: 'Aç',
      click: function() {
        mainWindow.show();
      }
    },
    { 
      label: 'Kapat',
      click: function() {
        mainWindow.hide();
      }
    }
  ]);
  appIcon.setToolTip('Bilge Adam Bilgilendirme');
  appIcon.setContextMenu(contextMenu);
});
