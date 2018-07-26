const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {

//  const alphabet = ['a', 'b', 'c'];

// Keep track of index outside of the event handler.
let index = 0;

var cuerpo = document.body.getElementsByClassName('body')
cuerpo.addEventListener('keyDown', function(onKeyDownHandler(), alert("Yes")))

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = e.key;

  if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
  // your code here
}
