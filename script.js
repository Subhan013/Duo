function init() {
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}

init()

var crsr = document.querySelector('.cursor')
var main = document.querySelector('.main')
var page1Vid = document.querySelector('.page1 video')

document.addEventListener('mousemove',function(dets) {
    crsr.style.left = dets.x+-10+'px'
    crsr.style.top = dets.y+-10+'px'
})


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top 30%",
        end: "top 0",
        scrub: 2
    }
})

tl.to('.page1 h1',{
    x:-100,
}, "anim")
tl.to('.page1 h2',{
    x:100,
}, "anim")
tl.to('.page1 video',{
    width: "90%",
}, "anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -115%",
        end: "top -120",
        scrub: 2
    }
})

tl2.to('.main',{
    backgroundColor: "#fff"
})

// Mousemove event for the video
page1Vid.addEventListener('mouseenter', function(dets) {
    crsr.style.width = '100px'; // Change cursor width
    crsr.style.borderRadius = '10px'; // Change cursor shape
    crsr.innerHTML = "<h2>Sound On</h2>"; // Update cursor content
});

// Mouseleave event for the video
page1Vid.addEventListener('mouseleave', function() {
    resetCursor(); // Reset cursor when leaving the video
});

// Function to reset cursor to original state
function resetCursor() {
    crsr.style.width = '20px'; // Reset to original size
    crsr.style.height = '20px'; // Reset to original size
    crsr.style.borderRadius = '50%'; // Reset to original shape
    crsr.innerHTML = ""; // Clear the inner HTML
}

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -630%",
        end: "top 670",
        scrub: 2
    }
})

tl3.to(".main",{
    backgroundColor: "#0f0d0d",
})

var boxes = document.querySelectorAll(".box")

boxes.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        var att = elem.getAttribute("data-image")
        crsr.style.width = "350px"
        crsr.style.height = "300px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave", function() {
        crsr.style.backgroundImage = `none`
        resetCursor()
    })
});

var h4 = document.querySelectorAll("nav h4")
var purple = document.querySelector(".purple")

h4.forEach(function(elem) {
    elem.addEventListener("mouseenter", function(){
        purple.style.display = "block"
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave", function(){
        purple.style.display = "none"
        purple.style.opacity = "0"
    })
})