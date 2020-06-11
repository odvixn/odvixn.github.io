let transcript = {
    sample: [
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


// HERE COME TONIA AND ZUNAIRS WRITEUPS

    start: [
    "❌Omar > ugh,✔ it's 2 a.m. already.✔ I think I should go to sleep and finish the assignment tomorrow.✔ \
    ➡Omar > Wait.✔ Someone sent me a message.✔ \
    "
    ],

    text_message: [
    "❌Unknown > HI OMAR.✔ \
    ➡Unknown > I HAVE A PICTURE OF YOURS.✔ \
    ➡Unknown > DO WHAT I SAY OR I LEAK IT TO THE PRINCIPAL.✔ \
    ➡Unknown > MEET ME IN THE SCHOOL BASEMENT IN 30 MINUTES.✔ \
    ➡Omar > What the hell?✔ \
    ➡Omar > I thought nobody would find out about the ATM incident. Nobody was there when I broke the machine.✔\
    ➡Omar > ...What should I do?!✔ \
    "
    /* CHOICES ARE */
    /* grab a recorder for the meetup !!!!!!!!!!!!!TYPE THIS IN THE CHOICE ZUNAIR/JOONHA!!!!!!!!!!!
    Ignore
    Go to the place */
    ],

    school_principal: [
    "❌Principal > We recently got an anonymous email containing a questionable picture of you.✔ \
    ➡Principal > I understand one piece of evidence is not enough.✔ I would like to hear out what you have to say.✔ \
    "
    /* CHOICES ARE */
    /* Bob lies
    Bob admits */
    ],


    bob_admits: [

    "❌Omar > It's me indeed.✔ I am very sorry.✔ \
    ➡Omar > I will return the money I took from the school's ATM, and I accept the consequences regarding my actions.✔ \
    ➡Principal > Omar, I am really disappointed in you.✔\
    ➡Principal > There is absolutely nothing stopping me from kicking you out of the school.✔\
    ➡Principal > However, given the academic excellence you showed consistently, we will resolve this issue internally by giving you a two-week detention.✔ Don't expect me to be as lenient from now on.✔ \
    "
    /* CHOICES ARE */
    /* 2 years later !!!!!YOOO JOONHA/ZUNAIR,choice NAME CHANGES HERE. INSTEAD OF 'GOOD ENDING', IT IS NOW '2 YEARS LATER'. */

    ],

    goes_to_the_place: [

    "❌Unknown > DON'T MAKE ANY SUDDEN MOVEMENTS.✔ \
    ➡Unknown > HERE IS MY PHONE WITH YOUR PICTURE.✔ \
    ➡Unknown > I CAN CLICK THE SEND BUTTON ANYTIME,✔ AND YOU CAN SAY GOODBYE TO YOUR SCHOLARSHIP.✔ \
    ➡Unknown > THERE IS ONLY ONE THING YOU CAN DO TO PREVENT THAT FROM HAPPENING. ✔ \
    ➡Unknown >  SEE THIS BAG ON THE FLOOR?✔ IT CONTAINS SOMETHING THAT YOU HAVE TO PUT IN THE LOUNGE WATER DISPENSER BEFORE 12 PM TOMORROW.✔ THE SECURITY CAMERAS WILL BE TURNED OFF.✔ MAKE SURE YOU ARE NOT SEEN BY ANYONE. ✔ \
    "
    /* CHOICES ARE */
    /* Knock Down & Delete Images
    comply
    recorder1 */
    ],


    ignore: [

    "❌Omar > Where did he get that image from?✔ \
    ➡Omar > I don't remember being seen by anyone when taking the money from the ATM.✔ \
    ➡Omar > Basement in 30 minutes? I am not going.✔ \
    ➡Omar > Nobody's going to believe that petty picture. ✔ \
    ➡Omar > let him do as he wishes. ✔ \
    "
    /* CHOICES ARE */
    /* School Principal */
    ],


    bob_lies: [

    "❌Omar > I didn't do that.✔ Sir, you know that I am here on a scholarship.✔ Why would I put myself in this position?✔ \
    ➡Principal > Omar. ✔ \
    ➡Principal > I am very disappointed in you. ✔ \
    ➡Principal > I was able to retrieve the old tape through the security company,✔ and,✔ unfortunately, you were seen stealing from the ATM..✔ \
    ➡Principal > Why would you tell me now if you already know it's me?!✔ \
    ➡Principal > I was giving you a chance to take responsibility.✔ \
    ➡Principal > The police will be arriving soon.✔ \
    "
    /* CHOICES ARE */
    /* 2 months jail */
    ],

    good_ending: [
    // YOYOYOYOYOYO tHE user's CHOICE SHOULD BE RENAMED TO "2 YEARS LATER".

    "❌Omar > It's been two years since that incident.✔ \
    ➡Omar > I still can't sleep at night trying to figure out who the hacker was.✔ \
    ➡Omar > Who in the world hates me that much?✔ \
    ➡END✔ \
    "
    /* CHOICES ARE */
    /* 2 months jail */
    ],


    comply: [
        "❌Omar > I put the mixture in the water dispenser.✔ \
        ➡Omar > I hope no one was watching.✔\
        ➡Omar > Hopefully he keeps his word and deletes the image.✔\
        "
    // 20 years jail
    ],
   
   

    knock down&delete image: [
        "❌Unknown > AAAARGH.✔\
        ➡Unknown > ...✔\
        ➡Omar > *pant*✔\
        ➡Omar > I should delete the images immediately while he is unconscious.✔\
        ➡Omar > this should do the job.✔\
        ➡Unknown > ..ha..✔ha..✔ha.✔\
        ➡Unknown > ...There is no escape.✔ I wrote a programm that will automatically leak your image within 2 hours.✔\
        "
        // Unknown is lying! ################JOOOOONHA ZUNAIR LOOK HERE RENAME THE CHOICE TO UNKNOWN IS LYING PLZ. NOT BLUFF ANYMORE.
        // kill him.
    ],
   
    10 years jail: [
    "❌Omar > *sob*✔\
    ➡Omar > I✔ want✔ everything✔ to✔ be✔ normal✔ again.✔\
    ➡Omar > It's all that hacker's fault.✔\
    ➡END.✔\
    "
    ],


    2 months jail: [
    "❌Omar > It's been a year since that incident.✔\
    ➡Omar > I am back home after spending two months in jail.✔\
    ➡Omar > I had to drop from school and pick-up a part-time job.✔\
    ➡Omar > My parents and friends are avoiding me.✔\
    ➡Omar > I still can't sleep at night trying to figure out who the hacker was.✔\
    ➡Omar > Whoever you are, you literally destroyed everything I had.✔\
    "
    ],

   
    recorder1: [
    "❌Omar > You are being recorded.✔\
    ➡Omar > Delete that image immediately,✔ or I will report you to the police.✔\
    ➡Unknown > !!✔\
    Unknown >  I wrote a programm that will automatically leak your image within 2 hours. ✔\
    ➡Omar > I don't believe you.✔\
    ➡Unknown > ..FINE.✔\
    ➡Unknown > *deletes the images*✔\
    "
   
    // good ending2
   
    ],

    bluff: [
    // THE BLUFF CHOICE SHOULD BE RENAMED TO "UNKNOWN IS LYING!" AS BEEN MENTIONED ABOVE.

    "❌Omar > Nice try.✔\
    ➡Omar > I know you are bluffing.✔\
    ➡Omar > Get lost.✔\
    ➡Unknown >IT WILL NOT END THAT EASY.✔ YOU KNOW THAT.✔\
    "
    // all ok but bob scared

    ],

    20 years jail: [

    "❌Omar > *sobs*✔\
    ➡Omar > I can't believe it.✔\
    ➡Omar > I want everything to be normal again.✔\
    ➡Omar > If only that hacker didn't do anything!✔\
    ➡Omar > It's all his fault.✔\
    ➡Omar > Whoever you are, you literally destroyed everything I had.✔\
    ➡END✔\
    "
    ],

    kills: [
    "❌Omar > AAAAHHH.✔\
    ➡Omar > DIE.✔\
    "

    //10 years jail
    ],


    recorder: [
    "❌Omar > I should probably grab a recorder before meeting him.✔\
    ➡Omar > Just in case things don't go as planned.✔\
    "
    //goes to the place
    ],


    good ending2: [
    "❌*two weeks pass*✔\
    ➡Omar > Life is good again.✔\
    ➡Omar > I wonder what happened to the hacker.✔\
    ➡END.✔\
    "
    ],

    all ok but bob scared
    "❌Omar > It's been two years since that incident.✔\
    ➡Omar > I still can't sleep at night thinking of what the hacker might do to me.✔\
    ➡Omar > Why in the world does he hate me that much?✔\
    ➡END.✔\
    "
    ]