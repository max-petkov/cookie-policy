const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } });
const btn = document.querySelector("button");

tl.fromTo(
  ".cookie-container",
  { scale: 0 },
  {
    scale: 1,
    duration: 1.5,
    ease: "elastic.out(1, 0.4)",
  }
)
  .fromTo(
    ".cookie",
    { x: -50, rotation: -250 },
    {
      autoAlpha: 1,
      x: 0,
      rotation: 0,
    },
    "<50%"
  )
  .fromTo(
    ".text",
    { x: 30 },
    {
      x: 0,
      autoAlpha: 1,
    },
    "<"
  )
  .fromTo(
    ".cookie",
    { y: 0, rotation: 0 },
    { y: -25, rotation: -20, yoyo: true, repeat: -1 }
  )
  .fromTo(
    "#crumbs",
    { y: 0, rotation: 0 },
    {
      y: -15,
      rotation: -15,
      yoyo: true,
      repeat: -1,
      stagger: 1,
    },
    "<"
  );

// Fading Cookie
btn.addEventListener("click", function () {
  gsap.to(".cookie-container", {
    autoAlpha: 0,
    y: 100,
    ease: "power1.in",
    duration: 0.75,
  });
});
