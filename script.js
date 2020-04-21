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

const jordanModeButton = document.querySelector("#jordanMode")

jordanModeButton.addEventListener("click", function (){
    const formElement = document.querySelector("form")
    formElement.classList.toggle("jordan")
})

document.querySelector("#submitButton").addEventListener("click", function (){
    // get values of name and email input
    const nameInput = document.querySelector("#name-input")
    const emailInput = document.querySelector("#email-input")
    // console.log("name input", nameInput)
    // console.log("email input", emailInput)
const nameValue = nameInput.value
const emailValue = emailInput.value
console.log("typed into name", nameValue)
console.log("typed into email", emailValue)
    // print the values to the DOM
document.querySelector("#output-container").innerHTML+= `<section>
<h3>${nameValue}</h3>
<p>${emailValue}</p>
</section>` 
})

// Practice: Mirror, Mirror in the Code
// The learning objective for this exercise is to listen for the keyup event, and update the DOM when it is broadcast.
// Create an input field in your DOM. Give it an id of message.
// Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// Give each article a different border color.
// Write an event listener that listens for the keyup event on the input field.
const articleTrickField = document.querySelector("#message")

articleTrickField.addEventListener("keyup", function () {
    const articleTrick = articleTrickField.value;
    document.querySelector("#article1").textContent = articleTrick;
    document.querySelector("#article2").textContent = articleTrick;

})
// The event handler function should update the textContent property of both sections.
