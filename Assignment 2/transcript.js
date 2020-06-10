let transcript = {
    sample: [
        ['Person A','This is a sample sentence.✔ The color is  ✨19color:red"red"✨ in the subtext.✔'],
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

document.body.addEventListener("click",function(){isSkipped=true;})
isSkipped = false;
isStyling = false;


// Base Script from https://www.w3schools.com/howto/tryit.asp
function typeWriter(text, delay, position) {
    if (position < text.length) {
        transcript = document.getElementById("transcript");
        d = delay;  // delay before next recursive call
        p = position;  // current position
        c = text.charAt(p);  // current character being processed.
        if (c=='✔') {  // use at the end of the sentence. will delay longer (visible pause).
            d*=40;
            p+=1;
        } else if (c=='✨') {  // define style for a separate section. 
                            // syntax: ✨210color:blueSOMETEXT✨ 2 is the length of the next number, 10 is the length of the styling text.
            if (!isStyling) {
                isStyling = true;
                lenNum = parseInt(text.charAt(p+1),10);  // get length of the number
                lenTxt = parseInt(text.substr(p+2,lenNum),10);  // get length of the styling text
                s = text.substr(p+2+lenNum,lenTxt);  // style. syntax: "attribute:value attribute:value"
                tag = document.createElement("span");

                attrib = document.createAttribute("style");
                attrib.value = s;
                tag.setAttributeNode(attrib);

                transcript.appendChild(tag);

                p+=lenTxt+lenNum+2;
            } else {isStyling = false;p+=1;}
        }
        if (isStyling) {transcript = transcript.getElementsByTagName("span")[0];}
        transcript.innerHTML += text.charAt(p);
        if (isSkipped) {typeWriter(text, delay, ++p);}
        else {setTimeout(function(){typeWriter(text, delay, ++p)}, d);}
    } else {isSkipped = false;}
}


typeWriter(transcript["sample"][0][1],15,0)

