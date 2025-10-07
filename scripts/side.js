const sideArrow = document.querySelector('.side-area img');
const sideArea = document.querySelector('.side-area');


sideArrow.addEventListener('click',()=>{
    sideArea.classList.toggle('active');
    sideArrow.classList.toggle('active');
})

sideArea.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click',()=>{
        sideArea.classList.remove('active');
        sideArrow.classList.remove('active');
    })});

    window.addEventListener('scroll',scrollFunction);
function scrollFunction() {
    console.log(window.pageYOffset)
  if (window.pageYOffset > window.innerHeight-window.innerHeight*1 && window.pageYOffset < document.documentElement.scrollHeight-document.querySelector('footer').getBoundingClientRect().height+200) {
    console.log('scrolled')
    document.querySelector('.page').classList.add('active');
      sideArea.classList.add('active');
    } 
    else {
      document.querySelector('.side-area').classList.remove('active');
      document.querySelector('.page').classList.remove('active');
  }
}
