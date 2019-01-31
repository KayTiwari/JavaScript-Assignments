document.getElementById('square').addEventListener('mouseenter', onHover);
function onHover(e) {
    document.getElementById('square').style.backgroundColor = 'blue';
}
document.getElementById('square').addEventListener('mouseleave', onLeave);
function onLeave(e) {
    document.getElementById('square').style.backgroundColor = 'black';
}
document.getElementById('square').addEventListener('mousedown', onHold);
function onHold(e) {
    document.getElementById('square').style.backgroundColor = 'red';
}
document.getElementById('square').addEventListener('mouseup', onRelease);
function onRelease(e) {
    document.getElementById('square').style.backgroundColor = 'yellow';
}
document.getElementById('square').addEventListener('dblclick', onDouble);
function onDouble(e){
    document.getElementById('square').style.backgroundColor = 'green';
}
document.addEventListener('wheel', onScroll);
function onScroll(e) {
    document.getElementById('square').style.backgroundColor = 'orange';
}
document.addEventListener('keydown', logKey);
function logKey(event) {
    var x = event.keyCode;
    console.log(x);
    if (x === 82) {
        document.getElementById('square').style.backgroundColor = 'red';
    }    if (x === 66) {
        document.getElementById('square').style.backgroundColor = 'blue';
    }    if (x === 89) {
        document.getElementById('square').style.backgroundColor = 'yellow';
    }    if (x === 71) {
        document.getElementById('square').style.backgroundColor = 'green';
    }    if (x === 79) {
        document.getElementById('square').style.backgroundColor = 'orange';
}
}
