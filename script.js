const display = document.getElementById("display")
function clearDisplay () {
  display.value = ""
}

clearDisplay()

function appendToDisplay (elem) {
  display.value += elem
}

appendToDisplay()

function Calculate () {
  try {
    display.value  = eval(display.valu)
  } catch {
    display.value  = "Error!"
  }
}

Calculate()

function deleteInput () {
  display.value = display.value.toString().slice(0, -1)
}

deleteInput()
