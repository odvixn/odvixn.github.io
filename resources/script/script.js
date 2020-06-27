// cancelled due to lack of time

// let hash = location.hash.replace('#','');
// let options = [
//     // theme
// ]

// // read options
// if (hash!="") {options=hash.split('+');};

// I did not want to use JavaScript for simple redirection but I don't think I can fix css in time.
let gLink = [
    'projects/project_1/index.html',
    'projects/project_2/index.html',
    'projects/project_3/index.html',
    'projects/project_4/index.html'
];

let gDoc = [
    'https://github.com/odvixn/odvixn.github.io/blob/master/projects/project_1/readme.md',
    'https://github.com/odvixn/odvixn.github.io/blob/master/projects/project_2/README.md',
    'https://github.com/odvixn/odvixn.github.io/blob/master/projects/project_3/README.md',
    'https://github.com/odvixn/odvixn.github.io/blob/master/projects/project_4/README.md'
]

let gGit = [
    'https://github.com/odvixn/odvixn.github.io/blob/master/projects/project_1',
    'https://github.com/odvixn/odvixn.github.io/blob/master/projects/project_2',
    'https://github.com/odvixn/odvixn.github.io/blob/master/projects/project_3',
    'https://github.com/odvixn/odvixn.github.io/blob/master/projects/project_4'
]

document.getElementsByClassName('slide_overlay')[0].style.visibility = "unset";
let radios = document.getElementsByClassName('c__a');

function getProj() {
    for (i=0;i<radios.length;i++) {
        if (radios[i].checked) {return radios.length-i-1}
    }
}

// Idea from https://taliacotton.com/
document.onmousemove = function(e){
    if (window.innerWidth < 650) {return;}
    coords = document.getElementById("coords");
    elem = getInnermostHovered().outerHTML.toString()
    coords.innerText = elem.substr(0,elem.indexOf(">")+1);

    coords.style.display = "block";
    coords.style.top = e.clientY + 12 + "px";
    coords.style.left = e.clientX + 10 + "px";
}

// Get element under mouse pointer
// https://stackoverflow.com/questions/24538450
function getInnermostHovered() {
    var n = document.querySelector(":hover");
    var nn;
    while (n) {
        nn = n;
        n = nn.querySelector(":hover");
    }
    return nn;
}