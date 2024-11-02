var tl=gsap.timeline()
tl.from("nav h1,nav h4,nav button",{
    y:-30,
    delay:0.5,
    duration:0.5,
    stagger:0.15,
    opacity:0
})
tl.from(".center-part1 h1",{
    x:-200,
    duration:0.5,
    opacity:0
})
tl.from(".center-part1 p",{
    x:-100,
    duration:0.4,
    opacity:0
})
tl.from(".center-part1 button",{
   
    duration:0.4,
    opacity:0
})
tl.from(".center-part2 img",{
    
    duration:0.5,
    opacity:0
},"-=0.5")
tl.from(".section1bottom img",{
    y:30,
    opacity:0,
    stagger:0.15,
    duration:0.6
})
var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
      
        start:"top 50%",
        end:"top 0",
        scrub:2

    }
})
tl2.from(".services",{
    y:30,
    opacity:0
})
tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1
},"s")
tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1
},"s")
tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:1
},"a")
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1
},"a")