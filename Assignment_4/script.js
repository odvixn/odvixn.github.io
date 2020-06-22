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
    setTimeout(carousel, 4000);    
    }

// Used to toggle the menu on small screens when clicking on the menu button
// Source: https://www.w3schools.com/Css/css_rwd_templates.asp
    function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
    }


// Modal Controls
    let modal;

    // Dynamically set modal
    function setmodal() {
        myModal=event.target.id + "M"
        modal = document.getElementById(myModal);
    }

    // When the user clicks the button, open
    function openmodal() {
        modal.style.display = "block";
    }

    // When the user clicks on (x), close
    function closemodal() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // When the user presses ESC, close
    document.addEventListener("keydown", function(e) {
        if(e.keyCode==27 && modal.style.display != "none"){
            closemodal();
        }
    })