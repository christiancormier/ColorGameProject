var numSquares = 6;

// make an array of colors
var colors = generateRandomColors(6);

//select the squares
var squares = document.querySelectorAll(".square");

// select the picked color
var pickedColor = pickColor();

// select the colorDisplay id fro mthe html
var colorDisplay = document.getElementById("colorDisplay");

// select the messageDisplay span from the html
var messageDisplay = document.querySelector("#message")

// select the h1 from the html
var h1 = document.querySelector("h1");

// select the reset button
var resetButton = document.querySelector("#reset");

// select easy and hard buttons
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");




// add event listener for easy and hard buttons
easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});


hardBtn.addEventListener("click", function () {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});


resetButton.addEventListener("click", function () {
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();

  // change color display to match picked color
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

  };
  // change h1 background back to black
  h1.style.backgroundColor = "steelblue";
  // change text of button back to new colors
  resetButton.textContent = "New Colors";


  // remove messagedisplay text by setting it back to nothing
  messageDisplay.textContent = "";

});



// set the colorDisplay to the picked color
colorDisplay.textContent = pickedColor;

//assign the coresponding color in the array with eacb div that has .square
for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function () {
    // get color of clicked square
    var clickedColor = this.style.backgroundColor

    console.log(clickedColor, pickedColor);


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
    }

  })
}

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