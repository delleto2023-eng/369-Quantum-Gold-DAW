const fs=require('fs'),path=require('path');const root=process.argv[2];const out=[];
const kind=f=>{const e=path.extname(f).toLowerCase();if(/\.html?$/.test(e))return'app';if(/\.(png|jpe?g|gif|webp|svg|bmp)$/.test(e))return'photo';if(/\.(mp4|webm|mov|m4v)$/.test(e))return'video';if(/\.(mp3|wav|ogg|m4a|flac|aac|opus)$/.test(e))return'audio';if(e=='.pdf')return'pdf';if(/\.(md|txt|json|js|mjs|tsx|ts|css|sh|bat|py|yml|example)$/.test(e))return'text';return'file'};
(function walk(d){for(const n of fs.readdirSync(d)){const p=path.join(d,n),s=fs.statSync(p);if(s.isDirectory())walk(p);else out.push({p:path.relative(root,p).split(path.sep).join('/'),k:kind(n),s:s.size})}})(root);
out.sort((a,b)=>a.p.localeCompare(b.p));
fs.writeFileSync(path.join(root,'manifest.js'),'window.LIB='+JSON.stringify(out)+';');console.log(out.length,'files');
