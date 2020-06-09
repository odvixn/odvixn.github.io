
function addComicBox(choice) {
    let source = ""
    if (choice=="apple") {
        source = "apple.jpg"
    }
    else {
        source = "orange.png"
    }
    document.body.innerHTML += '<div class="comic-box"><img src=' + source +'><p>Scene 4</p></div>';
}
