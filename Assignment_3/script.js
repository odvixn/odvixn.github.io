// window.onblur = function() { document.title = ":(" };
// window.onfocus = function() { document.title = ":)" };



let a = document.getElementsByTagName("audio")[0];
a.addEventListener("timeupdate", function() {
  var s= parseInt(a.currentTime%60);
  var m = parseInt((a.currentTime / 60) % 60);
  document.getElementById("progress").innerHTML = m + ':' + s ;
 }, true);



function openoption(evt, optiontype) {
  var i, x, tablinks;
  x = document.getElementsByClassName("opt");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(optiontype).style.display = "block";
  evt.currentTarget.className += " active";
}
var myAudio = document.getElementById("myAudio");
var playbtn = document.getElementById("playpausebtn");
playbtn.addEventListener("click",togglePlay,false);
function togglePlay() {
  if(myAudio.paused){
  		myAudio.play();
  		playbtn.innerHTML = "Pause";
  	} else {
  		myAudio.pause();
  		playbtn.innerHTML = "Play";
  	}
};
function restartPlay() {
  myAudio.currentTime=0;
  if(myAudio.paused){
  		myAudio.play();
  		playbtn.innerHTML = "Pause";
  	} else {
  		myAudio.pause();
  		playbtn.innerHTML = "Play";
  	}
};
var volumeslider;
volumeslider = document.getElementById("volumeslider");
volumeslider.addEventListener("change",setvolume,false);

function setvolume(){
	myAudio.volume = volumeslider.value / 100;
}
