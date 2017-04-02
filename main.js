"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const notifier = require("node-notifier");
const path = require('path');
const iconPath = path.join(__dirname, 'icon.png');
let appIcon = null;
let mainWindow = null;
var createNotification = function (title, options) {
    notifier.notify({
        'title': title,
        'message': options.body
    });
};
electron_1.app.on('ready', function () {
    mainWindow = new electron_1.BrowserWindow({ show: false });
    mainWindow.loadURL('file://' + __dirname + '/window.html');
    appIcon = new electron_1.Tray(iconPath);
    var contextMenu = electron_1.Menu.buildFromTemplate([
        {
            label: 'Bilge Adam Bilgilendirme Merkezi',
            icon: iconPath
        },
        {
            label: 'Duyuru',
            click: function () {
                let options = { body: "Sistem ayarları güncellemesi başlatılacaktır!" };
                createNotification("Bilge Adam Bilgilendirme", options);
            }
        },
        {
            label: 'Aç',
            click: function () {
                mainWindow.show();
            }
        },
        {
            label: 'Kapat',
            click: function () {
                mainWindow.hide();
            }
        }
    ]);
    appIcon.setToolTip('Bilge Adam Bilgilendirme');
    appIcon.setContextMenu(contextMenu);
});
//# sourceMappingURL=main.js.map