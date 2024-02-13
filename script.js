function locomotiveScroll() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  
  locomotiveScroll();
  
  // page 1
  
  gsap.to('span', {
      y: 0,
      ease: Expo.easeInOut,
      duration: 1,
      delay: .1,
      stagger: .1
  })
  
  
  
  // let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".page1",
  //       scroller: "#main",
  //     //   markers: true,
  //       start: "100% 90%",
  //       end: "bottum 10 ",
  //       scrub: 3,
  //     },
  //   });
  
  //   tl.to(
  //     ".hero-section .hero-heading h4 ",
  //     {
  //         // duration:2,
  //         // y:0,
  //     },
  //   );
  
  
  var tl = gsap.timeline({
    scrollTrigger:{
      scroller:'#main',
      trigger:".page1",
      start:'top top',
      // markers:true,
      scrub:1,
      pin:true
    }
  })
  tl 
  
  .to('.page2',{
    top:'0%'
  })