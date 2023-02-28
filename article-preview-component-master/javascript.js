function setDisplay(display) {
    document.getElementById("social_media").style.display = display;
}

document.getElementById("show_tooltip").addEventListener("click", function(e) {
    if (document.getElementById("show_tooltip").classList.contains('clicked')) {
        setDisplay("none");
        document.getElementById("show_tooltip").classList.remove("clicked");
    } else {
        setDisplay("flex");
        document.getElementById("show_tooltip").classList.add("clicked");
    }
});

document.getElementById("hide_tooltip").addEventListener("click", function(e) {
    setDisplay("none");
    document.getElementById("show_tooltip").classList.remove("clicked");
});
