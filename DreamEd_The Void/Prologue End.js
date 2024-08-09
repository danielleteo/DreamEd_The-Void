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

function showTheVoidDoesNotForget() { 
    document.getElementById("TheVoidDoesNotForget").style.visibility = "visible"; 
}

var i = 0;
var txt = 'but The Void does not forget.';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("thevoiddoesnotforget").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  
}



//NoMemory
function showNoMemory (){
	document.getElementById("NoMemory").style.visibility = "visible";
	setTimeout("typeWriter()", 2500); 
}


//Show Next Button
function showNextButton() {
	document.getElementById("NextButton").style.visibility = "visible";
}

setTimeout("showNextButton()", 8000);


