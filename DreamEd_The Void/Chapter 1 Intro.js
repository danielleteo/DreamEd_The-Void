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

function showChapterSubtitle() { 
    document.getElementById("ChapterSubtitle").style.display = "inline"; 
}

var i = 0;
var txt = 'nameless';
var speed = 200;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("chaptersubtitle").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

setTimeout("showStartChapter()", 2000);
}



//Chapter Title
function showChapterTitle (){
	document.getElementById("ChapterTitle").style.display = "inline";
	setTimeout("typeWriter()", 2000); 
}


//Show Begin Button JS
function showStartChapter() { 
    document.getElementById("StartChapter").style.display = "inline"; 

}


//Show Next Button
function showNextButton() {
	document.getElementById("NextButton").style.display = "inline";
}

setTimeout("showNextButton()", 5000);