document.addEventListener("mousedown",function(){skip=true;})
document.addEventListener("mouseup",function(){skip=false;})
document.addEventListener("keydown",function(){skip=true;})
document.addEventListener("keyup",function(){skip=false;})

let skip = false;
let isStyling = false;
let isOption = false;
var x = "";
// $(document).ready(function(){
//   $(".bg").click(function(){
//     $("#Menu").show();
//   });
// });

// Base Code from https://www.w3schools.com/howto/tryit.asp
// Special functions: pause, styling, clear
// Need to disable click or interaction while the script is being typed! While paused, moving onto the next page breaks the page.
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
        }
        if (isStyling||isOption) {dialogue = dialogue.getElementsByTagName("span")[dialogue.getElementsByTagName("span").length-1];}
        dialogue.innerHTML += text.charAt(p);
        // console.log(dialogue.innerHTML.length);
        // x = dialogue.innerHTML;
        // console.log(x.length - 1);

        if (skip) {typeWriter(text, delay, ++p);}
        else {setTimeout(function(){typeWriter(text, delay, ++p)}, d);}
    } else {skip = false;}
    // console.log("Hi");
    // console.log(dialogue.innerHTML);
    // console.log(dialogue.innerHTML.charAt(117));
    // console.log(dialogue.innerHTML.charAt(116));
    // console.log(dialogue.innerHTML.charAt(115));
    // console.log(dialogue.innerHTML.charAt(114));
    if(dialogue.innerHTML.charAt(115)== "N" &&dialogue.innerHTML.charAt(116) =="D"){
    console.log("hello");
    $("#Menu").show();
    }
    else if(dialogue.innerHTML.charAt(225)== "N" &&dialogue.innerHTML.charAt(226) =="D"){
    console.log("hello");
    $("#Menu").show();
    }
    else if(dialogue.innerHTML.charAt(223)== "N" &&dialogue.innerHTML.charAt(224) =="D"){
    console.log("hello");
    $("#Menu").show();
    }
    else if(dialogue.innerHTML.charAt(185)== "N" &&dialogue.innerHTML.charAt(186) =="D"){
    console.log("hello");
    $("#Menu").show();
    }
    else if(dialogue.innerHTML.charAt(211)== "N" &&dialogue.innerHTML.charAt(212) =="D"){
    console.log("hello");
    $("#Menu").show();
    }
    else if(dialogue.innerHTML.charAt(221)== "N" &&dialogue.innerHTML.charAt(222) =="D"){
    console.log("hello");
    $("#Menu").show();
    }
}
