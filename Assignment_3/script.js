window.onblur = function() { document.title = "Are you looking away?" };
window.onfocus = function() { document.title = "A Story of Refuge" };

// document.addEventListener("keypress",togglePlay)

let background = document.getElementsByClassName('content')[0];
let elem = document.getElementsByClassName("colorbox")[0];
let a = document.getElementsByTagName("audio")[0];
a.addEventListener("timeupdate", function() {
  var s= parseInt(a.currentTime%60);
  var m = parseInt((a.currentTime / 60) % 60);
  document.getElementById("progress").innerHTML = m + ':' + s + '/3:19';
  cameleon(a.currentTime)
 }, true);


// rgba function from https://stackoverflow.com/questions/8177964
function cameleon(ct) {
  if (0<ct&&ct<17) {colorFill(255,255,102);}  // use max color to 150
  else if (18<ct&&ct<36) {colorFill(255, 153, 51);}
  else if (36<ct&&ct<43.5) {colorFill(255, 140, 26);}
  else if (43.5<ct&&ct<57) {colorFill(204, 82, 0);}
  else if (57<ct&&ct<68) {colorFill(153, 0, 0);}
  else if (68<ct&&ct<76) {colorFill(179, 36, 0);}
  else if (76<ct&&ct<86) {colorFill(200, 00, 0);}
  else if (86<ct&&ct<98) {colorFill(77, 0, 38);}
  else if (98<ct&&ct<117) {colorFill(26, 26, 101);}
  else if (117<ct&&ct<128) {colorFill(0, 0, 102);}
  else if (128<ct&&ct<152) {colorFill(0, 0, 80);}
  else if (152<ct&&ct<153) {colorFill(50, 50, 120);}
  else if (153<ct&&ct<157) {colorFill(0, 0, 100);}
  else if (157<ct&&ct<165) {colorFill(25, 25, 102);}
  else if (165<ct&&ct<200) {colorFill(10, 10, 10);}
  


}

function colorFill(r,g,b) {
  clr = r.toString() + ',' + g.toString() + ',' + b.toString();
  background.style.backgroundColor = 'rgba('+clr+',0.3)'.replace(/[^,]+(?=\))/, '0.6');
  elem.style.backgroundColor = 'rgba('+clr+',0.3)'.replace(/[^,]+(?=\))/, '0.9');
}


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
  		myAudio.pause();
  		playbtn.innerHTML = "Play";
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
