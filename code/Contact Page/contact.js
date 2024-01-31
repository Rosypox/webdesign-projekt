function unhideDiv() {
  // Get the hidden div element

  var hiddenDiv = document.getElementById("alert-message");
  var hiddenDiv2 = document.getElementById("warning-message");
  var name = document.getElementById("name").value;
  //var email = document.getElementById("email").value;
  var pattern = elem.getAttribute("pattern"); // elem is reference to input element in this case
  var message = document.getElementById("message").value;
  var box = document.getElementById("box").checked;

  if (name && pattern && message && box) {
    hiddenDiv.style.display = "block";
    hiddenDiv2.style.display = "none";
  } else {
    // Change the display property to 'block' to make it visible
    hiddenDiv2.style.display = "block";
    hiddenDiv.style.display = "none";
  }
}
