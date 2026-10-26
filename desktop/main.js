const {app,BrowserWindow}=require('electron');
app.commandLine.appendSwitch('autoplay-policy','no-user-gesture-required');
app.whenReady().then(()=>{const w=new BrowserWindow({width:1440,height:900,backgroundColor:'#0c0905',title:'369 Gold DAW v3.5',autoHideMenuBar:true});w.loadFile('index.html')});
app.on('window-all-closed',()=>app.quit());
