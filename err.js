function sh(t){
var d=document.createElement('pre');
d.style.cssText='color:red;font-size:15px;padding:8px';
d.textContent=t;
document.documentElement.appendChild(d);
}
window.onerror=function(m,s,l){sh(m+' '+l)};
window.addEventListener('unhandledrejection',
function(e){sh('P:'+e.reason)});
setTimeout(function(){
var r=document.getElementById('root');
sh('err.js OK root='+(r?r.innerHTML.length:'absent'));
},4000);
var ce=console.error;
console.error=function(){
sh('E:'+[].join.call(arguments,' ').slice(0,300));
ce.apply(console,arguments)};
var of=window.fetch;
window.fetch=function(){
var a=arguments;
return of.apply(this,a).then(function(r){
if(!r.ok)sh('F'+r.status+' '+String(a[0]).slice(-60));
return r;
},function(e){
sh('FE '+e+' '+String(a[0]).slice(-50));
throw e;
});
};
if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){
var g=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
navigator.mediaDevices.getUserMedia=function(c){
return g(c).catch(function(e){sh('MIC:'+e);throw e;});
};
}
