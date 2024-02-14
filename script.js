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

function navbar() {
  var main = document.querySelector("#main");
  let manu = document.querySelector(".menu");
  let btn = document.querySelector(".menu-btn");
  let page1 = document.querySelector(".page1");

  let isOpen = false;

  btn.addEventListener("click", () => {
    if (!isOpen) {
      gsap.to(manu, {
        x: 0,
        duration: 1.2,
      });
      // page1.style.opacity = 0;
      // gsap.to(page1, {
      //   opacity: 0,
      //   duration:1,
      // })
      isOpen = true;
    } else {
      gsap.to(manu, {
        x: -1000,
        duration: 1.5,
      });
      isOpen = false;
    }
  });
}

navbar();

// page 1

gsap.to("span", {
  y: 0,
  ease: Expo.easeInOut,
  duration: 1,
  delay: 0.1,
  stagger: 0.1,
});


var tl = gsap.timeline({
  scrollTrigger: {
    scroller: "#main",
    trigger: ".page1",
    start: "top top",
    // markers:true,
    scrub: 1,
    pin: true,
  },
});
tl.to(".page2", {
  top: "0%",
});
