document.addEventListener("mousedown",function(){skip=true;})
document.addEventListener("mouseup",function(){skip=false;})
document.addEventListener("keydown",function(){skip=true;})
document.addEventListener("keyup",function(){skip=false;})

skip = false;
isStyling = false;


// Base Code from https://www.w3schools.com/howto/tryit.asp
// Special functions: pause, styling, clear
function typeWriter(text, delay, position) {
    if (position < text.length) {
        dialogue = document.getElementById("dialogue");
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
                tag.setAttributeNode(attrib);  // set style of span tag

                dialogue.appendChild(tag);

                p+=lenTxt+lenNum+2;
            } else {isStyling = false;p++;}
        } else if (c=='❌') {  // clear the dialogue
            dialogue.innerHTML = "";
            p++;
        } else if (c=='➡') {  // newline
            dialogue.innerHTML += "<br>";
            p++;
        }
        if (isStyling) {dialogue = dialogue.getElementsByTagName("span")[dialogue.getElementsByTagName("span").length-1];}
        dialogue.innerHTML += text.charAt(p);
        if (skip) {typeWriter(text, delay, ++p);}
        else {setTimeout(function(){typeWriter(text, delay, ++p)}, d);}
    } else {skip = false;}
}


