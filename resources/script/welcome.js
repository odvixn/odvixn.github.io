// JavaScript Loaded, replace HTML content

    let notice = document.getElementsByClassName('wc-notice')[0];
    notice.innerText = "Do you want to customize your experience?";

    let wrapper = document.getElementsByClassName('wc-btn-wrapper-nojs')[0];
    wrapper.className = wrapper.className.replace("-nojs", "");
    wrapper.innerHTML = `
    <div class="wc-btn wc-yes" onclick="window.alert('Sorry! This feature is currently unavailable!');">
        Yes
    </div>
    <div class="wc-btn" onclick="window.location.href='main.html'">
        <div class="wc-no">No</div>
    </div>
    `;


// When the window looses focus, change tab title

    window.onblur = function() { document.title = "(｡•́︿•̀｡) Come back!" };
    window.onfocus = function() { document.title = "Welcome!" };


// Display mouse coordination
// Code from https://taliacotton.com/

    document.onmousemove = function(e){
        coords = document.getElementById("coords");
        coords.style.display = "block";
        coords.innerHTML = "(X:"+e.clientX+",Y:"+e.clientY+")";
        coords.style.top = e.clientY + 10 + "px";
        coords.style.left = e.clientX + 10 + "px";
    }

