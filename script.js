let score = 0;
let hasmouse = 0;

if (localStorage.getItem("score") !== null) {
    score = Number(localStorage.getItem("score"));
}

function addpoint() {
  score += 1;
}

function myscore() {
  alert("Your current score is: " + score + ". Good job!")
}

function myrank() {
  if (score < 50) {
alert("you are a newbie clicker and have fewer than 50 clicks! come on, you can do this!")
  }
  if (score > 50) {
    alert("Woohoo! you have more than 50 clicks. Your rank is better clicker.")
  }
  if (score > 100) {
    alert("Keep it up you have more than 100 clicks! your rank is good clicker. Get 500+ clicks for the next rank! wish you good luck!")
  }
  if (score > 500) {
    alert("Great job! you have over 500+ clicks! Amazing!")
}
  if (score > 1000) {
    alert("You are the best! Amazing job. You have the rank MASTER CLICKER! Try and compete with your friends!")
  }
}

function getmouse () {
  if (score < 99) {
    alert("Were sorry, but you do not have enough points to buy this. Keep Clicking!")
    return;
  }
  window.setInterval(function() {
score += 1;
}, 2000); 
  score -= 100;
  alert("You have bought a clicker successfully! You will get a cookie every 2/s.")
  hasmouse += 1;
}
//Function that fires when a helper clicker is bought.

 function savegame() {
   localStorage.setItem("score", score);
   alert("Score has been saved successfully!")
 }
 //function that fires when the savegame button is clicked.

 function clearscore() {
   localStorage.removeItem("score");
   alert("All your data has been cleared successfully!")
 }
