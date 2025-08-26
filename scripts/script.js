document.querySelector('.ear').textContent= new Date().getFullYear();
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
tl.from('.cube',{
    right:'-50%',
},'<')

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'#bread',
        start:'top 70%',
        // markers:true
    }
})

tl2.from('#bread > .headings',{
    scale:0,
    // right:'-100%'

})
tl2.from ('.board',{
    scale:0
})
