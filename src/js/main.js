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
      start: "top 20%",
      scrub: 1,
    },
  });

  gsap.to("#object-4", {
    opacity: 0,
    y: "-80%",
    scrollTrigger: {
      trigger: "#object-4",
      start: "top 30%",
      scrub: 1,
    },
  });

  gsap.to("#object-5", {
    opacity: 0,
    y: "-80%",
    scrollTrigger: {
      trigger: "#object-5",
      start: "top 20%",
      scrub: 1,
    },
  });

  gsap.to("#object-6", {
    opacity: 0,
    y: "-80%",
    scrollTrigger: {
      trigger: "#object-6",
      start: "top 40%",
      scrub: 1,
    },
  });

  gsap.to("#object-7", {
    opacity: 0,
    y: "-80%",
    scrollTrigger: {
      trigger: "#object-7",
      start: "top 20%",
      scrub: 1,
    },
  });

  gsap.to("#object-8", {
    opacity: 0,
    y: "-80%",
    scrollTrigger: {
      trigger: "#object-8",
      start: "top 5%",
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
    opacity: 5,
    ease: "none",
    scrollTrigger: {
      trigger: ".translate-container-1",
      start: "top 20%",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".translate-element-2", {
    x: "-50%",
    opacity: 5,
    ease: "none",
    scrollTrigger: {
      trigger: ".translate-container-1",
      start: "top 20%",
      end: "bottom top",
      scrub: true,
    },
  });
  // --- BODY TRANSLATE  ---

  gsap.to(".main-body-right-leg", {
    y: "-50%",
    x: "-50%",
    scrollTrigger: {
      trigger: ".main-body-part",
      start: "top 5%",
      scrub: 1,
    },
  });

  gsap.to(".main-body-left-leg", {
    y: "50%",
    x: "-50%",
    scrollTrigger: {
      trigger: ".main-body-part",
      start: "top 5%",
      scrub: 1,
    },
  });
  gsap.to(".main-body-right-arm", {
    y: "-50%",

    scrollTrigger: {
      trigger: ".main-body-part",
      start: "top 5%",
      scrub: 1,
    },
  });

  gsap.to(".main-body-left-arm", {
    y: "50%",

    scrollTrigger: {
      trigger: ".main-body-part",
      start: "top 5%",
      scrub: 1,
    },
  });

  gsap.to(".main-body-down", {
    x: "-20%",

    scrollTrigger: {
      trigger: ".main-body-part",
      start: "top 5%",
      scrub: 1,
    },
  });

  gsap.to(".main-body-up", {
    x: "20%",

    scrollTrigger: {
      trigger: ".main-body-part",
      start: "top 5%",
      scrub: 1,
    },
  });

  gsap.to(".main-body-head", {
    x: "30%",

    scrollTrigger: {
      trigger: ".main-body-part",
      start: "top 5%",
      scrub: 1,
    },
  });

  const img = document.querySelector(".pulse-object img");

  document.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX / window.innerWidth - 0.5) * 15;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 15;

    img.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
  // --- MARJANE ZOOM  ---
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".zoom-container-3",
        start: "top top",
        scrub: 1,
        ease: "slow(0.7,0.7,false)",
        pin: true,
      },
    })
    .to("#zoom-element-3", {
      scale: 20,
      ease: "none",
    });
  // --- CURSEUR PERSONNALISÉ ---

  const cursor = document.querySelector(".cursor");
  const cursorText = document.getElementById("cursorText");
  const links = document.querySelectorAll("a");

  let lastMoveTime = Date.now();
  let isIdle = false;

  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";

    cursorText.style.top = y + "px";
    cursorText.style.left = x + "px";

    lastMoveTime = Date.now();

    if (isIdle) {
      cursorText.style.opacity = "0";
      cursor.style.opacity = "1";
      isIdle = false;
    }
  });

  setInterval(() => {
    if (!isIdle && Date.now() - lastMoveTime > 1000) {
      cursor.style.opacity = "0";

      cursorText.style.opacity = "1";
      cursorText.style.transform = "translate(-50%, -50%) scale(1)";

      isIdle = true;
    }
  }, 200);
  // --- BOUTTON BACK --
  const backToTopBtn = document.getElementById("back-to-top");

  backToTopBtn.addEventListener("click", () => {
    backToTopBtn.style.transform = "scale(1.2)";
    backToTopBtn.style.transition = "transform 0.2s ease";

    setTimeout(() => {
      backToTopBtn.style.transform = "scale(1)";

      window.location.href = "index.html";
    }, 200);
  });

  // --- SUIVEUR DE CURSEUR --
  links.forEach((link) => {
    link.addEventListener("mouseenter", () =>
      cursor.classList.add("link-hover")
    );
    link.addEventListener("mouseleave", () =>
      cursor.classList.remove("link-hover")
    );
  });
});

const objects = document.querySelectorAll(".object");

document.addEventListener("mousemove", (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const mouseX = e.clientX - centerX;
  const mouseY = e.clientY - centerY;

  objects.forEach((obj, index) => {
    const speed = 0.02 + index * 0.01;

    const rotateX = (mouseY * speed) / 5;
    const rotateY = -(mouseX * speed) / 5;

    const moveX = mouseX * speed;
    const moveY = mouseY * speed;

    obj.style.transform = `
      translateX(${moveX}px)
      translateY(${moveY}px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  });
});

document.addEventListener("mouseleave", () => {
  objects.forEach((obj) => {
    obj.style.transform =
      "translateX(0) translateY(0) rotateX(0deg) rotateY(0deg)";
  });
});
