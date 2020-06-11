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
        "❌Omar > Ugh,✔ it's two a.m. already.✔ I think I should go to sleep and finish the assignment tomorrow.✔ \
        ➡Omar > Wait.✔ Someone sent me a message.✔ \
        ➡ Your_Choice > ➰12TMView_message➰\
        ",
    "TM":
        "❌Unknown > HI OMAR.✔ \
        ➡Unknown > I HAVE A PICTURE OF YOURS.✔ \
        ➡Unknown > DO YOU RECOGNIZE YOURSELF?✔ \
        ➡Unknown > DO WHAT I SAY OR UNPLEASANT THINGS ARE GOING TO HAPPEN.✔ \
        ➡Unknown > MEET ME BEHIND THE FACULTY RESIDENCE BUILDING IN 30 MINUTES.✔ \
        ✔ ✔ ✔ \
        ❌Omar > What the fuck?✔ I didn't add him. ✔ Did he hack into my account?✔ \
        ➡Omar > What should I do?✔ \
        ➡ Your_Choices > ➰18recorderGrab_Recorder➰ / ➰16ignoreIgnore➰ / ➰14GTTPGo_to_the_place➰\
        ",
    "SP":
        "❌Principal > We recently got an email from one of our students,✔ whose name I will not disclose,✔ that contained a picture.✔ \
        ➡Principal > The picture features you specifically,✔ doing something I don't want to talk about.✔ \
        ✔ \
        ❌Principal >  I understand that this one piece of evidence is not enough,✔ and would like to hear out what you have to say.✔ \
        ➡ Your_Choices > ➰12OLLie➰ / ➰12OAAdmit➰\
        ",
    "OA":
        "❌Omar > It's me indeed.✔ I am very sorry.✔ I understand how big of a problem I caused the school and you personally.✔ Unfortunately, there is nothing I can do aat this point to restore the leaked files regarding Emily's death. ✔ \
        ➡Omar > ...✔ \
        ➡Omar > I will accept whatever the sanctions would be.✔ \
        ✔ \
        ❌Principal > ..You!✔ Do you understand what how much struggle it took me to restore mine and the school's dignity?!✔ It happened a year ago,✔ and we:✔ the school,✔ the students,✔ me personaly✔ - are still affected by it.✔ I have nothing to do with that student's death.✔ How can you negate all the pain you caused so casually?✔ \
        ✔ \
        ❌Principal > You already did the worst you could do.✔ \
        ➡Principal > There is absolutely nothing stopping me from kicking you out of the school.✔ I wonder where you are going to go then?✔ \
        ➡Principal > Kids are so ungrateful these days.✔ You understand that you will never find a full scholarship anywhere else,✔ right?✔ \
        ✔ \
        ❌Omar > ...✔ \
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
        ✔ \
        ❌Unknown >  SEE THIS BAG ON THE FLOOR?✔ IT CONTAINS SOMETHING THAT YOU HAVE TO PUT IN THE LOUNGE WATER DISPENSER BEFORE 12 PM TOMORROW.✔ THE SECURITY CAMERAS WILL BE TURNED OFF.✔ MAKE SURE YOU ARE NOT SEEN BY ANYONE. ✔ \
        ➡ Your_Choices > ➰14NDDIKnock_Down_N_Delete_Images➰ / ➰16complyComply➰",
    "ignore":
        "❌Omar > WHERE DID HE GET THAT IMAGE FROM?✔ \
        ➡Omar > I don't remember being seen by anyone.✔ \
        ➡Omar > anyways.✔ \
        ➡Omar > WHY THE FUCK DO I HAVE TO JUST DANCE TO WHATEVER HE SAYS?✔ \
        ✔ \
        ❌Omar > fuck him. What's his benefit in doing this? ✔ \
        ➡Omar > nobody's going to believe that petty picture. ✔ \
        ➡Omar > let him do as he wishes. ✔ \
        ➡ Your_Choice > ➰12SPSchool_Principal➰\
        ",
    "OL":
        "❌Omar > I didn't do that.✔ I have absolutely no intention of harming the school's dignity like that.✔ ALso, you know that I am here on a scholarship.✔ Why would I put myself in such danger? ✔ \
        ➡Principal > Omar. ✔ \
        ➡Principal > When you broke into my office,✔ you clearly overlooked something important.✔ \
        ➡Principal > You didn't realize there was a hidden camera,✔ right?✔ \
        ➡Omar > What?!.✔ \
        ➡Omar > Why would you tell me now if you already know it's me?!✔ \
        ✔ \
        ❌Principal > I was giving you a chance.✔ I know you are related to the deceased student,✔ and the fact that I tried to keep this quiet was unacceptable to you.✔ I understand,✔ really.✔  \
        ➡Principal > But now it's all gone.✔ \
        ✔ \
        ❌Principal > The police will be arriving soon.✔ We'll talk more with them.✔ \
        ➡Omar > ...✔ \
        ➡ Your_Choice > ➰132MJ2_Months_In_Jail➰\
        ",
    "GE":
        "❌Omar > It's been two years since that accident.✔ \
        ➡Omar > I still can't sleep at night trying to figure out who the hacker was.✔ \
        ➡Omar > fuck,✔ who in the world hates me that much?✔ \
        ➡ $\
        ",
    "comply":
        "❌Omar > this should do the job.✔ \
        ➡Omar > I hope no one was watching.✔\
        ➡ Your_Choice > ➰1420YJ20_Years_In_Jail➰\
        ",
    "NDDI":
        "❌Unknown > AAAARGH.✔\
        ➡Unknown > ...✔\
        ➡Omar > *pant*✔\
        ➡Omar > I should delete the images immediately while he is unconscious.✔\
        ➡Omar > this should do the job.✔\
        ➡Unknown > ..ha..✔ha..✔ha.✔\
        ❌Omar > ?!... what the fuck?✔\
        ➡Unknown > ...There is no escape.✔ I wrote a program that will send your image automatically in 2 hours.✔\
        ➡ Your_Choices > ➰15bluffBluff➰ / ➰14killKill➰\
        ",
    "10YJ":
        "❌Omar > *sob*✔\
        ➡Omar > I✔ want✔ everything✔ to✔ be✔ normal✔ again.✔\
        ➡Omar > If only that fucker didn't do anything!✔\
        ➡Omar > it's all his fault.✔\
        ➡ $\
        ",
    "2MJ":
        "❌Omar > It's been a year since that accident.✔\
        ➡Omar > I am back home after spending two months in jail.✔\
        ➡Omar > I had to drop college and pick-up a part-time software engineering job.✔ The pay sucks, but at least they didn't✔\
        bother with checking my criminal history.✔\
        ➡Omar > My parents are friends are avoiding me.✔\
        ✔ \
        ❌Omar > I still can't sleep at night trying to figure out who the hacker was.✔\
        ➡Omar: FUCK.✔\
        ➡Omar > WHOEVER YOU ARE, I WILL KILL YOU ONE DAY.✔\
        ➡Omar > just you wait.✔\
        ➡ $\
        ",
    "recorder1":
        "❌Omar > you are being recorded.✔\
        ➡Omar > Delete that image immediately,✔ or you are done.✔\
        ➡Omar > I know who you are.✔\
        ➡Unknown > !!✔\
        ❌Unknown > I set an automatic..✔\
        ➡Omar > I don't care.✔\
        ➡Unknown > ..FINE.✔\
        ➡Unknown > *deletes the images*✔\
        ➡ Your_Choice > ➰13GE2Good_Ending➰\
        ",
    "bluff":
        "❌nice try.✔\
        ➡Omar > I know you are bluffing.✔\
        ➡Omar > Get lost.✔\
        ➡Unknown >IT WILL NOT END THAT EASY.✔ YOU KNOW THAT.✔\
        ➡ Your_Choice > ➰15AOBBSNext➰\
        ",
    "20YJ":
        "❌Omar > *sob*✔\
        ➡Omar > I can't believe it.✔\
        ➡Omar > I want everything to be normal again.✔\
        ➡Omar > If only that fucker didn't do anything!✔\
        ➡Omar > It's all his fault.✔\
        ➡ $\
        ",
    "kill":
        "❌Omar > AAAAHHH.✔\
        ➡Omar > DIE.✔\
        ➡> ➰1410YJ10_Years_In_Jail➰\
        ",
    "recorder":
        "❌Omar > I should probably grab a recorder.✔\
        ➡Omar > Just in case.✔\
        ➡ Your_Choice > ➰14GTTPGo_to_the_place➰\
        ",
    "GE2":
        "❌*two weeks pass*✔\
        ➡Omar > Life is good again.✔\
        ➡Omar > I wonder how is he doing.✔\
        ➡ $\
        ",
    "AOBBS":
        "❌Omar > It's been two years since that accident.✔\
        ➡Omar > I still can't sleep at night thinking of what he might do.✔\
        ➡Omar > fuck,✔ why in the world does he hate me that much?✔\
        ➡ $\
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

// initial screen start with a loading screen with an immediate transition to the starting screen
function transition(option) {
    if (option=='recorder') {transcript['GTTP']+=' / ➰19recorder1Use_Recorder➰ '} // quick and dirty, but it works.
    images = document.getElementsByClassName("scenes");
    for (i=0;i<images.length;i++) {images[i].style.visibility = "hidden";}
    image = document.getElementById("IMG"+scene_image[option]);
    image.style.visibility = "visible";

    typeWriter(transcript[option],15,0);
}

// https://stackoverflow.com/questions/807878
function loadComplete() {
    document.getElementsByClassName("loading")[0].style.visibility = "hidden";
    document.getElementsByClassName("comic-box")[0].style.visibility = "visible";
    transition('start');
}
