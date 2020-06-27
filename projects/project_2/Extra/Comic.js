let transcript = {
    "sample": [
        //-----------------------------------------------------------------------------------------------------//
        //    [❌ clears the dialogue] [✔ pauses for a moment] [➡ adds a new line] [✨style✨ adds style]   //
        //    In style, follow the format of CSS -> property:value;property:value;...
        //-----------------------------------------------------------------------------------------------------//
        '❌This is a sample sentence.✔ ➡The style is  ✨19color:red"red"✨ in the subtext.',
            // the above clears the dialogue, types "This is a sample sentence.", pauses for a moment,
            // moves onto the next line, types "The style is  ", types ""red"" in red color, types " in the subtext."
            // Explanation on "✨19color:red"red"✨":
            //      first ✨ starts styling.
            //      1 is the 'number of digits' of the next number -> 9
            //      9 is the 'length of the text' that describes how the styling is done. -> color:red
            //      "red" types "red"
            //      second ✨ finishes styling.
        '❌This is a sample sentence.✔ ➡The style is  ✨230color:orange;font-weight:bold;"bolded orange"✨ in the subtext.'
            // the above clears the dialogue, types "This is a sample sentence.", pauses for a moment,
            // moves onto the next line, types "The style is  ", types ""orange"" in orange color, types " in the subtext."
            // Explanation on "✨230color:orange;font-weight:bold;"bolded orange"✨":
            //      first ✨ starts styling.
            //      2 is the 'number of digits' of the next number -> 30
            //      30 is the 'length of the text' that describes how the styling is done. -> color:orange;font-weight:bold;
            //      "bolded orange" types "bolded orange"
            //      second ✨ finishes styling.
    ],



    "start":
        "❌Omar > ugh,✔ it's two a.m. already.✔ I think I should go to sleep and finish the assignment tomorrow.✔ \
        ➡Omar > Wait.✔ Someone sent me a message.✔ \
        ➡ Your_Choice > ➰12TMView_message➰\
        ",
    "TM":
        "❌Unknown > HI OMAR.✔ \
        ➡Unknown > I HAVE A PICTURE OF YOURS.✔ \
        ➡Unknown > DO YOU RECOGNIZE YOURSELF?✔ \
        ➡Unknown > DO WHAT I SAY OR UNPLEASANT THINGS ARE GOING TO HAPPEN.✔ \
        ➡Unknown > MEET ME BEHIND THE FACULTY RESIDENCE BUILDING IN 30 MINUTES.✔ \
        ✔ ✔ ✔ ✔ ✔ ✔ ❌ \
        ➡Omar > what the fuck?✔ I didn't add him. ✔ Did he hack into my account?✔ \
        ➡Omar > what should I do?✔ \
        ➡ Your_Choices > ➰16ignoreIgnore➰ / ➰14GTTPGo_to_the_place➰\
        ",
    "SP":
        "❌Principal > We recently got an email from one of our students,✔ whose name I will not disclose,✔ that contained a picture.✔ \
        ➡Principal > The picture features you specifically,✔ doing something I don't want to talk about.✔ \
        ✔ ❌ \
        ➡Principal >  I understand that this one piece of evidence is not enough,✔ and would like to hear out what you have to say.✔ \
        ➡ Your_Choices > ➰12OLLie➰ / ➰12OAAdmit➰\
        ",
    "OA":
        "❌Omar > It's me indeed.✔ I am very sorry.✔ I understand how big of a problem I caused the school and you personally.✔ Unfortunately, there is nothing I can do aat this point to restore the leaked files regarding Emily's death. ✔ \
        ➡Omar > ...✔ \
        ➡Omar > I will accept whatever the sanctions would be.✔ \
        ✔ ❌ \
        ➡Principal > ..You!✔ Do you understand what how much struggle it took me to restore mine and the school's dignity?!✔ It happened a year ago,✔ and we:✔ the school,✔ the students,✔ me personaly✔ - are still affected by it.✔ I have nothing to do with that student's death.✔ How can you negate all the pain you caused so casually?✔ \
        ✔ ❌ \
        ➡Principal > You already did the worst you could do.✔ \
        ➡Principal > There is absolutely nothing stopping me from kicking you out of the school.✔ I wonder where you are going to go then?✔ \
        ➡Principal > Kids are so ungrateful these days.✔ You understand that you will never find a full scholarship anywhere else,✔ right?✔ \
        ✔ ❌ \
        ➡Omar > ...✔ \
        ➡Principal > Sigh.✔ I'll spare you with a two-week detention.✔ Next time you do anything similar,✔ be ready to tell your parents that you are expelled.✔ \
        ➡Principal > Now get lost.✔ \
        ➡ Your_Choice > ➰12GEGood_Ending➰\
        ",
    "GTTP":
        "❌Unknown > NO SUDDEN MOVEMENTS.✔ \
        ➡Unknown > HERE IS MY PHONE WITH YOUR PICTURE.✔ \
        ➡Unknown > I CAN CLICK THE SEND BUTTON ANYTIME.✔ \
        ➡Unknown > AND YOU ARE GONE FROM THIS COUNTRY.✔ \
        ➡Unknown > THERE IS ONLY ONE THING YOU CAN DO TO PREVENT THAT FROM HAPPENING. ✔ \
        ✔ ❌ \
        ➡Unknown >  SEE THIS BAG ON THE FLOOR?✔ IT CONTAINS SOMETHING THAT YOU HAVE TO PUT IN THE LOUNGE WATER DISPENSER BEFORE 12 PM TOMORROW.✔ THE SECURITY CAMERAS WILL BE TURNED OFF.✔ MAKE SURE YOU ARE NOT SEEN BY ANYONE. ✔ \
        ➡ Your_Choices > ➰14NDDIKnock_Down_N_Delete_Images➰ / ➰16complyComply➰ / ➰19recorder1Use_Recorder➰\
        ",
    "ignore":
        "❌Omar > WHERE DID HE GET THAT IMAGE FROM?✔ \
        ➡Omar > I don't remember being seen by anyone.✔ \
        ➡Omar > anyways.✔ \
        ➡Omar > WHY THE FUCK DO I HAVE TO JUST DANCE TO WHATEVER HE SAYS?✔ \
        ✔ ❌ \
        ➡Omar > fuck him. What's his benefit in doing this? ✔ \
        ➡Omar > nobody's going to believe that petty picture. ✔ \
        ➡Omar > let him do as he wishes. ✔ \
        ➡ Your_Choice > ➰12SPSchool_Principal➰\
        ",
    "OL":
        "❌Omar > I didn't do that.✔ I have absolutely no intention of harming the school's dignity like that.✔ ALso, you know that I am here on a scholarship.✔ Why would I put myself in such danger? ✔ \
        ➡Principal > Bob. ✔ \
        ➡Principal > When you broke into my office,✔ you clearly overlooked something important.✔ \
        ➡Principal > You didn't realize there was a hidden camera,✔ right?✔ \
        ➡Omar > What?!.✔ \
        ➡Omar > Why would you tell me now if you already know it's me?!✔ \
        ✔ ❌ \
        ➡Principal > I was giving you a chance.✔ I know you are related to the deceased student,✔ and the fact that I tried to keep this quiet was unacceptable to you.✔ I understand,✔ really.✔  \
        ➡Principal > But now it's all gone.✔ \
        ✔ ❌ \
        ➡Principal > The police will be arriving soon.✔ We'll talk more with them.✔ \
        ➡Omar > ...✔ \
        ➡ Your_Choice > ➰132MJ2_Months_In_Jail➰\
        ",
    "GE":
        "❌Omar > It's been two years since that accident.✔ \
        ➡Omar > I still can't sleep at night trying to figure out who the hacker was.✔ \
        ➡Omar > fuck,✔ who in the world hates me that much?✔ \
        ➡END✔ \
        ",
    "comply":
        "❌Bob > this should do the job.✔ \
        ➡Bob > I hope no one was watching.✔\
        ➡ Your_Choice > ➰1420YJ20_Years_In_Jail➰\
        ",
    "NDDI":
        "❌Unknown > AAAARGH.✔\
        ➡Unknown > ...✔\
        ➡Bob > *pant*✔\
        ➡Bob > I should delete the images immediately while he is unconscious.✔\
        ➡Bob > this should do the job.✔\
        ➡Unknown > ..ha..✔ha..✔ha.✔\
        ❌Bob > ?!... what the fuck?✔\
        ➡Unknown > ...There is no escape.✔ I wrote a program that will send your image automatically in 2 hours.✔\
        ➡ Your_Choices > ➰15bluffBluff➰ / ➰14killKill➰\
        ",
    "10YJ":
        "❌Bob > *sob*✔\
        ➡Bob > I✔ want✔ everything✔ to✔ be✔ normal✔ again.✔\
        ➡Bob > If only that fucker didn't do anything!✔\
        ➡Bob > it's all his fault.✔\
        ➡END.✔\
        ",
    "2MJ":
        "❌Bob > It's been a year since that accident.✔\
        ➡Bob > I am back home after spending two months in jail.✔\
        ➡Bob > I had to drop college and pick-up a part-time software engineering job.✔ The pay sucks, but at least they didn't✔\
        bother with checking my criminal history.✔\
        ➡Bob > My parents are friends are avoiding me.✔\
        ✔ ❌ \
        ➡Bob > I still can't sleep at night trying to figure out who the hacker was.✔\
        ➡Bob: FUCK.✔\
        ➡Bob > WHOEVER YOU ARE, I WILL KILL YOU ONE DAY.✔\
        ➡Bob > just you wait.✔\
        ➡END.✔\
        ",
    "recorder1":
        "❌Bob > you are being recorded.✔\
        ➡Bob > Delete that image immediately,✔ or you are done.✔\
        ➡Bob > I know who you are.✔\
        ➡Unknown > !!✔\
        ❌Unknown > I set an automatic..✔\
        ➡Bob > I don't care.✔\
        ➡Unknown > ..FINE.✔\
        ➡Unknown > *deletes the images*✔\
        ➡ Your_Choice > ➰13GE2Good_Ending➰\
        ",
    "bluff":
        "❌nice try.✔\
        ➡Bob > I know you are bluffing.✔\
        ➡Bob > Get lost.✔\
        ➡Unknown >IT WILL NOT END THAT EASY.✔ YOU KNOW THAT.✔\
        ➡ Your_Choice > ➰15AOBBSNext➰\
        ",
    "20YJ":
        "❌Bob > *sob*✔\
        ➡Bob > I can't believe it.✔\
        ➡Bob > I want everything to be normal again.✔\
        ➡Bob > If only that fucker didn't do anything!✔\
        ➡Bob > It's all his fault.✔\
        ➡END✔\
        ",
    "kill":
        "❌Bob > AAAAHHH.✔\
        ➡Bob > DIE.✔\
        ➡> ➰1410YJ10_Years_In_Jail➰\
        ",
    "recorder":
        "❌Bob > I should probably grab a recorder.✔\
        ➡Bob > Just in case.✔\
        ➡ Your_Choice > ➰14GTTPGo_to_the_place➰\
        ",
    "GE2":
        "❌*two weeks pass*✔\
        ➡Bob > Life is good again.✔\
        ➡Bob > I wonder how is he doing.✔\
        ➡END.✔\
        ",
    "AOBBS":
        "❌Bob > It's been two years since that accident.✔\
        ➡Bob > I still can't sleep at night thinking of what he might do.✔\
        ➡Bob > fuck,✔ why in the world does he hate me that much?✔\
        ➡END.✔\
        "
};

