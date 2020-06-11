document.addEventListener("mousedown",function(){skip=true;})
document.addEventListener("mouseup",function(){skip=false;})
document.addEventListener("keydown",function(){skip=true;})
document.addEventListener("keyup",function(){skip=false;})

let skip = false;
let isStyling = false;
let isOption = false;


// https://stackoverflow.com/questions/18614301
function updateScroll(){
    var element = document.getElementById("dialogue");
    element.scrollTop = element.scrollHeight;
}

// Base Code from https://www.w3schools.com/howto/tryit.asp
// Special functions: pause, styling, clear, etc.
// Need to disable click or interaction while the script is being typed! While paused, moving onto the next page breaks the page.
function typeWriter(text, delay, position) {
    if (position < text.length) {
        dialogue = document.getElementById("dialogue");
        d = delay;  // delay before next recursive call
        p = position;  // current position
        c = text.charAt(p);  // current character being processed.
        if (c=='✔') {  // use at the end of the sentence. will delay longer (visible pause).
            d=800;
            p+=1;
        } else if (c=='@') {  // mid-sentence pause
            d=100;
            p+=1;
        } else if (c=='✨') {  // define style for a separate section.
                            // syntax: ✨210color:blueSOMETEXT✨ 2 is the length of the next number, 10 is the length of the styling text.
            if (!isStyling) {
                isStyling = true;
                lenNum = parseInt(text.charAt(p+1),10);  // get length of the number
                lenTxt = parseInt(text.substr(p+2,lenNum),10);  // get length of the styling text
                s = text.substr(p+2+lenNum,lenTxt);  // style. syntax: "attribute:value;attribute:value;"
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
        } else if (c=='➰') {  // add options. used styling format
            if (!isOption) {
                isOption = true;
                lenNum = parseInt(text.charAt(p+1),10);  // get length of the number
                lenTxt = parseInt(text.substr(p+2,lenNum),10);  // get length of the Option text
                o = text.substr(p+2+lenNum,lenTxt);  // Option.
                tag = document.createElement("span");

                attrib1 = document.createAttribute("onclick");
                attrib1.value = "transition('" + o + "')";
                tag.setAttributeNode(attrib1);  // set onclick of span tag

                attrib2 = document.createAttribute("class");
                attrib2.value = "option";
                tag.setAttributeNode(attrib2);  // set class of span tag

                dialogue.appendChild(tag);

                p+=lenTxt+lenNum+2;
            } else {isOption = false;p++;}
        } else if (c=='$') {  // When game Ends
            attrib1 = document.createAttribute("onclick");
            attrib1.value = "window.history.back()";
            attrib2 = document.createAttribute("onclick");
            attrib2.value = "location.reload()";
            attrib3_1 = document.createAttribute("class");
            attrib3_1.value = "option";
            attrib4_1 = document.createAttribute("style");
            attrib4_1.value = "color:tomato";
            attrib3_2 = document.createAttribute("class");
            attrib3_2.value = "option";
            attrib4_2 = document.createAttribute("style");
            attrib4_2.value = "color:tomato";

            tag1 = document.createElement("span");  // "Return" feature
            tag2 = document.createElement("span");  // "Refresh" feature

            tag1.setAttributeNode(attrib1);
            tag1.setAttributeNode(attrib3_1);
            tag1.setAttributeNode(attrib4_1);

            tag2.setAttributeNode(attrib2);
            tag2.setAttributeNode(attrib3_2);
            tag2.setAttributeNode(attrib4_2);
            
            tag1.innerText = " Return ";
            tag2.innerText = " Replay";
            
            dialogue.innerHTML += "END >";
            dialogue.appendChild(tag1);
            dialogue.innerHTML += " / ";
            dialogue.appendChild(tag2);
            p++;
        }

        if (isStyling||isOption) {dialogue = dialogue.getElementsByTagName("span")[dialogue.getElementsByTagName("span").length-1];}
        dialogue.innerHTML += text.charAt(p);
        updateScroll();
        if (skip) {typeWriter(text, delay, ++p);}
        else {setTimeout(function(){typeWriter(text, delay, ++p)}, d);}
    } else {skip = false;}
}
