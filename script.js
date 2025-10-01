const display = document.getElementById('display')
function clearDisplay () {
  display.value = ''
}

clearDisplay()

function appendToDisplay (elem) {
  display.value += elem
}

appendToDisplay()

function deleteInput () {
  display.value = display.value.toString().slice(0, -1)
}

deleteInput()

function Calculate () {
 let expr = display.value
  let result = 0

  if (expr.includes('+')) {
    let parts = expr.split('+')
    result = Number(parts[0]) + Number(parts[1])
  } else if (expr.includes('-')) {
    let parts = expr.split('-')
    result = Number(parts[0]) - Number(parts[1])
  } else if (expr.includes('*')) {
    let parts = expr.split('*')
    result = Number(parts[0]) * Number(parts[1])
  } else if (expr.includes('/')) {
    let parts = expr.split('/')
    if (Number(parts[1]) === 0) {
      display.value = "Error"
      return;
    }
    result = Number(parts[0]) / Number(parts[1])
  } 
  display.value = result
}

Calculate()

