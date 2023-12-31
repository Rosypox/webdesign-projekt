let sum = 0;

window.onload = function () {
  var addBox = document.getElementById("add-render");
  var addAnimation = document.getElementById("add-animation");
  var addPost = document.getElementById("add-post");
  var addHardSurface = document.getElementById("add-hard-surface");
  addBox.addEventListener("click", handler);
  addAnimation.addEventListener("click", handler2);
  addPost.addEventListener("click", handler3);
  addHardSurface.addEventListener("click", handler4);
};

function handler() {
  var result = document.getElementById("price-result");
  var corrections = document.getElementById("render-corrections").value;
  if (corrections > 0) {
    sum += 300 + corrections * 100;
    result.innerHTML = sum;
  } else {
    sum += 300;
    result.innerHTML = sum;
  }
}
function handler2() {
  var result = document.getElementById("price-result");
  var corrections = document.getElementById("animation-corrections").value;
  if (corrections > 0) {
    sum += 4000 + corrections * 200;
    result.innerHTML = sum;
  } else {
    sum += 4000;
    result.innerHTML = sum;
  }
}
function handler3() {
  var result = document.getElementById("price-result");
  var corrections = document.getElementById("post-corrections").value;
  if (corrections > 0) {
    sum += 500 + corrections * 100;
    result.innerHTML = sum;
  } else {
    sum += 500;
    result.innerHTML = sum;
  }
}
function handler4() {
  var result = document.getElementById("price-result");
  var corrections = document.getElementById("hard-surface-corrections").value;
  switch (corrections) {
    case
  }
}
