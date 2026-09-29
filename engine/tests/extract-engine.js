/* Extracts the live pricing engine out of sanctify-quote-engine.html so the
   tests always run against the REAL shipped code, never a stale copy. */
const fs = require('fs'), path = require('path');
const html = fs.readFileSync(path.join(__dirname,'..','sanctify-quote-engine.html'),'utf8');
const grab = (a,b)=>{ const i=html.indexOf(a); const j=html.indexOf(b,i); return html.slice(i,j); };
const src = grab('function inrNum(n){','/* ---------- Catalog')+'\n'
          + grab('const CATALOG = [','const BY_ID')+'\n'
          + grab('const BY_ID = {};','const PRESETS')+'\n'
          + grab('const PRESETS = {','/* ---------- THE ENGINE')+'\n'
          + grab('function computeQuote(state){','/* \u2550');
module.exports = new Function(src + ';return {inr,inrNum,CATALOG,BY_ID,PRESETS,computeQuote};')();
