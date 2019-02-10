var readline = require('readline-sync');

readline.question("what is your name? ")
// (npm -i readline-sync)

var isAlive = true;
var hasWon = false;

//character creation
function Hero(name, hp) {
    this.name = name;
    this.weapons = []; //pre-defined
    this.attack = Math.floor(Math.random()*35)+11;
    this.hp = hp;
    this.items = [];
    this.isAlive = true;
    this.xp = xp;
    this.fivedollarbills = 0;
}
var heroman = new Hero('Heroman', 100, Math.floor(Math.random()*10)+10)
function Enemy (name, attack, hp) {
    this.name = name;
    this.attack = attack;
    this.hp = hp;
}

//intro console.logs
console.log('hello, it is a game')
while(isAlive && !hasWon){
    var action = readline.keyIn('What would you like to do? [w] Walk, [I] Inventory, [q] Quit Game ', {limit: 'wiq'})
    if(action === 'w') {
        walk();
    } else if (action === 'i') {

    } else if (action === 'q') {
        isAlive = false;
    }
}

function walk () {
    var random = Math.floor(Math.random()*3);
    if (random === 1) {
        encounter();
    } else {
        console.log('You passed a pretty tree')
    }
}

function encounter() {
    readline.keyIn("Would you like to [r] Run or [f] Fight ", {limit: 'rf'})
    if (action === 'r') {
        bolt();
    } else {
        while (enemy.hp > 0 && )
    }
}

function fight() {
    var random = Math.floor(Math.random()*5)
    if(random === 1) {
        miss();
    } else {
        enemySelect();
        heroman.hp -= enemy.hp   
        enemy.hp - heroman.attack
        console.log(`Hey ${heroman.name} your hp is now ${heroman.hp}`);
        console.log(`You hit ${enemy.name}, remaining health is ${enemy.hp}`);
    }
}

function enemySelect (){
    var random = Math.floor(Math.random()*enemies.length)
    return enemies[random]
}