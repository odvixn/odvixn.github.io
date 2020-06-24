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


    const source1 = document.getElementById("source1");
    const source2 = document.getElementById("source2");
    const source3 = document.getElementById("source3");
    const source4 = document.getElementById("source4");
    const source5 = document.getElementById("source5");
    const source6 = document.getElementById("source6");
    const source7 = document.getElementById("source7");
    const src1 = document.getElementById("src1");
    const src2 = document.getElementById("src2");
    const src3 = document.getElementById("src3");
    const src4 = document.getElementById("src4");
    const src5 = document.getElementById("src5");
    const src6 = document.getElementById("src6");
    const src7 = document.getElementById("src7");
    

    source1.addEventListener("mouseenter", () => {
        document.getElementById("source1").style.filter = "brightness(40%)";
        document.getElementById("src1").style.backgroundColor ="rgba(0, 0, 0, 0)";
        document.getElementById("src1").style.fontSize = "0.40em";
        document.getElementById("src1").style.height = "250px";
        document.getElementById("src1").style.marginTop = "57px";
    });

    src1.addEventListener("mouseleave", () => {
        document.getElementById("source1").style.filter = "brightness(100%)";
        document.getElementById("src1").style.backgroundColor ="rgba(0, 0, 0, 0.3)";
        document.getElementById("src1").style.fontSize = "0.30em";
        document.getElementById("src1").style.height = "110px";
        document.getElementById("src1").style.marginTop = "0px";  
    });

    src1.addEventListener("mouseenter", () => {
        document.getElementById("source1").style.filter = "brightness(40%)"; 
        document.getElementById("src1").style.backgroundColor ="rgba(0, 0, 0, 0)";
        document.getElementById("src1").style.fontSize = "0.40em";
        document.getElementById("src1").style.height = "250px";
        document.getElementById("src1").style.marginTop = "57px";
    });



    source2.addEventListener("mouseenter", () => {
        document.getElementById("source2").style.filter = "brightness(40%)";
        document.getElementById("src2").style.backgroundColor ="rgba(0, 0, 0, 0)";
        document.getElementById("src2").style.fontSize = "0.43em";
        document.getElementById("src2").style.height = "250px";
        document.getElementById("src2").style.marginTop = "57px"; 
    });

    src2.addEventListener("mouseleave", () => {
        document.getElementById("source2").style.filter = "brightness(100%)";
        document.getElementById("src2").style.backgroundColor ="rgba(0, 0, 0, 0.3)";
        document.getElementById("src2").style.fontSize = "0.30em";
        document.getElementById("src2").style.height = "110px";
        document.getElementById("src2").style.marginTop = "0px";    
    });

    src2.addEventListener("mouseenter", () => {
        document.getElementById("source2").style.filter = "brightness(40%)"; 
        document.getElementById("src2").style.backgroundColor ="rgba(0, 0, 0, 0)";
        document.getElementById("src2").style.fontSize = "0.43em";
        document.getElementById("src2").style.height = "250px";
        document.getElementById("src2").style.marginTop = "57px"; 
    });



    source3.addEventListener("mouseenter", () => {
        document.getElementById("source3").style.filter = "brightness(40%)";
        document.getElementById("src3").style.backgroundColor ="rgba(0, 0, 0, 0)";
        document.getElementById("src3").style.fontSize = "0.39em";
        document.getElementById("src3").style.height = "250px";
        document.getElementById("src3").style.marginTop = "57px";  
    });

    src3.addEventListener("mouseleave", () => {
        document.getElementById("source3").style.filter = "brightness(100%)";
        document.getElementById("src3").style.backgroundColor ="rgba(0, 0, 0, 0.3)";
        document.getElementById("src3").style.fontSize = "0.30em";
        document.getElementById("src3").style.height = "110px";
        document.getElementById("src3").style.marginTop = "0px";    
    });

    src3.addEventListener("mouseenter", () => {
        document.getElementById("source3").style.filter = "brightness(40%)"; 
        document.getElementById("src3").style.backgroundColor ="rgba(0, 0, 0, 0)";
        document.getElementById("src3").style.fontSize = "0.39em";
        document.getElementById("src3").style.height = "250px";
        document.getElementById("src3").style.marginTop = "57px"; 
    });



    source4.addEventListener("mouseenter", () => {
        document.getElementById("source4").style.filter = "brightness(40%)";
        document.getElementById("src4").style.backgroundColor ="rgba(0, 0, 0, 0)";
        document.getElementById("src4").style.fontSize = "0.43em";
        document.getElementById("src4").style.height = "250px";
        document.getElementById("src4").style.marginTop = "57px";
    }); 

    src4.addEventListener("mouseleave", () => {
        document.getElementById("source4").style.filter = "brightness(100%)";
        document.getElementById("src4").style.backgroundColor ="rgba(0, 0, 0, 0.3)";
        document.getElementById("src4").style.fontSize = "0.30em";
        document.getElementById("src4").style.height = "110px";
        document.getElementById("src4").style.marginTop = "0px";  
    });    

    src4.addEventListener("mouseenter", () => {
        document.getElementById("source4").style.filter = "brightness(40%)"; 
        document.getElementById("src4").style.backgroundColor ="rgba(0, 0, 0, 0)";
        document.getElementById("src4").style.fontSize = "0.43em";
        document.getElementById("src4").style.height = "250px";
        document.getElementById("src4").style.marginTop = "57px"; 
    });



    source5.addEventListener("mouseenter", () => {
        document.getElementById("source5").style.filter = "brightness(40%)";
        document.getElementById("src5").style.backgroundColor ="rgba(0, 0, 0, 0)";
        document.getElementById("src5").style.fontSize = "0.43em";
        document.getElementById("src5").style.height = "250px";
        document.getElementById("src5").style.marginTop = "57px";  
    });

    src5.addEventListener("mouseleave", () => {
        document.getElementById("source5").style.filter = "brightness(100%)";
        document.getElementById("src5").style.backgroundColor ="rgba(0, 0, 0, 0.3)";
        document.getElementById("src5").style.fontSize = "0.30em";
        document.getElementById("src5").style.height = "110px";
        document.getElementById("src5").style.marginTop = "0px";    
    });

    src5.addEventListener("mouseenter", () => {
        document.getElementById("source5").style.filter = "brightness(40%)"; 
        document.getElementById("src5").style.backgroundColor ="rgba(0, 0, 0, 0)";
        document.getElementById("src5").style.fontSize = "0.43em";
        document.getElementById("src5").style.height = "250px";
        document.getElementById("src5").style.marginTop = "57px"; 
    });



    source6.addEventListener("mouseenter", () => {
        document.getElementById("source6").style.filter = "brightness(40%)";
        document.getElementById("src6").style.backgroundColor ="rgba(0, 0, 0, 0)";
        document.getElementById("src6").style.fontSize = "0.43em";
        document.getElementById("src6").style.height = "250px";
        document.getElementById("src6").style.marginTop = "57px";    
    });

    src6.addEventListener("mouseleave", () => {
        document.getElementById("source6").style.filter = "brightness(100%)";
        document.getElementById("src6").style.backgroundColor ="rgba(0, 0, 0, 0.3)";
        document.getElementById("src6").style.fontSize = "0.30em";
        document.getElementById("src6").style.height = "110px";
        document.getElementById("src6").style.marginTop = "0px";  
    });

    src6.addEventListener("mouseenter", () => {
        document.getElementById("source6").style.filter = "brightness(40%)"; 
        document.getElementById("src6").style.backgroundColor ="rgba(0, 0, 0, 0)";
        document.getElementById("src6").style.fontSize = "0.43em";
        document.getElementById("src6").style.height = "250px";
        document.getElementById("src6").style.marginTop = "57px"; 
    });



    source7.addEventListener("mouseenter", () => {
        document.getElementById("source7").style.filter = "brightness(40%)";
        document.getElementById("src7").style.backgroundColor ="rgba(0, 0, 0, 0)";
        document.getElementById("src7").style.fontSize = "0.43em";
        document.getElementById("src7").style.height = "250px";
        document.getElementById("src7").style.marginTop = "57px";  
    });

    src7.addEventListener("mouseleave", () => {
        document.getElementById("source7").style.filter = "brightness(100%)";
        document.getElementById("src7").style.backgroundColor ="rgba(0, 0, 0, 0.3)";
        document.getElementById("src7").style.fontSize = "0.30em";
        document.getElementById("src7").style.height = "110px";
        document.getElementById("src7").style.marginTop = "0px";   
    });

    src7.addEventListener("mouseenter", () => {
        document.getElementById("source7").style.filter = "brightness(40%)"; 
        document.getElementById("src7").style.backgroundColor ="rgba(0, 0, 0, 0)";
        document.getElementById("src7").style.fontSize = "0.43em";
        document.getElementById("src7").style.height = "250px";
        document.getElementById("src7").style.marginTop = "57px"; 
    });
