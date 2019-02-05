document.getElementById('button').addEventListener('click', submit);
function submit() {
    var goomba = document.getElementById('goombaform').value * 5;
    var bobomb = document.getElementById('bobombform').value * 7;
    var cheep = document.getElementById('cheepform').value * 11;
    sum = +goomba + +bobomb + +cheep;
    console.log(sum);
    if (sum === 0) {
        document.getElementById('output').textContent = `Get to work!`
    } else {
    document.getElementById('output').textContent = `You won ${sum} coins!`
}
}