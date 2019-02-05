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
    document.getElementById('output').innerHTML = `<img class='coin' src=\"https://orig00.deviantart.net/465d/f/2017/171/9/f/mario_coin_1985_gif_by_augustohirakodias-dbdezac.gif" width=\"50px\" height=\"50px\"> You won ${sum} coins!  <img class='coin' src=\"https://orig00.deviantart.net/465d/f/2017/171/9/f/mario_coin_1985_gif_by_augustohirakodias-dbdezac.gif" width=\"50px\" height=\"50px\">`
}
}