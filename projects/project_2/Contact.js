var m = 0;
var txt5 = 'Are you being hacked or blackmailed?'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
console.log(txt5.length);
$(document).ready(function typeWriter5() {
  if (m < txt5.length) {
    document.getElementById("line1").innerHTML += txt5.charAt(m);
    m++;
    setTimeout(typeWriter5, speed);
  }
});
$(".bg2").click(function(){
  document.getElementById("line1").innerHTML = 'Are you being hacked or blackmailed?';
  m = txt5.length;
});
$(".bg2").click(function(){
  document.getElementById("line2").innerHTML = 'Reach out to us!';
  n= txt6.length;
});
$(".bg2").click(function(){
  document.getElementById("line3").innerHTML = 'First Name:';
  o= txt7.length;
});
var n = 0;
var txt6 = 'Reach out to us!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
setTimeout(function () {
    $(".Contact-text2").ready(function typeWriter6() {
      if (n < txt6.length) {
        document.getElementById("line2").innerHTML += txt6.charAt(n);
        n++;
        setTimeout(typeWriter6, speed);
      }
    });
}, 2500);

var o = 0;
var txt7 = 'First Name:'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
setTimeout(function () {
    $(".Contact-text3").ready(function typeWriter7() {
      if (o < txt7.length) {
        document.getElementById("line3").innerHTML += txt7.charAt(o);
        o++;
        setTimeout(typeWriter7, speed);
      }
    });
}, 4500);
setTimeout(function () {
  $("#fname").focus();
}, 6000);

var x = 0;
var p = 0;
var txt8 = 'Last Name:'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
$(document).on('keypress',function(e) {
    if(e.which == 13 && x == 0) {
          $(".Contact-text4").ready(function typeWriter8() {
            if (p < txt8.length) {
              document.getElementById("line4").innerHTML += txt8.charAt(p);
              p++;
              setTimeout(typeWriter8, speed);
            }
            x = 1
          });
          setTimeout(function () {
            $("fname").blur();
            $("#lname").focus();
          }, 1000);
      }
});

var q = 0;
var txt9 = 'Country:'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
$(document).on('keypress',function(e) {
    if(e.which == 13 && x ==1) {
          $(".Contact-text5").ready(function typeWriter9() {
            if (q < txt9.length) {
              document.getElementById("line5").innerHTML += txt9.charAt(q);
              q++;
              setTimeout(typeWriter9, speed);
            }
            x = 2
          });
          setTimeout(function () {
            $("#lname").focusout();
            $("#cname").focus();
          }, 1000);
      }
});

var r = 0;
var txt10 = 'Email:'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
$(document).on('keypress',function(e) {
    if(e.which == 13 && x ==2) {
          $(".Contact-text6").ready(function typeWriter10() {
            if (r < txt10.length) {
              document.getElementById("line6").innerHTML += txt10.charAt(r);
              r++;
              setTimeout(typeWriter10, speed);
            }
            x = 3
          });
          setTimeout(function () {
            $("#cname").focusout();
            $("#email").focus();
          }, 1000);
      }
});

var s = 0;
var txt11 = 'Any Details?'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
$(document).on('keypress',function(e) {
    if(e.which == 13 && x ==3) {
          $(".Contact-text7").ready(function typeWriter11() {
            if (s < txt11.length) {
              document.getElementById("line7").innerHTML += txt11.charAt(s);
              s++;
              setTimeout(typeWriter11, speed);
            }
            x = 4
          });
          setTimeout(function () {
            $("#email").focusout();
            $("#describe").focus();
          }, 1000);
      }
});

var t = 0;
var txt12 = 'Our team will be in touch with you shortly.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
$(document).on('keypress',function(e) {
    if(e.which == 13 && x ==4) {
          $("#describe").focusout();
          $(".Contact-text8").ready(function typeWriter12() {
            if (t < txt12.length) {
              document.getElementById("line8").innerHTML += txt12.charAt(t);
              t++;
              setTimeout(typeWriter12, speed);
            }
            x = 5
          });
          $("#describe").blur();
          $("#lname").blur();

      }
});
