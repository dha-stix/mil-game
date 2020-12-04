//REPRESENT ELEMENTS AS VARIABLES
const button = document.querySelector(".checkBtn")
const inputValue = document.querySelector(".input")
const emptyAlert = document.querySelector(".alert-empty")
const rangeErrorAlert = document.querySelector(".alert-range")
const hotAlert = document.querySelector(".alert-info")
const coldAlert = document.querySelector(".alert-cold")
const normalAlert = document.querySelector(".alert-normal")

//FUNCTIONS
const checkTemperature = (userGuess, computerGuess) => {
    if(userGuess > computerGuess) {
        hotAlert.classList.replace("alert", "show")
    }
    else if(userGuess === computerGuess) {
       normalAlert.classList.replace("alert", "show")
    }
    else {
        coldAlert.classList.replace("alert", "show")
    }
}


//EVENTS
button.addEventListener("click", (e)=> {
    e.preventDefault()
    const computerGuess =  Math.floor(Math.random() * 100)
   if(!inputValue.value) {
       emptyAlert.classList.replace("alert", "show")
   }
   else if(inputValue.value < 0  || inputValue.value > 100 ) {
    rangeErrorAlert.classList.replace("alert", "show")
   }
   else {
    checkTemperature(inputValue.value, computerGuess)
   }
   inputValue.value = null
})


    



