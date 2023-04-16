let loginButton = document.querySelector(".nav-button");
let popUp = document.querySelector(".popUp");
loginButton.addEventListener("click", popUpBackground);
popUp.addEventListener("click", (event) => {
    if(event.target.classList.contains('popUp')) {
        popUpBackground()
    }
})

function popUpBackground() {
    popUp.classList.toggle("hidden")
}