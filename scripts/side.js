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
    })})