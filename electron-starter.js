"use strict";
const electron = require('electron');
const path = require('path');
const url = require('url');
const { app, BrowserWindow, Menu } = electron;


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let loadingWindow;

function createWindow() {
    // Create the browser window.
    loadingWindow = new BrowserWindow({
        width: 300,
        height: 300,
        frame: false,
        backgroundColor: "#222",
        resizable: false,
        movable: false,
        minimizable: false,
        maximizable: false,
        fullscreenable: false,
        alwaysOnTop: true
    });
    loadingWindow.loadURL(path.join("file://", `${__dirname}/loading.html`));
    // loadingWindow.webContents.openDevTools();
    mainWindow = new BrowserWindow({width: 800, height: 600, show: false});
    
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, "/../build/index.html"),
        protocol: "file:",
        slashes: true
    });

    // and load the index.html of the app.
    mainWindow.loadURL(startUrl);
    mainWindow.webContents.on("did-finish-load", () => {
        loadingWindow.destroy();
        loadingWindow = null;
        mainWindow.show();
    });
    // loadingWindow.on("closed", () => app.quit());

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // app.quit();
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);
Menu.setApplicationMenu(Menu.buildFromTemplate([
    {
        label: "File",
        submenu: [
            {
                role: "quit"
            }
        ]
    }
]));

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
