// Import des librairies
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // --- PARALLAX INTRO ---
  gsap.to("#object-1", {
    opacity: 0,
    y: "-80%",
    scrollTrigger: {
      trigger: "#object-1",
      start: "top top",
      scrub: 1,
    },
  });

  gsap.to("#object-2", {
    opacity: 0,
    y: "-80%",
    scrollTrigger: {
      trigger: "#object-2",
      start: "top 10%",
      scrub: 1,
    },
  });

  gsap.to("#object-3", {
    opacity: 0,
    y: "-80%",
    scrollTrigger: {
      trigger: "#object-3",
      start: "top top",
      scrub: 1,
    },
  });

  gsap.to("#object-4", {
    opacity: 0,
    y: "-80%",
    scrollTrigger: {
      trigger: "#object-4",
      start: "top top",
      scrub: 1,
    },
  });

  gsap.to("#object-5", {
    opacity: 0,
    y: "-80%",
    scrollTrigger: {
      trigger: "#object-5",
      start: "top top",
      scrub: 1,
    },
  });

  gsap.to("#object-6", {
    opacity: 0,
    y: "-80%",
    scrollTrigger: {
      trigger: "#object-6",
      start: "top top",
      scrub: 1,
    },
  });

  gsap.to("#object-7", {
    opacity: 0,
    y: "-80%",
    scrollTrigger: {
      trigger: "#object-7",
      start: "top top",
      scrub: 1,
    },
  });

  gsap.to("#object-8", {
    opacity: 0,
    y: "-80%",
    scrollTrigger: {
      trigger: "#object-8",
      start: "top top",
      scrub: 1,
    },
  });

  // --- SCROLL HORIZONTAL ---
  gsap.to(".slider-track", {
    scrollTrigger: {
      trigger: ".slider-mask",
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: true,
      // markers: true,
    },
    x: "-75%",
    ease: "sine.inOut",
  });

  // --- ZOOM ---
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".zoom-container-1",
        start: "top top",
        scrub: 2,
        ease: "slow(0.7,0.7,false)",
        pin: true,
      },
    })
    .to("#zoom-element-1", {
      scale: 1.2,
      ease: "none",
      opacity: 1,
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".zoom-container-2",
        start: "top top",
        scrub: 2,
        ease: "slow(0.7,0.7,false)",
        pin: true,
      },
    })
    .to("#zoom-element-2", {
      scale: 2,
      ease: "none",
      opacity: 1,
    });

  // --- PARALLAX SECTION "ANGRY MAN" ---
  gsap.to(".parallax-element-1", {
    y: "50%",
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax-container-1",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  // --- MANIFESTATION TRANSLATE  ---
  gsap.to(".translate-element-1", {
    x: "50%",
    ease: "none",
    scrollTrigger: {
      trigger: ".translate-container-1",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      opacity: 1,
    },
  });

  gsap.to(".translate-element-2", {
    x: "-50%",
    ease: "none",
    scrollTrigger: {
      trigger: ".translate-container-1",
      start: "top top",
      end: "bottom top",
      scrub: true,
      opacity: 1,
    },
  });

  // --- A PROPOS PARALLAX  ---

  // --- CURSEUR PERSONNALISÉ ---
  const cursor = document.querySelector(".cursor");
  const links = document.querySelectorAll("a");

  document.addEventListener("mousemove", (event) => {
    cursor.style.top = event.y + "px";
    cursor.style.left = event.x + "px";
  });

  links.forEach((link) => {
    link.addEventListener("mouseenter", () =>
      cursor.classList.add("link-hover")
    );
    link.addEventListener("mouseleave", () =>
      cursor.classList.remove("link-hover")
    );
  });
});
