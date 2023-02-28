const tooltip = document.getElementById("social_media");
const showButton = document.getElementById("show_tooltip");
const hideButton = document.getElementById("hide_tooltip");

function setDisplay(display) {
    tooltip.style.display = display;
}

function unclickbutton() {
    setDisplay("none");
    showButton.classList.remove("clicked");
}

function clickbutton() {
    setDisplay("flex");
    showButton.classList.add("clicked");
}

function isbuttonclicked() {
    return showButton.classList.contains('clicked');
}

showButton.addEventListener("click", function(e) {
    if (isbuttonclicked()) {
        unclickbutton();
    } else {
        clickbutton();
    }
});

hideButton.addEventListener("click", function(e) {
    unclickbutton();
});
