const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{const h=document.documentElement;progress.style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+'%'});
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(x=>obs.observe(x));
document.getElementById('year').textContent=new Date().getFullYear();
const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('.nav nav a')];
window.addEventListener('scroll',()=>{let id='home';sections.forEach(s=>{if(scrollY>=s.offsetTop-180)id=s.id});links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id))});
