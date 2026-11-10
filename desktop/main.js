const {app,BrowserWindow,shell}=require('electron');
app.commandLine.appendSwitch('autoplay-policy','no-user-gesture-required');
app.commandLine.appendSwitch('enable-gpu-rasterization');
const lock=app.requestSingleInstanceLock(); if(!lock){app.quit()}
let w;
app.on('second-instance',()=>{if(w){if(w.isMinimized())w.restore();w.focus()}});
app.whenReady().then(()=>{
 w=new BrowserWindow({width:1500,height:920,minWidth:1000,minHeight:640,backgroundColor:'#0b0b0e',title:'Golden DAW 369 Omni Suite',autoHideMenuBar:true,show:false,
  webPreferences:{contextIsolation:true,backgroundThrottling:false,webSecurity:true}});
 w.once('ready-to-show',()=>{w.maximize();w.show()});
 w.webContents.setWindowOpenHandler(({url})=>{if(/^https?:/.test(url)){shell.openExternal(url);return{action:'deny'}}return{action:'allow'}});
 w.loadFile('app/index.html');
});
app.on('window-all-closed',()=>app.quit());
