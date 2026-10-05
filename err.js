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
