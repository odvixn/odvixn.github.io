// https://www.w3schools.com/howto/howto_js_typewriter.asp
var i = 0;
var txt = 'Zunair Viqar, Sophomore, From Pakistan, Enjoys chicken dinners in PUBG.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
console.log(txt.length);
$(document).ready(function typeWriter1() {
  if (i < txt.length) {
    document.getElementById("image1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
});
// $(".bg2").click(function(){
//   document.getElementById("image1").innerHTML = 'Zunair Viqar, Sophomore, From Pakistan, Enjoys chicken dinners in PUBG.';
//   i = txt.length;
//   $(".bg2").click(function(){
//     if(i == txt.length){
//       $("#SecondImage").show()
//     }
//     $(".bg2").click(function(){
//       document.getElementById("image2").innerHTML = 'Tonya Zhang, Sophomore, From China, Visual Arts Major, Passionate about illustration and graphic design, Cooks omelettes.';
//       j = txt2.length;
//       $(".bg2").click(function(){
//         if(i == txt.length){
//           $("#ThirdImage").show()
//         }
//         $(".bg2").click(function(){
//           document.getElementById("image3").innerHTML = 'Yahia Beethoven, Sophomore, From Egypt, Enjoys sushi after playing squash.';
//           k = txt3.length;
//           $(".bg2").click(function(){
//             if(i == txt.length){
//               $("#FourthImage").show()
//             }
//             $(".bg2").click(function(){
//               document.getElementById("image4").innerHTML = 'Joonha Yu, Sophomore, CS Major, Sleeping at 6:30 AM to make a webpage.';
//               l = txt4.length;
//             });
//           });
//         });
//       });
//     });
//   });
// });
$(".bg2").click(function(){
  document.getElementById("image1").innerHTML = 'Zunair Viqar, Sophomore, From Pakistan, Enjoys chicken dinners in PUBG.';
  i = txt.length;
});
$(".bg2").click(function(){
  if(i == txt.length){
    $("#SecondImage").show()
  }
});

$(".bg2").click(function(){
  document.getElementById("image2").innerHTML = 'Tonya Zhang, Sophomore, From China, Visual Arts Major, Passionate about illustration and graphic design, Cooks omelettes.';
  j = txt2.length;
});
$(".bg2").click(function(){
  if(i == txt.length){
    $("#ThirdImage").show()
  }
});
$(".bg2").click(function(){
  document.getElementById("image3").innerHTML = 'Yahia Beethoven, Sophomore, From Egypt, Enjoys sushi after playing squash.';
  k = txt3.length;
});
$(".bg2").click(function(){
  if(i == txt.length){
    $("#FourthImage").show()
  }
});
$(".bg2").click(function(){
  document.getElementById("image4").innerHTML = 'Joonha Yu, Sophomore, CS Major, Sleeping at 6:30 AM to make a webpage.';
  l = txt4.length;
});
$(".bg2").click(function(){
  if(i == txt.length){
    $(".UnderlineEffect").show()
  }
});



setTimeout(function () {
    $("#SecondImage").show()
}, 4000);

var j = 0;
var txt2 = 'Tonya Zhang, Sophomore, From China, Visual Arts Major, Passionate about illustration and graphic design, Cooks omelettes.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
setTimeout(function () {
    $("#SecondImage").ready(function typeWriter2() {
      if (j < txt2.length) {
        document.getElementById("image2").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter2, speed);
      }
    });
}, 4000);
console.log(txt2.length);

setTimeout(function () {
    $("#ThirdImage").show()
}, 11000);

var k = 0;
var txt3 = 'Yahia Beethoven, Sophomore, From Egypt, Enjoys sushi after playing squash.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
setTimeout(function () {
    $("#ThirdImage").ready(function typeWriter3() {
      if (k < txt3.length) {
        document.getElementById("image3").innerHTML += txt3.charAt(k);
        k++;
        setTimeout(typeWriter3, speed);
      }
    });
}, 11000);
console.log(txt3.length);

setTimeout(function () {
    $("#FourthImage").show()
}, 15500);

var l = 0;
var txt4 = 'Joonha Yu, Sophomore, CS Major, Sleeping at 6:30 AM to make a webpage.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
setTimeout(function () {
    $("#FourthImage").ready(function typeWriter4() {
      if (l < txt4.length) {
        document.getElementById("image4").innerHTML += txt4.charAt(l);
        l++;
        setTimeout(typeWriter4, speed);
      }
    });
}, 15500);
console.log(txt4.length);


setTimeout(function () {
    $(".UnderlineEffect").show()
}, 19500);
