// make a variable to contain the number of squares
var numSquares = 6;
// make an empty array of colors
var colors = [];
// create a picked color variable
var pickedColor;
//select the squares
var squares = document.querySelectorAll(".square");
// select the colorDisplay id fro mthe html
var colorDisplay = document.getElementById("colorDisplay");
// select the messageDisplay span from the html
var messageDisplay = document.querySelector("#message")
// select the h1 from the html
var h1 = document.querySelector("h1");
// select the reset button
var resetButton = document.querySelector("#reset");
// get .mode buttons into an array
var modeButtons = document.querySelectorAll(".mode");

// run init() 
init();
// create an initialize function to run when first loaded
function init() {
  setupModeButtons();
  setupSquares();
  reset();
};

function setupModeButtons() {
  // mode button event listeners
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      // determine how many squares to show with a turnary operator
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      // // optional way to determine how many squares to show
      // if (this.textContent === "Easy") {
      //   numSquares = 3;
      // } else {
      //   numSquares = 6;
      // }
      reset();
    });
  };
}

function setupSquares() {
  //assign the coresponding color in the array with eacb div that has .square
  for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function () {
      // get color of clicked square
      var clickedColor = this.style.backgroundColor
      // compare color to pickedColor
      // if correct
      if (clickedColor === pickedColor) {
        // Set message text
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        //change color to match background
        // if incorrect
        this.style.backgroundColor = "#232323";
        // set message text
        messageDisplay.textContent = "Try Again";
      };
    });
  };
}

function reset() {
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change color display to match picked color
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.display = "block";
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  };
  // change h1 background back to black
  h1.style.backgroundColor = "steelblue";
  // change text of button back to new colors
  resetButton.textContent = "New Colors";
  // remove messagedisplay text by setting it back to nothing
  messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function () {
  reset();
});
// set the colorDisplay to the picked color
colorDisplay.textContent = pickedColor;

function changeColors(color) {
  // loop through all squares
  for (var i = 0; i < squares.length; i++) {
    // change each div to match the given color
    squares[i].style.backgroundColor = color;
  }
};

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    // get random color and push into arr
    arr.push(randomColor());
  }
  return arr;
};

function randomColor() {
  // pick a red from 0 to 255
  var r = Math.floor(Math.random() * 256);
  // pick a green from 0 to 255
  var g = Math.floor(Math.random() * 256);
  // pick a blue from 0 to 255
  var b = Math.floor(Math.random() * 256);
  // return rgb code
  return rgb = "rgb(" + r + ", " + g + ", " + b + ")";
};