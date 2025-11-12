// Les imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// cursor
const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");

document.addEventListener("mousemove", (event) => {
  cursor.style.top = event.y + "px";
  cursor.style.left = event.x + "px";
});

links.forEach((link) => {
  link.addEventListener("mouseenter", () => cursor.classList.add("link-hover"));
  link.addEventListener("mouseleave", () =>
    cursor.classList.remove("link-hover")
  );
});
