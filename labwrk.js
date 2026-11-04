const cupholders = {
 z3:{main:'/products/assets/z3-getraenkehalter-bild-1.webp',detail:'/products/assets/z3-getraenkehalter-bild-2.webp',alt:'Getränkehalter im BMW Z3 mit braunem Leder'},
 e36:{main:'/products/assets/e36-getraenkehalter-eingebaut.webp',detail:'/products/assets/e36-getraenkehalter-draufsicht.webp',alt:'Getränkehalter für die Mittelkonsole des BMW E36'},
 e46:{main:'/products/assets/e46-getraenkehalter-eingebaut.webp',detail:'/products/assets/e46-getraenkehalter.jpg',alt:'Getränkehalter für die Mittelkonsole des BMW E46'}
};
let currentModel='z3',currentView='main';
const cupholderImage=document.getElementById('cupholder-image');
const cupholderCaption=document.getElementById('cupholder-caption');
const modelButtons=[...document.querySelectorAll('[data-cupholder]')];
const viewButtons=[...document.querySelectorAll('[data-cupholder-view]')];
function renderCupholder(){
 const model=cupholders[currentModel];cupholderImage.src=model[currentView];cupholderImage.alt=model.alt+(currentView==='main'?' · Gesamtansicht im Fahrzeug':' · Detailansicht');
 cupholderCaption.textContent=currentModel.toUpperCase()+' · '+(currentView==='main'?'Gesamtansicht im Fahrzeug':'Detailansicht');
 modelButtons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.cupholder===currentModel)));
 viewButtons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.cupholderView===currentView)));
}
modelButtons.forEach(b=>b.addEventListener('click',()=>{if(!cupholders[b.dataset.cupholder])return;currentModel=b.dataset.cupholder;currentView='main';renderCupholder();}));
viewButtons.forEach(b=>b.addEventListener('click',()=>{currentView=b.dataset.cupholderView;renderCupholder();}));
const airboxViews={main:'/assets/site/airbox-corrected-main.webp',detail:'/assets/site/airbox-corrected-detail.webp'};
const airboxButtons=[...document.querySelectorAll('[data-airbox-view]')];
airboxButtons.forEach(b=>b.addEventListener('click',()=>{const view=b.dataset.airboxView;document.getElementById('airbox-image').src=airboxViews[view];document.getElementById('airbox-image').alt=view==='main'?'Zusammengebaute dreiteilige Muschel-Airbox mit nach unten gerichtetem Einlass':'Detailansicht der Airbox mit Einlass und separaten Haltern';document.getElementById('airbox-caption').textContent='CAD-Entwurf · '+(view==='main'?'Gesamtansicht':'Detailansicht');airboxButtons.forEach(button=>button.setAttribute('aria-pressed',String(button===b)));}));
const hero=document.querySelector('.hero');const motionAllowed=matchMedia('(prefers-reduced-motion: no-preference)');const finePointer=matchMedia('(hover: hover) and (pointer: fine)');
function resetMotion(){hero.style.setProperty('--move-x','0px');hero.style.setProperty('--move-y','0px');}
hero.addEventListener('pointermove',event=>{if(!motionAllowed.matches||!finePointer.matches||event.pointerType==='touch')return;const box=hero.getBoundingClientRect();hero.style.setProperty('--move-x',((event.clientX-box.left)/box.width-.5)*-12+'px');hero.style.setProperty('--move-y',((event.clientY-box.top)/box.height-.5)*-10+'px');},{passive:true});
hero.addEventListener('pointerleave',resetMotion);motionAllowed.addEventListener('change',resetMotion);finePointer.addEventListener('change',resetMotion);

if(motionAllowed.matches && typeof IntersectionObserver!=='undefined'){
 const reveal=new IntersectionObserver(entries=>{entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  if(motionAllowed.matches){entry.target.animate([{opacity:0,transform:'translateY(14px)'},{opacity:1,transform:'translateY(0)'}],{duration:500,easing:'ease-out'});}
  reveal.unobserve(entry.target);
 });},{threshold:.08});
 document.querySelectorAll('.intro,.project').forEach(element=>reveal.observe(element));
 motionAllowed.addEventListener('change',()=>{if(!motionAllowed.matches){document.getAnimations().forEach(animation=>animation.cancel());reveal.disconnect();}});
}
