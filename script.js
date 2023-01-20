var togglebtn =document.querySelector("#toggle-btn");
var menu = document.querySelector("#menu");

//text-animation

gsap.from(".text-inner",2,{
    opacity:0,
    delay:1,
    stagger:0.2
})

gsap.from("#toggle-btn",1,{
    x:-150,
    y:-150,
    delay:1
})

//menu animation
var tl = new TimelineMax({paused:true});
tl.to("#mnu",1.6,{
    opacity:0,
    rotation:180,
})

tl.to("toggle-btn #close",1.6,{
    scale:1,
    rotation:180,
},"-=0.9")

tl.to("#menu",1.6,{
    scale:1,
    
},"-=1")

tl.from("nav li a",1.6,{
    opacity:0,
    x:-100,
    stagger:.4
    
},"-=1")










tl.reverse();


togglebtn.onclick = function(){
    tl.reversed(!tl.reversed());
}