let scene_image = {
    "start":"1",
    "TM":"2",
    "SP":"11",
    "OA":"15",
    "GTTP":"3",
    "ignore":"14",
    "OL":"11",
    "GE":"6",
    "comply":"10",
    "NDDI":"4",
    "10YJ":"9",
    "2MJ":"12",
    "recorder1":"7",
    "bluff":"5",
    "20YJ":"9",
    "kill":"8",
    "recorder":"2",
    "GE2":"13",
    "AOBBS":"6"
};

let current_progress = 0;
let MAX_PROGRESS = 13;

// ------------- Work on this later
// initial screen start with a loading screen with an immediate transition to the starting screen
function transition(option) {
    // if (current_progress>=MAX_PROGRESS) {return;}
    image = document.getElementsByTagName("img")[0];
    image.attributes.src.value = "resources/scenes/" + scene_image[option] + ".png";
    // elem.attributes.onclick.value = "transition(this,'resources/scenes/" + current_progress.toString() + ".png')";
    typeWriter(transcript[option],15,0);
}

// https://stackoverflow.com/questions/807878
function loadComplete() {
    document.getElementsByClassName("loading")[0].style.visibility = "hidden";
    document.getElementsByClassName("comic-box")[0].style.visibility = "visible";
    transition('start');
}





// ➡ Your_Choices > ➰18recorderUse_Recorder➰ / ➰16ignoreIgnore➰ / ➰14GTTPGo_to_the_place➰\

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
