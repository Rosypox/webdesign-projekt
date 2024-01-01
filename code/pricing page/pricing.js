let sum = 0;
var clicks = 0;
//functions and values that get declared on page load
window.onload = function () {
  var addBox = document.getElementById("add-render");
  var addAnimation = document.getElementById("add-animation");
  var addPost = document.getElementById("add-post");
  var addHardSurface = document.getElementById("add-hard-surface");
  var reset = document.getElementById("reset");
  addBox.addEventListener("click", handler); //event listener for adding renders
  addAnimation.addEventListener("click", handler2); //event listener for adding animations
  addPost.addEventListener("click", handler3); //event listener for adding posts
  addHardSurface.addEventListener("click", handler4); //event listener for adding hard surface
  //function for reseting all values in the calculator
  reset.addEventListener("click", function () {
    sum = 0;
    clicks = 0;
    var result = document.getElementById("price-result");
    var ammount = document.getElementById("ammount");
    var ammountAnimations = document.getElementById("ammount-animations");
    var ammountPosts = document.getElementById("ammount-posts");
    var ammountHard = document.getElementById("ammount-hard-surface");
    result.innerHTML = "final price...";
    ammount.innerHTML = "render";
    ammountAnimations.innerHTML = "animation";
    ammountPosts.innerHTML = "post";
    ammountHard.innerHTML = "hard-surface";
  });
};
//function for adding renders
function handler() {
  var result = document.getElementById("price-result");
  var ammount = document.getElementById("ammount");
  var corrections = document.getElementById("render-corrections").value;
  //if statement for checking if any bonus corrections were added
  if (corrections > 0) {
    sum += 300 + corrections * 100;
    result.innerHTML = sum;
    ammount.innerHTML = `${clicks} x renders`;
  } else {
    sum += 300;
    result.innerHTML = sum;
    ammount.innerHTML = `${clicks} x renders`;
  }
  if (clicks % 8 == 0) {
    sum -= 1200;
    result.innerHTML = sum;
  }
}
//function for adding animations
function handler2() {
  var result = document.getElementById("price-result");
  var ammountAnimations = document.getElementById("ammount-animations");
  var corrections = document.getElementById("animation-corrections").value;
  //if statement for checking if any bonus corrections were added
  if (corrections > 0) {
    sum += 4000 + corrections * 200;
    result.innerHTML = sum;
    ammountAnimations.innerHTML = `${clicks} x animations`;
  } else {
    sum += 4000;
    result.innerHTML = sum;
    ammountAnimations.innerHTML = `${clicks} x animations`;
  }
}
//function for adding posts
function handler3() {
  var result = document.getElementById("price-result");
  var ammountPosts = document.getElementById("ammount-posts");
  var corrections = document.getElementById("post-corrections").value;
  //if statement for checking if any bonus corrections were added
  if (corrections > 0) {
    sum += 500 + corrections * 100;
    result.innerHTML = sum;
    ammountPosts.innerHTML = `${clicks} x posts`;
  } else {
    sum += 500;
    result.innerHTML = sum;
    ammountPosts.innerHTML = `${clicks} x posts`;
  }
}
//function for adding hard-surface
function handler4() {
  var result = document.getElementById("price-result");
  var corrections = document.getElementById("hard-surface-corrections").value;
  var ammountHard = document.getElementById("ammount-hard-surface");
  var select = document.getElementById("type").value;
  //adds vehicle to sum
  switch (select) {
    case "vehicle":
      ammountHard.innerHTML = `${clicks} x hard-surface`;
      if ((select = "vehicle" && corrections > 0)) {
        sum += 1200 + corrections * 100;
        result.innerHTML = sum;
      } else if ((select = "vehicle")) {
        sum += 1200;
        result.innerHTML = sum;
      }
      break;
    //adds building to sum
    case "building":
      ammountHard.innerHTML = `${clicks} x hard-surface`;
      if ((select = "building" && corrections > 0)) {
        sum += 1100 + corrections * 100;
        result.innerHTML = sum;
      } else if ((select = "vehicle")) {
        sum += 1100;
        result.innerHTML = sum;
      }
      break;
    //adds weapon to sum
    case "weapon":
      ammountHard.innerHTML = `${clicks} x hard-surface`;
      if ((select = "vehicle" && corrections > 0)) {
        sum += 900 + corrections * 100;
        result.innerHTML = sum;
      } else if ((select = "vehicle")) {
        sum += 900;
        result.innerHTML = sum;
      }
      break;
    //adds prop to sum
    case "prop":
      ammountHard.innerHTML = `${clicks} x hard-surface`;
      if ((select = "prop" && corrections > 0)) {
        sum += 700 + corrections * 100;
        result.innerHTML = sum;
      } else if ((select = "vehicle")) {
        sum += 700;
        result.innerHTML = sum;
      }
      break;
    default:
      clicks--; //if no type is selected, the click is not counted
      alert("Please select a type");
  }
}
