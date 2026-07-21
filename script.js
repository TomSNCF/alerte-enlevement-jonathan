const intro=document.getElementById('intro');
const flash=document.getElementById('flash');
const posterContainer=document.getElementById('posterContainer');
const poster=document.getElementById('poster');
const audio=document.getElementById('audio');
let started=false,wakeLock=null;

async function lockWake(){
 if('wakeLock' in navigator){
   try{wakeLock=await navigator.wakeLock.request('screen');}catch(e){}
 }
}
async function fullscreen(){
 const el=document.documentElement;
 try{
  if(el.requestFullscreen) await el.requestFullscreen();
 }catch(e){}
}
function vibrate(){
 if(navigator.vibrate) navigator.vibrate([120,80,120]);
}
async function start(){
 if(started) return;
 started=true;
 intro.style.pointerEvents='none';
 vibrate();
 await fullscreen();
 lockWake();
 flash.style.animation='flash .35s 2';
 try{
   audio.volume=1;
   await audio.play();
 }catch(e){
   console.log('Lecture audio bloquée',e);
 }
 setTimeout(()=>{
   intro.style.transition='opacity .5s';
   intro.style.opacity='0';
 },250);
 setTimeout(()=>{
   intro.style.display='none';
   posterContainer.style.transition='opacity 2s';
   posterContainer.style.opacity='1';
   poster.style.animation='zoom 40s linear forwards';
 },900);
}
document.addEventListener('click',start,{passive:true});
document.addEventListener('touchstart',start,{passive:true});

document.addEventListener("visibilitychange",()=>{
 if(!document.hidden && audio.paused && started){
   audio.play().catch(()=>{});
 }
});
