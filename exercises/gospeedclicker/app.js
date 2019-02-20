k = 0;
document.addEventListener('mouseup', clickcounter);
function clickcounter() {
    k+= 1;
setInterval(clickdisplay(k), 3000);
}
function clickdisplay(k) {
    document.getElementById('output').innerHTML = `You have clicked ${k} amount of times`;
    sessionStorage.setItem('value', k);
}
var timeLeft = 10;
    var elem = document.getElementById('timer');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        location.reload();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
var clicked = sessionStorage.getItem('value');
document.getElementById('output'). innerHTML = `You clicked ${clicked} amount of times in 10 seconds`
