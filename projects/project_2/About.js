var x = 0;
var i = 0;
var txt = 'WHAT IS SHUT UP AND CLICK?'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
console.log(txt.length);
$(document).ready(function typeWriter1() {
  if (i < txt.length) {
    document.getElementById("image1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
    console.log(x);
  }
});
console.log(x);


var j = 0;
var txt2 = 'Adopted from the remarkable Episode 3 of the British series Black Mirror, titled Shut Up and Dance, our interactive comic series is very unique. Unlike many other conventional comics, our storys events change according to your own choices rather than being set for you to just read. Our main character goes through multiple possible scenarios based on the answers that you type on the keyboard. Just follow the instructions and try to make the most suitable decisions.';
var speed = 50; /* The speed/duration of the effect in milliseconds */
setTimeout(function () {
    $("body").ready(function typeWriter2() {
      if (j < txt2.length) {
        document.getElementById("image2").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter2, speed);
      }
    });
}, 1500);

$(".bg2").click(function(){
  document.getElementById("image1").innerHTML = 'WHAT IS SHUT UP AND CLICK?';
  i = txt.length;
});

  $(".bg2").click(function(){
    document.getElementById("image2").innerHTML = 'Adopted from the remarkable Episode 3 of the British series Black Mirror, titled Shut Up and Dance, our interactive comic series is very unique. Unlike many other conventional comics, our storys events change according to your own choices rather than being set for you to just read. Our main character goes through multiple possible scenarios based on the answers that you type on the keyboard. Just follow the instructions and try to make the most suitable decisions.'
    j = txt2.length;
  });
