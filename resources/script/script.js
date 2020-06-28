// cancelled due to lack of time

// let hash = location.hash.replace('#','');
// let options = [
//     // theme
// ]

// // read options
// if (hash!="") {options=hash.split('+');};

// Idea from https://taliacotton.com/
document.onmousemove = function(e){
    if (window.innerWidth < 650) {return;}
    coords = document.getElementById("coords");
    elem = getInnermostHovered().outerHTML.toString()
    coords.innerText = elem.substr(0,elem.indexOf(">")+1);

    coords.style.display = "block";
    coords.style.top = e.clientY + 12 + "px";
    coords.style.left = e.clientX + 10 + "px";
}

// Get element under mouse pointer
// https://stackoverflow.com/questions/24538450
function getInnermostHovered() {
    var n = document.querySelector(":hover");
    var nn;
    while (n) {
        nn = n;
        n = nn.querySelector(":hover");
    }
    return nn;
}