var readline = require('readline-sync');
var isAlive = true;
var hasWon = false;

var Abe = {
    hp: 100,
    mattack: 50,
    shot: 666,
    axe: 'Honesty',
    items: []
}
var Chernobog = {
    name: 'Chernobog',
    hp: 70,
    attack: Math.floor(Math.random()*5)+5,
    def: 0,
}
function firstfight() {
    console.log('It\'s Vampire Chernobog!');
    console.log("\"They told me I'd find you here\"");
    ffirstfight();
    function ffirstfight() {
    var faction = readline.keyIn('What will you do? [M] Melee, [S] Shoot, [I] Inventory, [R] Run ', {limit: 'msir'})
    if (faction = 'm') {
        console.log(`You swing ${Abe.axe} with all your force`)
        var battlehit = Abe.mattack + Math.floor(Math.random()*30);
        console.log(battlehit)
        Chernobog.hp -= battlehit;
        Abe.hp -= Chernobog.attack;
        console.log(`Hit for ${Abe.mattack} and took ${Chernobog.attack}`)`     `   
        setTimeout(function(){console.log(`Hit for ${battlehit} and took ${Chernobog.attack}`);}, 0000);
        setTimeout(function(){console.log(`Chernobog's health is at ${Chernobog.hp}, You're at ${Abe.hp} `);}, 0000);
        ffirstfight();
    } else if (faction = 's') {
        console.log('You search your pockets for the LIBERTY')
        setTimeout(function(){console.log('...but don\'t find it');}, 2000);
        Abe.hp -= Chernobog.attack;
        ffirstfight();
    } else if (faction = 'i') {
        console.log(Abe.weapons + Abe.items);
        console.log('Nothing to use here!')
        ffirstfight();
    } else if (faction = 'r') {
        console.log('NO RUNNING!')
        ffirstfight();
    }
    if (Abe.hp = 0) {
        isAlive = false;
        death();
    }
    if (Chernobog.hp = 0) {
        console.log('Chernobog slain!');
        freetime();
    }
}
}



if (isAlive === true) {
console.log('You wake up in a dark room.')
setTimeout(function(){console.log('You struggle to remember who you are and what happened.');}, 0000)
setTimeout(function(){console.log('You are the great vampire slayer, Abraham Lincoln.');}, 0000)
setTimeout(function(){console.log('...');}, 0000)
setTimeout(function(){console.log('CRASH!');}, 0000)
setTimeout(function(){console.log('Somethings coming');}, 0000)
setTimeout(function(){console.log('You look down and see your axe');}, 000)
setTimeout(function(){Abe.axe = readline.question('What is your axe\'s name? ');}, 000)}
setTimeout(function(){firstfight();}, 6000);
// freetime()

// function death() {
//     console.log('You\'ve failed your mission, try again?');
// }