
document.getElementById('header').innerHTML = `<h1 class='header'>JavaScript Made This!!!</h1>`
document.getElementById('header').innerHTML += `<h2 class='header'><div><span class='name'>Abhi </span>made this javascript!</h2>`
document.getElementsByClassName("message left")[0].innerHTML = "So what music are you listening to?";
document.getElementsByClassName("message left")[1].innerHTML = "Oh, I love David Bowie!";
document.getElementsByClassName('message right')[1].innerHTML = 'Looks like we a lot in common then ;)';
document.getElementsByClassName('message right')[0].innerHTML = 'I\'m listening to some David Bowie right now.';
document.getElementById('clear-button').addEventListener('click', clearInput);
function clearInput() {
    console.dir();
    document.getElementsByClassName("messages")[0].innerHTML = "";
};
var x = 0;
function addMessage() {
    x++;
    var userMsg = document.getElementById('userInput');
    if (x % 2 == 0) {
    var messages =  document.getElementsByClassName("message right");
    messages[0].innerHTML = messages[1].innerHTML;
    document.getElementsByClassName('message right')[1].innerHTML = userMsg.value;
    }
    if (x % 2 == 1) {
        var messages =  document.getElementsByClassName("message left");
        messages[0].innerHTML = messages[1].innerHTML;
        document.getElementsByClassName('left')[1].innerHTML = userMsg.value;
    }
};
document.getElementById("sendButton").addEventListener('click', addMessage);
function colorChange() {
    if (document.getElementById('theme-drop-down').value === 'theme-one') {
        document.getElementsByClassName('left')[0].style.backgroundColor = 'burlywood';
        document.getElementsByClassName('left')[1].style.backgroundColor = 'burlywood';
        document.getElementsByClassName('right')[0].style.backgroundColor = 'lightblue';
        document.getElementsByClassName('right')[1].style.backgroundColor = 'lightblue';
        }
    if (document.getElementById('theme-drop-down').value === 'theme-two') {
        document.getElementsByClassName('left')[0].style.backgroundColor = '#777';
        document.getElementsByClassName('left')[1].style.backgroundColor = '#777';
        document.getElementsByClassName('right')[0].style.backgroundColor = 'red';
        document.getElementsByClassName('right')[1].style.backgroundColor = 'red';
    } 
    if (document.getElementById('theme-drop-down').value === 'theme-three') {
    document.getElementsByClassName('left')[0].style.backgroundColor = '#73FF96';
    document.getElementsByClassName('left')[1].style.backgroundColor = '#73FF96';
    document.getElementsByClassName('right')[0].style.backgroundColor = '#FF5D30';
    document.getElementsByClassName('right')[1].style.backgroundColor = '#FF5D30';
    }
};
document.getElementById('theme-drop-down').addEventListener('change', colorChange);


