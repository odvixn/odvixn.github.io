let sections = [['by','#bf80dc'],
                ['takepart','#7f9ee6'],
                ['background','#7fe492'],
                ['plot','#ffec8f'],
                ['main','#f78d97']];

let highlight;
let highlight_class;
let prev = document.getElementById("nav-"+sections[1][0]);

function trackScroll(elem) {
    x = elem.getBoundingClientRect();
    a = parseFloat(x['height']);
    b = parseFloat(x['y']);
    return (-a/2<b && b<a/5*3);
}

function sectionHighlight() {
    for (i=0;i<sections.length;i++) {
        elem = document.getElementById(sections[i][0]);
        trigger = trackScroll(elem);
        if (trigger) {
            highlight = document.getElementById("nav-"+sections[i][0]);
            highlight_class = sections[i][0];
        }
    }
    prev.className = "";
    highlight.className = highlight_class;
    prev = highlight;
}

// --- below solution from https://gomakethings.com/detecting-when-a-visitor-has-stopped-scrolling-with-vanilla-javascript/ --- //

// Setup isScrolling variable
let isScrolling;

// Listen for scroll events
// In current environment, works on navigation bar, touch, scroll bar, mouse scroll, keyboard scroll(space,PgUp/PgDown, Home/End), etc.
window.addEventListener('scroll', function ( event ) {

	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

		sectionHighlight();

	}, 66);

}, false);

sectionHighlight(); // initial highlighting

//--depreciated--//
// document.addEventListener("mouseup",sectionHighlight);
// document.addEventListener("keyup",sectionHighlight);
// let interval = setInterval(sectionHighlight,100);