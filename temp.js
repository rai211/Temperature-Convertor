const celsius = document.querySelector("#celsius");
 fahrenheit = document.querySelector("#fahrenheit");

//set focus to the celsius input field when the page loads
window.addEventListener("load", () => celsius.focus());


//convert celsius to fahrenheit when celsius value changes

celsius.addEventListener("input", () =>{
    fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
})