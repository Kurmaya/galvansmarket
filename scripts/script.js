
const meat = document.querySelectorAll('.meat');

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'#meats',
        start:'top 70%',
        // markers:true
    }
});
tl.from('#meats h2',{
    x:'-100%'
})
tl.from(meat,{
    x:'-800%',
    rotationZ:150,
    stagger:.3,
},'<')
// tl.from('.cube',{
//     right:'-50%',
// },'<')

let breadTl = gsap.timeline({
    scrollTrigger:{
        trigger:'#bread',
        start:'top 70%',
        // markers:true
    }
});

breadTl.from('#bread > .headings',{
    scale:0,
    // right:'-100%'

})
breadTl.from ('#bread > .board',{
    opacity:0,

},'<')
breadTl.from('.sour',{
    left:'150%',
},'<')
breadTl.from('.sour-2',{
    left:'150%',
},'-=0.2')
breadTl.from('.sour-3',{
    left:'150%',
},'<')
const reasons = document.querySelectorAll('.reason i');
 let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'#why',
        start:'top 70%',
    //    markers:true 


    }
 });
tl2.from('#why .left',{
    rotationY:180,
})
tl2.from('#why .right',{
    x:'1000%'
})

const menu = document.querySelector('.menu');
const sour = document.querySelector('.sour-2');


function openMenu(){
    document.querySelector('.view-menu').classList.add('active');
}   
sour.addEventListener('click',openMenu);
menu.addEventListener('click',openMenu);
document.querySelector('.unview').addEventListener('click',()=>{
    document.querySelector('.view-menu').classList.remove('active');
});