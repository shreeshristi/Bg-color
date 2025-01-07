const buttons = document.querySelectorAll(".button"); // Select all buttons
const body = document.querySelector("body"); // Select the body element

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);

    if (e.target.id === "yellow") {
      body.style.backgroundColor = "yellow";
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = "blue";
    } else if (e.target.id === "purple") {
      body.style.backgroundColor = "purple";
    } else if (e.target.id === "orange") {
      body.style.backgroundColor = "orange";
    }
  });
});