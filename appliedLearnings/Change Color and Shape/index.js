const changeColor = document.getElementById('change-color');
const changeShape = document.getElementById('change-shape');

const circle = document.querySelector(".circle");
const shape = document.querySelector(".shape");

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

changeColor.addEventListener("click", function () {
  var randNo = getRandom(3);
  switch (randNo) {
    case 0:
      circle.style.backgroundColor = "red";
      break;
    case 1:
      circle.style.backgroundColor = "pink";
      break;
    case 2:
      circle.style.backgroundColor = "blue";
      break;
  }
});
changeShape.addEventListener("click", function () {
  var i = getRandom(2);
  switch (i) {
    case 0:
      shape.style.borderRadius = "100%";
      break;
    case 1:
      shape.style.height = "100px";
      break;
  }
});
