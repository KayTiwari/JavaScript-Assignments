var modal = document.getElementById('headphoneModal');
var btn = document.getElementById("headphoneBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal2 = document.getElementById('necklaceModal');
var btn = document.getElementById("necklaceBtn");
var span = document.getElementsByClassName("close1")[0];
btn.onclick = function() {
  modal2.style.display = "block";
}
span.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

var modal3 = document.getElementById('watchModal');
var btn = document.getElementById("watchBtn");
var span = document.getElementsByClassName("close2")[0];
btn.onclick = function() {
  modal3.style.display = "block";
}
span.onclick = function() {
  modal3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

var modal4 = document.getElementById('bikeModal');
var btn = document.getElementById("bikeBtn");
var span = document.getElementsByClassName("close3")[0];
btn.onclick = function() {
  modal4.style.display = "block";
}
span.onclick = function() {
  modal4.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}