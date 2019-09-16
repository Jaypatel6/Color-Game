var numSquare = 6;
var colors = [];
var pickedCol; //picked color

var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var reset = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
//colorDisplay.textContent = pickedCol;

init();

function init(){
	setMode();
	setSquare();
	resetD();
}

function setMode(){
		for (var i = 0; i < mode.length; i++) {
		mode[i].addEventListener("click", function(){
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquare = 3 : numSquare = 6;
			resetD();
		});
	}
}

function setSquare(){
	for (var i = 0; i < squares.length; i++) {
	//add event listeners
		squares[i].addEventListener("click", function(){
			// read color of clicked square and compare with picked color
			var clickedColor = this.style.backgroundColor;
			//correct 
			if (clickedColor === pickedCol) {
				message.textContent = "Correct!";
				reset.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}

			//wrong
			else{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
		});
	}
}

function resetD(){
	colors = generateRandomColors(numSquare);
	pickedCol = pickColor();
	colorDisplay.textContent = pickedCol;
	reset.textContent = "New Colors"
	message.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";	
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

reset.addEventListener("click", function(){
	resetD();
})

for (var i = 0; i < squares.length; i++) {
	//add event listeners
	squares[i].addEventListener("click", function(){
		// read color of clicked square and compare with picked color
		var clickedColor = this.style.backgroundColor;
		//correct 
		if (clickedColor === pickedCol) {
			message.textContent = "Correct!";
			reset.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		//wrong
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
		}
	});
}
function changeColors(color){
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//num random colors to array
	var arr = [];
	for (var i = 0; i < num; i++) {
		//get random color
		arr.push(randomColor());
	}

	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}