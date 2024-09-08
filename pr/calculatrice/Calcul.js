function clearScreen() {
  document.getElementById("result").value = "";
}
function display(value) {
  document.getElementById("result").value += value;
}
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}
// function clearScreen() {
//   document.getElementById("result").value = "";
// }
// function display(value) {
//   document.getElementById("result").value += value;
// }
// function calculate() {
//   var p = document.getElementById("result").value;
//   var q = eval(p);
//   document.getElementById("result").value = q;
// }







/*  menu c */
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))