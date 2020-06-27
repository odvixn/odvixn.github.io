// https://www.w3schools.com/jquery/jquery_fade.asp
$(document).ready(function(){
  $(".bg").click(function(){
    $("#Menu").fadeIn("slow");
  });
});

$(document).ready(function(){
  $(".bg").click(function(){
    $(".Shutuptext").fadeOut("fast");
  });
});
