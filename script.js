// functions
function draw_squares(eachSide) {
  var container = document.querySelector(".container");
  //  container.innerHTML = '';//don't want any extra boxes when you call this function again

  const boxSize = define_size(eachSide);
  for (let i = 0; i < eachSide; i++) {
    for (let j = 0; j < eachSide; j++) {
      var box = document.createElement("div"); //create a div
      //box.className = 'box';//assign class
      box.classList.add("box");
      define_style(box, "#cccccc", boxSize);
      container.appendChild(box); //append
    }
    // inserts the square next line
    var newLine = document.createElement("br");
    container.appendChild(newLine);
  }
}

function define_size(eachSide) {
  let windowSize = document.documentElement.clientWidth * 0.6;
  let boxLength = windowSize / eachSide;
  return Math.floor(boxLength);
}

function define_style(box, colour, boxSize) {
  box.style.width = boxSize;
  box.style.height = boxSize;
  box.style.backgroundColor = colour;
  box.style.border = "1px solid #fff"; //border for margin but use border-box to make sure the width and height are still 50px
  box.style.display = "inline-block";
}

function hoverOver() {
  const boxes = document.querySelectorAll(".box");
  let defaultColor = "gray";

  // check if rainbow button is clicked
  let clicked = false;
  const btn = document.querySelector("#rainbow");
  btn.addEventListener("click", function () {
    clicked = true;
  });
  // customize colour
  boxes.forEach(function (box) {
    box.addEventListener("mouseenter", function () {
      console.log(`clicked ${clicked}`);
      if (clicked) {
        box.style.backgroundColor = random_rgba();
      } else box.style.backgroundColor = defaultColor;
    });
  });
}

function clear_button() {
  const btn = document.querySelector("#clear");
  btn.addEventListener("click", function () {
    let num = prompt("New grid dimension: ");
    // delete the boxes
    document.querySelectorAll("br").forEach((e) => e.parentNode.removeChild(e));
    document
      .querySelectorAll(".box")
      .forEach((e) => e.parentNode.removeChild(e));

    // draw new squares
    draw_squares(num);
    const outBoxes = document.querySelectorAll(".box");
    hoverOver(outBoxes);
  });
}

function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

function rainbow(clicked) {
  const btn = document.querySelector("#rainbow");
  btn.addEventListener("click", function () {
    clicked = true;
  });
}

// main script
let outBoxes;
const defaultSide = 5;
// loadWindow(defaultSide);
draw_squares(defaultSide);
// change colour to white when you hover over
hoverOver();
clear_button();
