// Automatic Slideshow - change image every 4 seconds
// Source: https://www.w3schools.com/Css/css_rwd_templates.asp
    var myIndex = 0;
    carousel();

    function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "flex";  
    setTimeout(carousel, 7000);    
    }

// Use Vimeo API to move after the film finishes
    let player = new Vimeo.Player(document.getElementsByTagName('iframe')[0])
    player.on('ended', function(){window.location.href='#about2'})