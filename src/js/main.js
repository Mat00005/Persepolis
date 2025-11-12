// Import des librairies
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // --- PARALLAX INTRO ---
  gsap.to("#object-left-1", {
    opacity: 0,
    y: "-20%",
    scrollTrigger: {
      trigger: "#object-left-1",
      start: "top top",
      scrub: 1,
    },
  });

  gsap.to("#object-right-2", {
    opacity: 0,
    y: "-50%",
    scrollTrigger: {
      trigger: "#object-right-2",
      start: "bottom bottom",
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
        trigger: ".zoom-container",
        start: "top top",
        scrub: 2,
        pin: true,
      },
    })
    .to("#zoom-element", {
      width: 500,
      height: 500,
    });

  // --- PARALLAX SECTION "ANGRY MAN" ---
  gsap.to(".angry-man img", {
    y: "-10%", // image monte
    ease: "none",
    scrollTrigger: {
      trigger: ".white", // la section blanche
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      // markers: true, // à activer pour debug
    },
  });

  gsap.to(".angry-man p", {
    y: "10%", // texte descend
    ease: "none",
    scrollTrigger: {
      trigger: ".white",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      // markers: true,
    },
  });

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
