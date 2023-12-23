//kod JavaScript
const elements = document.querySelectorAll("#logo");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};

const callbacks = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
};
let observer = new IntersectionObserver(callbacks, options);

elements.forEach((element) => {
  observer.observe(element);
});
