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



