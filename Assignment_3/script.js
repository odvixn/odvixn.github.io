// window.onblur = function() { document.title = ":(" };
// window.onfocus = function() { document.title = ":)" };



let a = document.getElementsByTagName("audio")[0];
a.addEventListener("timeupdate", function() { console.log(a.currentTime); }, true);
