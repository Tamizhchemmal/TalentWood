gsap.registerPlugin(ScrollTrigger);

// const firstcontent = document.getElementById("firstcontent");
// gsap.to(".text", {
//   x: 100,
//   duration: 2,
// });
// gsap.to(".section1", {
//   x: 100,
//   duration: 2,
// });

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#firstcontent",
//     start: "top center",
//     end: "bottom center",
//     scrub: true,
//     markers: true,
//   },
// });

gsap.to(".text", {
  x: 100,
  duration: 1.5,
});

gsap.to(".section1", {
  y: -20,
  duration: 1.5,
});
gsap.to(".three", {
  scrollTrigger: {
    trigger: ".three",
    toggleActions: "restart none none none",
  },
  x: 900,
  duration: 1.5,
});
gsap.to("#firstGif", {
  scrollTrigger: {
    trigger: "#firstGif",
    toggleActions: "restart none none none",
  },
  x: 850,
  duration: 1.5,
});
gsap.to("#firstRow", {
  scrollTrigger: {
    trigger: "#firstRow",
    toggleActions: "restart none none none",
  },
  x: -1000,
  duration: 1.5,
});
gsap.to("#secondRow", {
  scrollTrigger: {
    trigger: "#secondRow",
    toggleActions: "restart none none none",
  },
  x: 1000,
  duration: 1.5,
});
gsap.to("#secondGif", {
  scrollTrigger: {
    trigger: "#secondGif",
    toggleActions: "restart none none none",
  },
  x: -800,
  duration: 1.5,
});
gsap.to("#thirdGif", {
  scrollTrigger: {
    trigger: "#thirdGif",
    toggleActions: "restart none none none",
  },
  x: 850,
  duration: 1.5,
});
gsap.to("#thirdRow", {
  scrollTrigger: {
    trigger: "#thirdRow",
    toggleActions: "restart none none none",
  },
  x: -1000,
  duration: 1.5,
});

gsap.set("#mapIcon", {
  opacity: 0,
  scale: 0.5,
});

gsap.to("#mapIcon", {
  opacity: 1,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  scale: 1,
});

//Smooth Scroll

// Prizes page Animations

gsap.set(".prizeban", {
  opacity: 0,
  scale: 0,
});

gsap.to(".prizeban", {
  opacity: 1,
  duration: 1.5,

  yoyo: true,
  scale: 1,
});
