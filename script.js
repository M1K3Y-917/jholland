// alert("Heloo");

const section = document.querySelectorAll(".sections");
const abt = document.querySelector(".abt--img");
const nav = document.querySelector(".nav");

const observer = new IntersectionObserver(
  function (e) {
    const [entry] = e;

    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-200px",
  }
);
section.forEach((e) => {
  e.classList.add("section--hidden");
  observer.observe(e);
});

document.querySelector(".navi").addEventListener("click", function (e) {
  e.preventDefault();
  if (
    !(e.target.getAttribute("href") === "#") &&
    !(e.target === e.currentTarget)
  ) {
    const href = document.querySelector(e.target.getAttribute("href"));
    href.scrollIntoView({ behavior: "smooth" });
  }
});

const naav = new IntersectionObserver(
  function (e) {
    const [entry] = e;
    if (!entry.isIntersecting) {
      nav.classList.add("sticky-nav");
    } else {
      nav.classList.remove("sticky-nav");
    }
  },
  {
    root: null,
    threshold: 0,
    // rootMargin: "-90px",
  }
);

naav.observe(abt);
