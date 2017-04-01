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
    appIcon = new electron_1.Tray(iconPath);
    var contextMenu = electron_1.Menu.buildFromTemplate([
        {
            label: 'Bilge Adam Portal',
            icon: iconPath
        },
        {
            label: 'Duyuru',
            click: function () {
                let options = { body: "Sistem ayarları güncellemesi başlatılacaktır!" };
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
//# sourceMappingURL=main.js.map