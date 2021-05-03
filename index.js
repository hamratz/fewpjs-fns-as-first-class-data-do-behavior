/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


// CLICK(event listener) submit = 2 functions(greet(), displayMessage())
//  greet()
//    24 hour time, format HH:MM
//    earlier > 12pm = "Good Morning"
//    between < 12pm > 5pm = "Good Afternoon"
//    later < 5pm = "Good Evening"
//     return value = string
//        convert string to number
//          split()
//          parseInt()
//  displayMessage()
//    one argument = string
      // update text inside #greeting Node
      // doesnt return anything


// soloution has this first, not sure why
function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}


function greet(timeStr) {
  const hour = parseInt(timeStr, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
}

