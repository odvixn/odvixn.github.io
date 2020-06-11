const saturation = 128;
let hue = 0;
let rainbowObj; // one element at a time
let clrOrg; // original color

function rainbowOn(obj) { // when the interaction starts, predict colors using makeColor() every 0.1 second
    clrOrg = obj.style.color; // stores the original color so it can be recovered later
    rainbowObj = setInterval(function(){obj.style.color=makeColor()},100);  // used setInterval instead of while loop for simplicity
}

function rainbowOff(obj) { // when the interaction stops, reset.
    clearInterval(rainbowObj);
    obj.style.color = clrOrg;
}

function makeColor() { // predicts color in a rainbow sequence
    if (saturation == 0) {r = 255; g = 255; b = 255;} 
    else {
        t1 = 255; 
        t2 = 255 - saturation; 
        t3 = hue % 60; 
        t3 = (t1 - t2) * t3 / 60;
        if (hue < 60) {r = t1; b = t2; g = t2 + t3;} 
        else if (hue < 120) {g = t1; b = t2; r = t1 - t3;} 
        else if (hue < 180) {g = t1; r = t2; b = t2 + t3;} 
        else if (hue < 240) {b = t1; r = t2; g = t1 - t3;} 
        else if (hue < 300) {b = t1; g = t2; r = t2 + t3;} 
        else if (hue < 360) {r = t1; g = t2; b = t1 - t3;} 
        else {r = 0; g = 0; b = 0;} 
    }
    r = Math.floor(r).toString(16); // conversion for the style.color is of type String
    g = Math.floor(g).toString(16); 
    b = Math.floor(b).toString(16); 
    if (r.length == 1) r = "0" + r; // to fit the format #RRGGBB
    if (g.length == 1) g = "0" + g; 
    if (b.length == 1) b = "0" + b
    hue = hue + 50; 
    if (hue >= 360) hue = 0;
    return '#' + r + g + b; 
}
