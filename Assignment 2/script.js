let transcript = {
    sample: [
        ['Sample','❌This is a sample sentence.✔ ➡The color is  ✨19color:red"red"✨ in the subtext.✔'],
        ['Sample','❌This is a sample sentence.✔ ➡The color is  ✨212color:orange"orange"✨ in the subtext.✔']
    ],
    start: [
        ["Bob","Ugh, it's 2 a.m. already.✔ I think I should go to sleep and finish the assignment tomorrow.✔"],
        ["Bob", "Wait. Someone sent me a message."]
    ],
    text_message: [
        ["Unknown", "HI BOB."],
        ["Unknown", "I HAVE A PICTURE OF YOURS."],
        ["Unknown", "DO YOU RECOGNIZE YOURSELF?"],
        ["Unknown", "DO WHAT I SAY OR UNPLEASANT THINGS ARE GOING TO HAPPEN."],
        ["Unknown", "MEET ME BEHIND THE FACULTY RESIDENCE BUILDING IN 30 MINUTES."],
        ["!Blank", ""],
        ["Bob", "What the f**k? I didn't add him. Did he hack into my account?"]
    ]
};

current_progress = 0;
MAX_PROGRESS = 2;

// ------------- Extend to use typeWriter function !
// initial screen start with a black rectangle with an immediate transition to the initial screen
function transition(elem, dest) {
    if (current_progress>=MAX_PROGRESS) {return;}
    image = elem.getElementsByTagName("img")[0];
    image.attributes.src.value = (++current_progress).toString() + ".jpg";
    elem.attributes.onclick.value = "transition(this,'" + current_progress.toString() + ".jpg')";
    dialogue = transcript["sample"];
    typeWriter(dialogue[current_progress-1][1],15,0);
}

















// let c = 0;

// function addComicBox(choice) {
//     if (c!=0) {return}
//     let source = "";
//     if (choice=="apple") {
//         source = "apple.jpg";
//         c = 1;
//     }
//     else if (choice=="orange") {
//         source = "orange.png";
//         c = 2;
//     }
//     // the below line is a quick and dirty solution. For a proper solution, visit https://www.w3schools.com/jsref/prop_doc_body.asp
//     document.body.innerHTML += '<div class="comic-box"><img src=' + source +'><p>Scene 4</p></div>';
// }

// function promptChoice(elem) {
//     screenSize = window.screen.availHeight;
//     diff = Math.max(elem.offsetTop - window.scrollY, 0);  // no negative value
//     v = "hidden";  // visibility;
//     choice = elem.getElementsByClassName("choice");
//     if (0 < diff < screenSize/2) {
//         img = elem.getElementsByTagName("img")[0];
//         b = Math.min(((1-diff/screenSize)*2)**7, 10);  // blur; max 10px.
//         o = Math.max((diff/screenSize)*200, 60);  // opacity; min 60%.
//         img.style.filter = "blur("+ b.toString() +"px) opacity(" + o.toString() +"%)";
//         if (diff < screenSize/3) {v = "visible";}
//     } else {img.style.filter = "";}
//     elem.getElementsByClassName("choice-prompt")[0].style.visibility = v;
//     for (i=0;i<choice.length;i++) {
//         choice[i].style.visibility = v;
//     }
// }

// // The element should be reselected every time innerHTML is updated
// elem = document.getElementById("choice1");
// let interval = setInterval(function(){promptChoice(elem)},100);