const fs=require('fs');const path=require('path');
const modules=process.env.ROTINELY_NODE_MODULES;
const {chromium}=require(modules ? path.join(modules,'playwright') : 'playwright');
(async()=>{
 const browser=await chromium.launch({headless:true});const root=path.resolve(__dirname,'..');const out=process.env.ROTINELY_QA_DIR||'/tmp/rotinely-website-qa';fs.mkdirSync(out,{recursive:true});let checks=0;
 for(const locale of ['','de/','pl/']){
  for(const pageName of ['index','privacy','terms','support','imprint',...(locale===''?['morning-routine-timer','step-by-step-routine-timer']:locale==='de/'?['morgenroutine-mit-timer','routine-schritt-fuer-schritt']:[])]){
   const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
   const response=await page.goto('http://127.0.0.1:8766/'+locale+pageName+'.html');if(response.status()!==200)throw Error('HTTP '+response.status());
   for(const width of [320,390,1440]){
    await page.setViewportSize({width,height:1000});await page.evaluate(()=>document.fonts.ready);await page.locator('img').evaluateAll(imgs=>Promise.all(imgs.map(i=>i.decode())));
    const failures=await page.evaluate(()=>{
     const result=[];if(document.documentElement.scrollWidth>innerWidth)result.push('horizontal overflow');
     if(document.querySelectorAll('h1').length!==1)result.push('h1 count');
     if(document.querySelectorAll('script,iframe,form').length)result.push('unexpected external collection surface');
     for(const i of document.images)if(!i.hasAttribute('alt')||!i.naturalWidth)result.push('image issue');
     for(const a of document.querySelectorAll('a[href]'))if(!a.textContent.trim()&&!a.querySelector('img[alt]'))result.push('unnamed link');
     return result;
    });if(failures.length)throw Error(locale+pageName+' '+width+': '+failures);
    if((pageName==='index'||pageName.includes('timer')||pageName==='routine-schritt-fuer-schritt')&&width!==320)await page.screenshot({path:path.join(out,(locale.slice(0,-1)||'en')+'-'+pageName+'-'+width+'.png'),fullPage:true});checks++;
   }
   const links=await page.locator('a[href],link[href],img[src]').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('href')||n.getAttribute('src')).filter(u=>!u.startsWith('http')&&!u.startsWith('mailto:')));
   for(const link of links){const parts=link.split('#');const local=path.resolve(root,locale,parts[0]||pageName+'.html');if(!fs.existsSync(local))throw Error('Missing local link: '+local);if(parts[1]&&local.endsWith('.html')&&!fs.readFileSync(local,'utf8').includes('id="'+parts[1]+'"'))throw Error('Missing anchor '+link);}
   const alternateLinks=await page.locator('link[rel="alternate"][hreflang]').evaluateAll(nodes=>nodes.map(n=>({url:n.href,lang:n.hreflang})));
   for(const alternate of alternateLinks){const u=new URL(alternate.url);const file=path.join(root,u.pathname.endsWith('/')?u.pathname+'index.html':u.pathname);if(!fs.existsSync(file))throw Error('Missing language alternative '+alternate.url);if(alternate.lang!=='x-default'&&!fs.readFileSync(file,'utf8').includes('<html lang="'+alternate.lang+'">'))throw Error('Wrong language alternative '+alternate.url);}
   if(pageName==='index'){const detail=page.locator('details').first();await detail.locator('summary').focus();await page.keyboard.press('Enter');if(!await detail.getAttribute('open')&&await detail.getAttribute('open')!== '')throw Error('FAQ keyboard failed');}
   if(errors.length)throw Error(errors.join('\n'));await page.close();
  }
 }
 await browser.close();console.log(`Passed ${checks} viewport/page checks, all local links/images/anchors, keyboard FAQ and no runtime errors. Previews: ${out}`);
})().catch(e=>{console.error(e);process.exit(1)});
