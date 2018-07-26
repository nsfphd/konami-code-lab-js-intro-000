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

var cuerpo = document.getElementsByTagName('body')
cuerpo.addEventListener('keydown', function(onKeyDownHandler(e)))

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
