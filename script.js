// alert("Heloo");

const section = document.querySelectorAll(".sections");

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
