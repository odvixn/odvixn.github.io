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
        "❌Omar > Ugh,✔ it's 2 a.m. already.✔ I think I should go to sleep and finish the assignment tomorrow.✔ \
        ➡Omar > Wait.✔ Someone sent me a message.✔ \
        ➡ > ➰12TMOpen message➰\
        ➡ ✨255font-size:1.1vw;line-height:1.4vw;color:rgb(235,57,72);\
        (Dialogue too slow? Press any key or click anywhere on the screen to skip the dialogue.)✨ \
        ",
    "TM":
        "❌Unknown > HI OMAR.✔ \
        ➡Unknown > I HAVE A PICTURE OF YOURS.✔ \
        ➡Unknown > DO WHAT I SAY OR I LEAK IT TO THE PRINCIPAL.✔ \
        ➡Unknown > MEET ME IN THE SCHOOL BASEMENT IN 30 MINUTES.✔ \
        ➡Omar > What the hell?✔ \
        ➡Omar > I thought nobody would find out about the ATM incident. Nobody was there when I broke the machine.✔\
        ➡Omar > ...What should I do?!✔ \
        ➡Choices > ➰18recorderGrab a recorder for the meetup➰ / ➰16ignoreIgnore➰ / ➰14GTTPGo to the place➰\
        ",
    "SP":
        "❌Principal > We recently got an anonymous email containing a questionable picture of you.✔ \
        ➡Principal > I understand one piece of evidence is not enough.✔ I would like to hear out what you have to say.✔ \
        ➡Choices > ➰12OLLie➰ / ➰12OAAdmit➰\
        ",
    "OA":
        "❌Omar > It's me indeed.✔ I am very sorry.✔ \
        ➡Omar > I will return the money I took from the school's ATM, and I accept the consequences regarding my actions.✔ \
        ➡Principal > Omar, I am really disappointed in you.✔\
        ➡Principal > There is absolutely nothing stopping me from kicking you out of the school.✔\
        ➡Principal > However, given the academic excellence you showed consistently, we will resolve this issue internally by giving you a two-week detention.✔ Don't expect me to be as lenient from now on.✔ \
        ➡ > ➰12GE2 years later➰\
        ",
    "GTTP":
        "❌Unknown > DON'T MAKE ANY SUDDEN MOVEMENTS.✔ \
        ➡Unknown > HERE IS MY PHONE WITH YOUR PICTURE.✔ \
        ➡Unknown > I CAN CLICK THE SEND BUTTON ANYTIME,✔ AND YOU CAN SAY GOODBYE TO YOUR SCHOLARSHIP.✔ \
        ➡Unknown > THERE IS ONLY ONE THING YOU CAN DO TO PREVENT THAT FROM HAPPENING. ✔ \
        ➡Unknown >  SEE THIS BAG ON THE FLOOR?✔ IT CONTAINS SOMETHING THAT YOU HAVE TO PUT IN THE LOUNGE WATER DISPENSER BEFORE 12 PM TOMORROW.✔ THE SECURITY CAMERAS WILL BE TURNED OFF.✔ MAKE SURE YOU ARE NOT SEEN BY ANYONE. ✔ \
        ➡Choices > ➰14NDDIKnock Down & Delete Images➰ / ➰16complyComply➰",
    "ignore":
        "❌Omar > Where did he get that image from?✔ \
        ➡Omar > I don't remember being seen by anyone when taking the money from the ATM.✔ \
        ➡Omar > Basement in 30 minutes? I am not going.✔ \
        ➡Omar > Nobody's going to believe that petty picture. ✔ \
        ➡Omar > let him do as he wishes. ✔ \
        ➡ > ➰12SPSchool principal calls you.➰\
        ",
    "OL":
        "❌Omar > I didn't do that.✔ Sir, you know that I am here on a scholarship.✔ Why would I put myself in this position?✔ \
        ➡Principal > Omar. ✔ \
        ➡Principal > I am very disappointed in you. ✔ \
        ➡Principal > I was able to retrieve the old tape through the security company,✔ and,✔ unfortunately, you were seen stealing from the ATM..✔ \
        ➡Principal > Why would you tell me now if you already know it's me?!✔ \
        ➡Principal > I was giving you a chance to take responsibility.✔ \
        ➡Principal > The police will be arriving soon.✔ \
        ➡ > ➰132MJYou are sentenced 2 months of imprisonment➰\
        ",
    "GE":
        "❌Omar > It's been two years since that incident.✔ \
        ➡Omar > I still can't sleep at night trying to figure out who the hacker was.✔ \
        ➡Omar > Who in the world hates me that much?✔ \
        ➡ $\
        ",
    "comply":
        "❌Omar > I put the mixture in the water dispenser.✔ \
        ➡Omar > I hope no one was watching.✔\
        ➡Omar > Hopefully he keeps his word and deletes the image.✔\
        ➡ > ➰1420YJ5 people got poisoned to death. You received 20 years of imprisonment.➰\
        ",
    "NDDI":
        "❌Unknown > AAAARGH.✔\
        ➡Unknown > ...✔\
        ➡Omar > *pant*✔\
        ➡Omar > I should delete the images immediately while he is unconscious.✔\
        ➡Omar > this should do the job.✔\
        ➡Unknown > ..ha..@ha..@ha.✔\
        ➡Unknown > ...There is no escape.✔ I wrote a programm that will automatically leak your image within 2 hours.✔\
        ➡Choices > ➰15bluffUnknown must be lying!➰ / ➰14killEh, Kill him anyway➰\
        ",
    "10YJ":
        "❌Omar > *sob*✔\
        ➡Omar > I@ want@ everything@ to@ be@ normal@ again.✔\
        ➡Omar > It's all that hacker's fault.✔\
        ➡ $\
        ",
    "2MJ":
        "❌Omar > It's been a year since that incident.✔\
        ➡Omar > I am back home after spending two months in jail.✔\
        ➡Omar > I had to drop from school and pick-up a part-time job.✔\
        ➡Omar > My parents and friends are avoiding me.✔\
        ➡Omar > I still can't sleep at night trying to figure out who the hacker was.✔\
        ➡Omar > Whoever you are, you literally destroyed everything I had.✔\
        ➡ $\
        ",
    "recorder1":
        "❌Omar > You are being recorded.✔\
        ➡Omar > Delete that image immediately,@ or I will report you to the police.✔\
        ➡Unknown > !!✔\
        Unknown >  I wrote a programm that will automatically leak your image within 2 hours. ✔\
        ➡Omar > I don't believe you.✔\
        ➡Unknown > ..FINE.✔\
        ➡Unknown > *deletes the images*✔\
        ➡ > ➰13GE2Two weeks later➰\
        ",
    "bluff":
        "❌Omar > Nice try.✔\
        ➡Omar > I know you are bluffing.✔\
        ➡Omar > Get lost.✔\
        ➡Unknown >IT WILL NOT END THAT EASY.✔ YOU KNOW THAT.✔\
        ➡ > ➰15AOBBS(You feel worried, but let Unknown go.)➰\
        ",
    "20YJ":
        "❌Omar > *sobs*✔\
        ➡Omar > I can't believe it.✔\
        ➡Omar > I want everything to be normal again.✔\
        ➡Omar > If only that hacker didn't do anything!✔\
        ➡Omar > It's all his fault.✔\
        ➡Omar > Whoever you are, you literally destroyed everything I had.✔\
        ➡ $\
        ",
    "kill":
        "❌Omar > AAAAHHH.✔\
        ➡Omar > DIE.✔\
        ➡ > ➰1410YJYour murder is discovered. You received 10 years of imprisonment.➰\
        ",
    "recorder":
        "❌Omar > I should probably grab a recorder before meeting him.✔\
        ➡Omar > Just in case things don't go as planned.✔\
        ➡ > ➰14GTTPGo to the place➰\
        ",
    "GE2":
        "❌*two weeks passed*✔\
        ➡Omar > Life is good again.✔\
        ➡Omar > I wonder what happened to the hacker.✔\
        ➡ $\
        ",
    "AOBBS":
        "❌Omar > It's been two years since that incident.✔\
        ➡Omar > I still can't sleep at night thinking of what the hacker might do to me.✔\
        ➡Omar > Why in the world does he hate me that much?✔\
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
    if (option=='recorder') {transcript['GTTP']+=' / ➰19recorder1Use_Recorder➰ ';} // quick and dirty, but it works.
    images = document.getElementsByClassName("scenes");
    for (i=0;i<images.length;i++) {images[i].style.visibility = "hidden";}
    image = document.getElementById("IMG"+scene_image[option]);
    image.style.visibility = "visible";

    typeWriter(transcript[option],27,0);
}

// Preload function
let image_holder = []
function preload(num) {
    for (i=1;i<=num;i++) {
        image_holder.push(new Image());
        image_holder[image_holder.length-1].src = "resources/scenes/" + num.toString() + ".png";
    }
}

// https://stackoverflow.com/questions/807878
function loadComplete() {
    document.getElementsByClassName("loading")[0].style.visibility = "hidden";
    document.getElementsByClassName("comic-box")[0].style.visibility = "visible";
    transition('start');
}
