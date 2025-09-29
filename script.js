const display = document.getElementById('display');
const operator = document.getElementsByClassName('button');

function clearDisplay() {
  display.value = '';
}

function appendToDisplay(elem) {
  display.value += elem;
}

function Calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error!';
  }
}

function deleteInput() {
  display.value =display.value.toString().slice(0, -1);
}
