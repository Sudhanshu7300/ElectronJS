const { app, BrowserWindow, ipcMain } = require("electron");

// setTimeout(() => {
//   console.log(app.isReady(), "after 1 second");
// }, 1000);
// Create a new window when the user clicks on a menu item
ipcMain.on("open-page", (event, page) => {
  let win = new BrowserWindow({ width: 800, height: 600 });
  win.loadFile(page);
});
function createWindow() {
  const screen = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    // alwaysOnTop: true,
    // title: "MY Testing Software",
    resizable: false, // Fix a Window Height and width
    backgroundColor: "#d4d4d4",
    webPreferences: {
      nodeIntegration: true,
    },
  });
  screen.loadFile("sidebar.html");
}

// app.whenReady().then(createWindow);

app.on("before-quit", (e) => {
  console.log("Call Before quit app");
  // e.preventDefault();
});

app.on("browser-window-focus", () => {
  console.warn("You are on app");
});
app.on("browser-window-blur", () => {
  console.log(" You are not in app");
});
app.on("ready", () => {
  createWindow();
  console.log(app.isReady());
  console.log(" electron  Software Main.js is running");
});
