//kod JavaScript

const elements = document.querySelectorAll(".logo_image");
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

/*
let observer = new IntersectionObserver(callbacks, options);

elements.forEach((element) => {
  observer.observe(element);
});

let logo_image = document.getElementById("logo");
window.addEventListener("scroll", function(){
  var value = window.scrollY;
  logo_image.style.top = value * 0.5 + "px";

};
*/
