const darkModeButton = document.querySelector("#dark-mode")

darkModeButton.addEventListener("click", function(){
    //Select the form element
    const formElement = document.querySelector("form");
    // add a class of .dark-mode to the form
    formElement.classList.toggle("darkmode")
})

// Add a button that says "Jordan Mode"
// In your JavaScript file, write an click event listener that increases the font size on your form to 3 em when you click it so Jordan can see it
// When you click the button again, the font should go back to a normal size

const jordanModeButton = document.querySelector("#jordanMode");

jordanModeButton.addEventListener("click", function (){
    const formElement = document.querySelector("form");
    formElement.classList.toggle("jordan")
})