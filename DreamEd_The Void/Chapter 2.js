//Sidebar JS
function openNav() {
  document.getElementById("navsidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("navsidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


//Typewriter JS

function showPrologueTitle() { 
    document.getElementById("PrologueTitle").style.display = "inline"; 
}

var i = 0;
var txt = 'bodies heartbeats neon flashes';
var speed = 200;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("prologuetitle").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

setTimeout("showStartPrologue()", 6000);
}



//Prologue Header
function showPrologueHeader (){
	document.getElementById("PrologueHeader").style.display = "inline";
	setTimeout("typeWriter()", 2000); 
}


//Show Begin Button JS
function showStartPrologue() { 
    document.getElementById("StartPrologue").style.display = "inline"; 

}


//Show Next Button
function showNextButton() {
	document.getElementById("NextButton").style.display = "inline";
}

setTimeout("showNextButton()", 5000);


//Show but the Void does not forget
function showTheVoidDoesNotForget() {
	document.getElementById("TheVoidDoesNotForget").style.display = "inline";
}

setTimeout("showTheVoidDoesNotForget()", 5000);



//Set Voidability
//const initialVoidability = 0;

//function increaseVoidability (){
	//if currentVoidability = 0 {
	//const changeinVoidability = 2;
	//let currentVoidability = initialVoidability + changeinVoidability;
	//} else {
	//let currentVoidability = priorVoidability + changeinVoidability;
	//}
//}

//function decreaseVoidability(){
	//if currentVoidability = 0 {
	//const changeinVoidability = 0;
	//} else {
	//const changeinVoidability = -2;
	//let currentVoidability = priorVoidability + changeinVoidability;
	//}
//}
	

