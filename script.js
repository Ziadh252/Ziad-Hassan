const scrollLine=document.querySelector('.scroll-line');
const updateScroll=()=>{const d=document.documentElement;scrollLine.style.width=(scrollY/(d.scrollHeight-innerHeight)*100)+'%'};
addEventListener('scroll',updateScroll,{passive:true});updateScroll();

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.job-card').forEach(card=>{
  card.addEventListener('click',()=>{
    const job=card.closest('.job');
    const open=job.classList.contains('active');
    document.querySelectorAll('.job.active').forEach(x=>x.classList.remove('active'));
    if(!open) job.classList.add('active');
  });
});
document.querySelectorAll('.close-role').forEach(btn=>{
  btn.addEventListener('click',e=>{e.stopPropagation();btn.closest('.job').classList.remove('active')});
});

document.querySelectorAll('.topbar nav a').forEach(a=>{
  a.addEventListener('click',()=>document.querySelectorAll('.topbar nav a').forEach(x=>x.classList.remove('active')));
});
const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...document.querySelectorAll('.topbar nav a')];
const navObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));
    }
  });
},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>navObserver.observe(s));

document.getElementById('year').textContent=new Date().getFullYear();

if(matchMedia('(min-width:900px)').matches){
 document.querySelectorAll('.skill-card,.system-panel,.edu-card').forEach(card=>{
   card.addEventListener('mousemove',e=>{
     const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
     card.style.transform=`perspective(700px) rotateX(${y*-3}deg) rotateY(${x*3}deg) translateY(-4px)`;
   });
   card.addEventListener('mouseleave',()=>card.style.transform='');
 });
}
