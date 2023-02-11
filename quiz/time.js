// Set the number of seconds for the timer
let count = 180;

// Update the count down every 1 second
let counter = setInterval(timer, 1000);

// Display the result in the element with id="timer"
function timer() {
  count = count - 1;
  if (count <= 0) {
    clearInterval(counter);
    document.getElementById("timer").innerHTML = "Time's up!";
  } else {
    document.getElementById("timer").innerHTML = count + " seconds left";
  }
}