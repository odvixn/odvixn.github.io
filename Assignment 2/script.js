let transcript = {
    sample: [
        //-----------------------------------------------------------------------------------------------------//
        //    [❌ clears the dialogue] [✔ pauses for a moment] [➡ adds a new line] [✨style✨ adds style]   //
        //    In style, follow the format of CSS -> property:value;property:value;...
        //-----------------------------------------------------------------------------------------------------//
        ['Sample','❌This is a sample sentence.✔ ➡The style is  ✨19color:red"red"✨ in the subtext.'],
            // the above clears the dialogue, types "This is a sample sentence.", pauses for a moment,
            // moves onto the next line, types "The style is  ", types ""red"" in red color, types " in the subtext."
            // Explanation on "✨19color:red"red"✨":
            //      first ✨ starts styling.
            //      1 is the 'number of digits' of the next number -> 9
            //      9 is the 'length of the text' that describes how the styling is done. -> color:red
            //      "red" types "red"
            //      second ✨ finishes styling.
        ['Sample','❌This is a sample sentence.✔ ➡The style is  ✨230color:orange;font-weight:bold;"bolded orange"✨ in the subtext.']
            // the above clears the dialogue, types "This is a sample sentence.", pauses for a moment,
            // moves onto the next line, types "The style is  ", types ""orange"" in orange color, types " in the subtext."
            // Explanation on "✨230color:orange;font-weight:bold;"bolded orange"✨":
            //      first ✨ starts styling.
            //      2 is the 'number of digits' of the next number -> 30
            //      30 is the 'length of the text' that describes how the styling is done. -> color:orange;font-weight:bold;
            //      "bolded orange" types "bolded orange"
            //      second ✨ finishes styling.
    ],



    start: [
        ["Bob","Ugh, it's 2 a.m. already.✔ I think I should go to sleep and finish the assignment tomorrow."],
        ["Bob", "Wait. Someone sent me a message."]
    ],
    text_message: [
        ["Unknown", "HI BOB."],
        ["Unknown", "I HAVE A PICTURE OF YOURS."],
        ["Unknown", "DO YOU RECOGNIZE YOURSELF?"],
        ["Unknown", "DO WHAT I SAY OR UNPLEASANT THINGS ARE GOING TO HAPPEN."],
        ["Unknown", "MEET ME BEHIND THE FACULTY RESIDENCE BUILDING IN 30 MINUTES."],
        ["Bob", "What the f**k? I didn't add him. Did he hack into my account?"]
    ],
    school_principal: [
        ["Principal", "We recently got an email from one of our students, whose name I will not disclose, that contained a picture."],
        ["Principal", "The picture features you specifically, doing something I don't want to talk about."],
        ["Principal", "I understand that this one piece of evidence is not enough, and would like to hear out what you have to say."]
    ],
    bob_admits: [
        ["Bob", "It's me indeed. I am very sorry. I understand how big of a problem I caused the school and you personally. Unfortunately, there is nothing I can do aat this point to restore the leaked files regarding Emily's death."],
        ["Bob", "..."],
        ["Bob", "I will accept whatever the sanctions would be."],
        ["Principal", "..You! Do you understand what how much struggle it took me to restore mine and the school's dignity?! It happened a year ago, and we: the school, the students, me personaly - are still affected by it. I have nothing to do with that student's death. How can you negate all the pain you caused so casually?"],
        ["Principal", "You already did the worst you could do."],
        ["Principal", "There is absolutely nothing stopping me from kicking you out of the school. I wonder where you are going to go then?"],
        ["Principal", "Kids are so ungrateful these days. You understand that you will never find a full scholarship anywhere else, right?"],
        ["Bob", "..."],
        ["Principal", "Sigh. I'll spare you with a two-week detention. Next time you do anything similar, be ready to tell your parents that you are expelled."],
        ["Principal", "Now get lost."]
    ],
    goes_to_the_place: [
        ["Unknown", "NO SUDDEN MOVEMENTS."],
        ["Unknown", "HERE IS MY PHONE WITH YOUR PICTURE."],
        ["Unknown", "I CAN CLICK THE SEND BUTTON ANYTIME."],
        ["Unknown", "AND YOU ARE GONE FROM THIS COUNTRY."],
        ["Unknown", "THERE IS ONLY ONE THING YOU CAN DO TO PREVENT THAT FROM HAPPENING."],
        []
    ]
};

let current_progress = 0;
let MAX_PROGRESS = 13;

// ------------- Work on this later
// initial screen start with a loading screen with an immediate transition to the starting screen
function transition(elem, dest) {
    if (current_progress>=MAX_PROGRESS) {return;}
    image = elem.getElementsByTagName("img")[0];
    image.attributes.src.value = "resources/scenes/" + (++current_progress).toString() + ".png";
    elem.attributes.onclick.value = "transition(this,'resources/scenes/" + current_progress.toString() + ".png')";
    dialogue = transcript["sample"];
    dialogue_index = current_progress-1;
    typeWriter(dialogue[dialogue_index][1],15,0);
}

// https://stackoverflow.com/questions/807878
function loadComplete() {
    document.getElementsByClassName("loading")[0].style.visibility = "hidden";
    document.getElementsByClassName("comic-box")[0].style.visibility = "visible";
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