let buttons = document.getElementsByClassName("arrow");

for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    
    element.addEventListener("click",  function(e){
        let button = e.target;

        let questionParent = button.closest(".question");
        if (questionParent) {
            if (questionParent.classList.contains("selected")) {
                questionParent.classList.remove("selected");
            }
            else {
                questionParent.classList.add("selected");
            }
        }
    })
}

