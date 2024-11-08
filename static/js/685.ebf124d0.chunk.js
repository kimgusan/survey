"use strict";(self.webpackChunksurvey=self.webpackChunksurvey||[]).push([[685],{685:(e,t,s)=>{s.r(t),s.d(t,{HttpWeb:()=>l});var o=s(126);const n=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),a=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),c=()=>{const e=[],t={};if(!document.cookie)return e;const s=document.cookie.split(";")||[];for(const n of s){let[e,s]=n.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");e=a(e).trim(),s=a(s).trim(),t[e]=s}const o=Object.entries(t);for(const[n,a]of o)e.push({key:n,value:a});return e},r=()=>{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)},i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=Object.assign({method:e.method||"GET",headers:e.headers},t),o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Object.keys(e);return Object.keys(e).map((e=>e.toLocaleLowerCase())).reduce(((s,o,n)=>(s[o]=e[t[n]],s)),{})}(e.headers),n=o["content-type"]||"";if("string"===typeof e.data)s.body=e.data;else if(n.includes("application/x-www-form-urlencoded")){const t=new URLSearchParams;for(const[s,o]of Object.entries(e.data||{}))t.set(s,o);s.body=t.toString()}else if(n.includes("multipart/form-data")){const t=new FormData;if(e.data instanceof FormData)e.data.forEach(((e,s)=>{t.append(s,e)}));else for(let s of Object.keys(e.data))t.append(s,e.data[s]);s.body=t;const o=new Headers(s.headers);o.delete("content-type"),s.headers=o}else(n.includes("application/json")||"object"===typeof e.data)&&(s.body=JSON.stringify(e.data));return s},d=async e=>{const t=i(e,e.webFetchExtra),s=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e?Object.entries(e).reduce(((e,s)=>{const[o,n]=s;let a,c;return Array.isArray(n)?(c="",n.forEach((e=>{a=t?encodeURIComponent(e):e,c+=`${o}=${a}&`})),c.slice(0,-1)):(a=t?encodeURIComponent(n):n,c=`${o}=${a}`),`${e}&${c}`}),"").substr(1):null}(e.params,e.shouldEncodeUrlParams),o=s?`${e.url}?${s}`:e.url,n=await fetch(o,t),a=n.headers.get("content-type")||"";let c,{responseType:r="text"}=n.ok?e:{};switch(a.includes("application/json")&&(r="json"),r){case"arraybuffer":case"blob":const e=await n.blob();c=await(async e=>new Promise(((t,s)=>{const o=new FileReader;o.onload=()=>{const e=o.result,s=e.substr(e.indexOf(",")+1);t(s)},o.onerror=e=>s(e),o.readAsDataURL(e)})))(e);break;case"json":c=await n.json();break;default:c=await n.text()}const d={};return n.headers.forEach(((e,t)=>{d[t]=e})),{data:c,headers:d,status:n.status,url:n.url}};class l extends o.E_{constructor(){super(),this.request=async e=>d(e),this.get=async e=>(async e=>d(Object.assign(Object.assign({},e),{method:"GET"})))(e),this.post=async e=>(async e=>d(Object.assign(Object.assign({},e),{method:"POST"})))(e),this.put=async e=>(async e=>d(Object.assign(Object.assign({},e),{method:"PUT"})))(e),this.patch=async e=>(async e=>d(Object.assign(Object.assign({},e),{method:"PATCH"})))(e),this.del=async e=>(async e=>d(Object.assign(Object.assign({},e),{method:"DELETE"})))(e),this.getCookiesMap=async e=>{const t=c(),s={};for(const o of t)s[o.key]=o.value;return s},this.getCookies=async e=>{const{url:t}=e;return{cookies:c()}},this.setCookie=async e=>{const{key:t,value:s,expires:o="",path:a=""}=e;!function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=n(e),a=n(t),c=`; expires=${(s.expires||"").replace("expires=","")}`,r=(s.path||"/").replace("path=","");document.cookie=`${o}=${a||""}${c}; path=${r}`}(t,s,{expires:o,path:a})},this.getCookie=async e=>(e=>{const t=c();for(const s of t)if(s.key===e)return s;return{key:e,value:""}})(e.key),this.deleteCookie=async e=>{return t=e.key,void(document.cookie=`${t}=; Max-Age=0`);var t},this.clearCookies=async e=>r(),this.clearAllCookies=async()=>r(),this.uploadFile=async e=>{const t=new FormData;t.append(e.name,e.blob||"undefined");const s=Object.assign(Object.assign({},e),{body:t,method:"POST"});return this.post(s)},this.downloadFile=async e=>{const t=i(e,e.webFetchExtra),s=await fetch(e.url,t);let o;if(null===e||void 0===e?void 0:e.progress)if(null===s||void 0===s?void 0:s.body){const t=s.body.getReader();let n=0,a=[];const c=s.headers.get("content-type"),r=parseInt(s.headers.get("content-length")||"0",10);for(;;){const{done:s,value:o}=await t.read();if(s)break;a.push(o),n+=(null===o||void 0===o?void 0:o.length)||0;const c={type:"DOWNLOAD",url:e.url,bytes:n,contentLength:r};this.notifyListeners("progress",c)}let i=new Uint8Array(n),d=0;for(const e of a)"undefined"!==typeof e&&(i.set(e,d),d+=e.length);o=new Blob([i.buffer],{type:c||void 0})}else o=new Blob;else o=await s.blob();return{blob:o}}}}}}]);
//# sourceMappingURL=685.ebf124d0.chunk.js.map