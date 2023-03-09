let rating = 0;

function showDiv() {
    if (rating == 0) {
        alert("Please select a rating");
        return;
    }
    
    document.getElementById('thank-you-card').style.display = "grid";
    document.getElementById('rateUs').style.display = "none";
    document.getElementById('selected').innerHTML = rating;
}

let buttons = document.getElementsByClassName("number");
for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];

    element.addEventListener("click" , function(e){
        let button = e.target;

        let clickedBefore = document.getElementsByClassName("selected")[0];
        if (clickedBefore) {
            clickedBefore.classList.remove("selected");
        }
        
        button.classList.add("selected");

        rating = parseInt(button.dataset.rating);
    })
    
}

