const progress=document.querySelector('.progress');
const updateProgress=()=>{const h=document.documentElement;progress.style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+'%'};
window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();

const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal,.skill').forEach(x=>obs.observe(x));

document.getElementById('year').textContent=new Date().getFullYear();

// Expandable career stories — one open at a time for a clean, interactive CV.
document.querySelectorAll('.expand').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const job=btn.closest('.job');
    const wasOpen=job.classList.contains('open');
    document.querySelectorAll('.job.open').forEach(x=>x.classList.remove('open'));
    if(!wasOpen) job.classList.add('open');
  });
});

// Open a role when its card itself is clicked, except links/buttons.
document.querySelectorAll('.job-card').forEach(card=>{
  card.addEventListener('click',e=>{
    if(e.target.closest('a,button')) return;
    const job=card.closest('.job');
    const wasOpen=job.classList.contains('open');
    document.querySelectorAll('.job.open').forEach(x=>x.classList.remove('open'));
    if(!wasOpen) job.classList.add('open');
  });
});

// Subtle 3D tilt on larger screens.
if(window.matchMedia('(min-width: 900px)').matches){
  document.querySelectorAll('.feature,.panel,.stats,.hero-photo').forEach(el=>{
    el.addEventListener('mousemove',e=>{
      const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      el.style.transform=`perspective(900px) rotateX(${(-y*3).toFixed(2)}deg) rotateY(${(x*3).toFixed(2)}deg) translateY(-2px)`;
    });
    el.addEventListener('mouseleave',()=>el.style.transform='');
  });
}

const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('nav a')];
window.addEventListener('scroll',()=>{let id='home';sections.forEach(s=>{if(scrollY>=s.offsetTop-180)id=s.id});links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id))},{passive:true});
