//polish version of the script/polska wersja skriptu

let score = 0;
let hasmouse = 0;

if (localStorage.getItem("score") !== null) {
    score = Number(localStorage.getItem("score"));
}

function addpoint() {
  score += 1;
}

function myscore() {
  alert("Ty masz " + score + " Punktow. Dobra Robota!")
}

function myrank() {
  if (score < 50) {
alert("Ty jestes nowym clickerem i masz miej nisz 50 punktow. Clickaj wiecej!")
  }
  if (score > 50) {
    alert("Dobra robota! Masz wiecej nisz 50 punktow i jestes lepszym clickerem.")
  }
  if (score > 100) {
    alert("Tak czymaj! Masz wiecej nisz 100 puntow! dostaj 500+ punktow aby dosac nastepnom range! rzycze ci szcenszcia!")
  }
  if (score > 500) {
    alert("Dobra robota! masz wiecej nisz 500+ punktow! niesamowite!")
}
  if (score > 1000) {
    alert("Jestes najlepszy! niesamowita robota. Jestes mistrzem! Spruboj zagrac razem z twojymi kolegami/kolerzankami.")
  }
}

function getmouse () {
  if (score < 99) {
    alert("Przepraszamy, ale masz za malo punktow aby to kupic. Klikaj wiecej!")
    return;
  }
  window.setInterval(function() {
score += 1;
}, 2000); 
  score -= 100;
  alert("Kupiles pomagajacego clickera. Dostaniesz 1 ciasteczko kazde 2/s.")
  hasmouse += 1;
}
//Function that fires when a helper clicker is bought.

 function savegame() {
   localStorage.setItem("score", score);
   alert("Twoje punkty zostaly zasejwowane.")
 }
 //function that fires when the savegame button is clicked.

  function clearscore() {
   localStorage.removeItem("score");
   alert("Twoja data zostala usunienta.")
 }