// window.onblur = function() { document.title = ":(" };
// window.onfocus = function() { document.title = ":)" };



let a = document.getElementsByTagName("audio")[0];
a.addEventListener("timeupdate", function() { document.getElementById("progress").innerHTML = a.currentTime; }, true);



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

function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};
