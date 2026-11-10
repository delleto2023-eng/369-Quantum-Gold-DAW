// 369 Omni Gateway: one OpenAI-compatible endpoint + key broker for every device.
// Run on your PC: node gateway.mjs (Node 18+). Phone/laptop/DAW call http://PC-IP:3690/v1/chat/completions
import http from 'node:http'; import fs from 'node:fs';
const env=Object.fromEntries((fs.existsSync('keys/.env')?fs.readFileSync('keys/.env','utf8'):'').split('\n').map(l=>l.split('#')[0].trim()).filter(l=>l.includes('=')).map(l=>[l.slice(0,l.indexOf('=')),l.slice(l.indexOf('=')+1)]));
const M=JSON.parse(fs.readFileSync('models.json','utf8'));
const P={openai:['https://api.openai.com/v1','OPENAI_API_KEY'],xai:['https://api.x.ai/v1','XAI_API_KEY'],deepseek:['https://api.deepseek.com/v1','DEEPSEEK_API_KEY'],qwen:['https://dashscope-intl.aliyuncs.com/compatible-mode/v1','DASHSCOPE_API_KEY'],groq:['https://api.groq.com/openai/v1','GROQ_API_KEY'],moonshot:['https://api.moonshot.ai/v1','MOONSHOT_API_KEY'],google:['https://generativelanguage.googleapis.com/v1beta/openai','GEMINI_API_KEY'],anthropic:['https://api.anthropic.com/v1','ANTHROPIC_API_KEY']};
function route(id){const m=M.find(x=>x[0]===id||x[4]===id||x[1]===id);
 if(m&&env[P[m[3]][1]])return{url:P[m[3]][0],key:env[P[m[3]][1]],model:m[0]};
 if(env.OPENROUTER_API_KEY)return{url:'https://openrouter.ai/api/v1',key:env.OPENROUTER_API_KEY,model:m?m[4]:id};
 return{url:(env.OLLAMA_URL||'http://localhost:11434')+'/v1',key:'ollama',model:'qwen2.5'};}
http.createServer(async(q,r)=>{r.setHeader('Access-Control-Allow-Origin','*');r.setHeader('Access-Control-Allow-Headers','*');
 if(q.method==='OPTIONS')return r.end();
 if(env.OMNI_GATEWAY_TOKEN&&q.headers.authorization!=='Bearer '+env.OMNI_GATEWAY_TOKEN){r.statusCode=401;return r.end('bad token');}
 if(q.url==='/v1/models'){r.setHeader('content-type','application/json');return r.end(JSON.stringify({data:M.map(m=>({id:m[0],name:m[1],desc:m[2]}))}));}
 try{let b='';for await(const c of q)b+=c;const j=JSON.parse(b||'{}');const t=route(j.model);j.model=t.model;
 const h={'content-type':'application/json',authorization:'Bearer '+t.key};
 if(t.url.includes('anthropic.com')){h['x-api-key']=t.key;h['anthropic-version']='2023-06-01';}
 const u=await fetch(t.url+'/chat/completions',{method:'POST',headers:h,body:JSON.stringify(j)});
 r.statusCode=u.status;r.setHeader('content-type',u.headers.get('content-type')||'application/json');
 for await(const c of u.body)r.write(c);r.end();}catch(e){r.statusCode=500;r.end(String(e));}
}).listen(3690,()=>console.log('369 Omni Gateway on :3690 -',M.length,'models'));
