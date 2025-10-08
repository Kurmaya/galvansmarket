const closeBtn = document.querySelector('.close');
const nav = document.querySelector('nav');
const navLinks = nav.querySelector('.navbar');
closeBtn.addEventListener('click',()=>{
  nav.classList.toggle('active');
  navLinks.classList.toggle('active');
  closeBtn.classList.toggle('active');
  document.querySelector('.store-details').classList.toggle('active');  
})

document.querySelector('.ear').textContent= new Date().getFullYear();