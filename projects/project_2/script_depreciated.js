let c = 0;

function addComicBox(choice) {
    if (c!=0) {return}
    let source = "";
    if (choice=="apple") {
        source = "apple.jpg";
        c = 1;
    }
    else if (choice=="orange") {
        source = "orange.png";
        c = 2;
    }
    // the below line is a quick and dirty solution. For a proper solution, visit https://www.w3schools.com/jsref/prop_doc_body.asp
    document.body.innerHTML += '<div class="comic-box"><img src=' + source +'><p>Scene 4</p></div>';
}

function promptChoice(elem) {
    screenSize = window.screen.availHeight;
    diff = Math.max(elem.offsetTop - window.scrollY, 0);  // no negative value
    v = "hidden";  // visibility;
    choice = elem.getElementsByClassName("choice");
    if (0 < diff < screenSize/2) {
        img = elem.getElementsByTagName("img")[0];
        b = Math.min(((1-diff/screenSize)*2)**7, 10);  // blur; max 10px.
        o = Math.max((diff/screenSize)*200, 60);  // opacity; min 60%.
        img.style.filter = "blur("+ b.toString() +"px) opacity(" + o.toString() +"%)";
        if (diff < screenSize/3) {v = "visible";}
    } else {img.style.filter = "";}
    elem.getElementsByClassName("choice-prompt")[0].style.visibility = v;
    for (i=0;i<choice.length;i++) {
        choice[i].style.visibility = v;
    }
}

// The element should be reselected every time innerHTML is updated
elem = document.getElementById("choice1");
let interval = setInterval(function(){promptChoice(elem)},100);