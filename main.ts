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
  appIcon = new Tray(iconPath);
  var contextMenu = Menu.buildFromTemplate([
    {
      label: 'Bilge Adam Portal',
      icon: iconPath
    },
    {
      label: 'Duyuru',
      click: function() {
        let options: NotificationOptions = {body: "Sistem ayarları güncellemesi başlatılacaktır!"};
        createNotification("Bilge Adam Duyuru", options);
      }
    },
    { 
      label: 'Kapat'
    }
  ]);
  appIcon.setToolTip('Bilge Adam Duyuru');
  appIcon.setContextMenu(contextMenu);
});
