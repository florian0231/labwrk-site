const cupholders = {
 z3:{product:'/products/getraenkehalter-z3/',main:'/products/assets/z3-getraenkehalter-bild-1.webp',detail:'/products/assets/z3-getraenkehalter-bild-2.webp',alt:'Getränkehalter im BMW Z3 mit braunem Leder'},
 e36:{product:'/products/getraenkehalter-e36/',main:'/products/assets/e36-getraenkehalter-eingebaut.webp',detail:'/products/assets/e36-getraenkehalter-draufsicht.webp',alt:'Getränkehalter für die Mittelkonsole des BMW E36'},
 e46:{product:'/products/getraenkehalter-e46/',main:'/products/assets/e46-getraenkehalter-eingebaut.webp',detail:'/products/assets/e46-getraenkehalter.jpg',alt:'Getränkehalter für die Mittelkonsole des BMW E46'}
};
const photoCrops={
 z3:{main:{zoom:1.6,origin:'0% 56%',position:'50% 50%'},detail:{zoom:1.55,origin:'30% 85%',position:'50% 50%'}},
 e36:{main:{zoom:1.04,origin:'50% 90%',position:'50% 90%'},detail:{zoom:1.3,origin:'50% 50%',position:'50% 50%'}},
 e46:{main:{zoom:1.12,origin:'50% 70%',position:'50% 70%'},detail:{zoom:1.2,origin:'50% 50%',position:'50% 50%'}}
};
function setPhotoCrop(image,crop){
 image.style.setProperty('--crop-zoom',String(crop.zoom));
 image.style.setProperty('--crop-origin',crop.origin);
 image.style.setProperty('--crop-position',crop.position);
}
let currentModel='z3',currentView='main';
const cupholderImage=document.getElementById('cupholder-image');
const cupholderCaption=document.getElementById('cupholder-caption');
const productLink=document.getElementById('cupholder-product-link');
const modelButtons=[...document.querySelectorAll('[data-cupholder]')];
const viewButtons=[...document.querySelectorAll('[data-cupholder-view]')];
function renderCupholder(){
 const model=cupholders[currentModel];productLink.href=model.product;productLink.textContent=currentModel.toUpperCase()+' ansehen & kaufen';productLink.setAttribute('aria-label',currentModel.toUpperCase()+'-Getränkehalter ansehen und kaufen');setPhotoCrop(cupholderImage,photoCrops[currentModel][currentView]);cupholderImage.src=model[currentView];cupholderImage.alt=model.alt+(currentView==='main'?' · Gesamtansicht im Fahrzeug':' · Detailansicht');
 cupholderCaption.textContent=currentModel.toUpperCase()+' · '+(currentView==='main'?'Gesamtansicht im Fahrzeug':'Detailansicht');
 modelButtons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.cupholder===currentModel)));
 viewButtons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.cupholderView===currentView)));
}
modelButtons.forEach(b=>b.addEventListener('click',()=>{if(!cupholders[b.dataset.cupholder])return;currentModel=b.dataset.cupholder;currentView='main';renderCupholder();}));
viewButtons.forEach(b=>b.addEventListener('click',()=>{currentView=b.dataset.cupholderView;renderCupholder();}));
const airboxViews={main:'/assets/site/airbox-corrected-main.webp',detail:'/assets/site/airbox-corrected-detail.webp'};
const airboxButtons=[...document.querySelectorAll('[data-airbox-view]')];
airboxButtons.forEach(b=>b.addEventListener('click',()=>{const view=b.dataset.airboxView;setPhotoCrop(document.getElementById('airbox-image'),view==='main'?{zoom:1.14,origin:'50% 70%',position:'50% 50%'}:{zoom:1.04,origin:'58% 50%',position:'58% 50%'});document.getElementById('airbox-image').src=airboxViews[view];document.getElementById('airbox-image').alt=view==='main'?'Zusammengebaute dreiteilige Muschel-Airbox mit nach unten gerichtetem Einlass':'Detailansicht der Airbox mit Einlass und separaten Haltern';document.getElementById('airbox-caption').textContent='CAD-Entwurf · '+(view==='main'?'Gesamtansicht':'Detailansicht');airboxButtons.forEach(button=>button.setAttribute('aria-pressed',String(button===b)));}));
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
