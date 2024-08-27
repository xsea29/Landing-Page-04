var tl = gsap.timeline({
  repeat: -1,
});

tl.to(
  ".imagecontainer",
  {
    width: "100%",
    stagger: 2,
    ease: Expo.easeInOut,
    stagger: 2,
  },
  "a"
);

tl.to(
  ".text h1",
  {
    top: 0,
    ease: Expo.easeInOut,
    stagger: 2,
  },
  "a"
);

tl.to(
  ".text h1",
  {
    top: "100px",
    ease: Expo.easeInOut,
    delay: 2,
    stagger: 2,
  },
  "a"
);
