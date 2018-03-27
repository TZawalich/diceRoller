var d4 = document.getElementById("d4");
var d6 = document.getElementById("d6");
var d8 = document.getElementById("d8");
var d10 = document.getElementById("d10");
var d12 = document.getElementById("d12");
var d20 = document.getElementById("d20");
var d100 = document.getElementById("d100");
var d100all = document.getElementById("d100all");
var popup = document.getElementById("popup");
var numberText = document.getElementById("numberText");
var clickedDie = document.getElementById("clickedDie");

function diceRoll(die, self){
	var theRoll = "";
	var theID = "";
	numberText.style.opacity = 0;
	setTimeout(function(){numberText.style.opacity = "1";}, 200 );
	if(self.id === "d100"){
		theRoll = (Math.floor(Math.random() * 10) + 1) * 10;
		theID = "d10";
	}
	else{
		theRoll = Math.floor(Math.random() * die) + 1;
		theID = self.id;
	}
	popup.style.display = "block";
	numberText.innerHTML = theRoll;
	if(theID === "d100all"){
		clickedDie.src = "images/d10.png";
	}
	else{
		clickedDie.src = "images/" + theID + ".png";
	}
}

function hidePopup(){
	popup.style.display = "none";
}

d4.addEventListener("click", function(){diceRoll(4, this);});
d6.addEventListener("click", function(){diceRoll(6, this);});
d8.addEventListener("click", function(){diceRoll(8, this);});
d10.addEventListener("click", function(){diceRoll(10, this);});
d12.addEventListener("click", function(){diceRoll(12, this);});
d20.addEventListener("click", function(){diceRoll(20, this);});
d100.addEventListener("click", function(){diceRoll(10, this);});
d100all.addEventListener("click", function(){diceRoll(100, this);});
popup.addEventListener("click", hidePopup);