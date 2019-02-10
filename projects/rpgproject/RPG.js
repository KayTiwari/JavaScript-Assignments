var readline = require('readline-sync');
var isAlive = true;
var hasWon = false;
function Abe(weaponName='JUSTICE') {
    this.hp = 100;
    this.mattack = Math.floor(Math.random()*20)+50;
    this.shot = 666;
    this.weapons = [weaponName.toUppercase(), ];
    this.items = [];
}
function Chernobog() {
    this.name = 'Chernobog';
    this.hp = 70;
    this.attack = Math.floor(Math.random()*5)+5;
    this.def = 0;
}
function firstfight() {
    console.log('It\'s Vampire Chernobog');
    setTimeout(function(){console.log("\'They told me I'd find you here");}, 2000);
    var faction = readline.keyIn('What will you do? [M] Melee, [S] Shoot, [I] Inventory, [R] Run ', {limit: 'msir'})
    if (faction = 'm') {
        console.log(`You swing ${Abe.weaponName} with all your force`)
        Chernobog.hp -= Abe.mattack
        Abe.hp -= Chernobog.attack;
        console.log(`Hit for ${Abe.mattack} and took ${Chernobog.attack}`)
        setTimeout(function(){console.log(`Hit for ${Abe.mattack} and took ${Chernobog.attack}`);}, 2000);
        setTimeout(function(){console.log(`Chernobog's health is at ${Chernobog.hp}, You're at ${Abe.hp} `);}, 4000);
    } if (faction = 's') {
        console.log('You search your pockets for the LIBERTY')
        setTimeout(function(){console.log('...but don\'t find it');}, 2000);
        Abe.hp -= Chernobog.attack;
    } if (faction = 'i') {
        console.log(Abe.weapons + Abe.items);
        console.log('Nothing to use here!')
    } if (faction = 'r') {
        console.log('NO RUNNING!')
    }
    if (Abe.hp = 0) {
        isAlive = false;
    }
    if (Chernobog.hp = 0) {
        console.log('Chernobog slain!');
        freetime();
    }
}



if (isAlive === true) {
console.log('You wake up in a dark room.')
setTimeout(function(){console.log('You struggle to remember who you are and what happened.');}, 3000)
setTimeout(function(){console.log('You are the great vampire slayer, Abraham Lincoln.');}, 5000)
setTimeout(function(){console.log('...');}, 7000)
setTimeout(function(){console.log('CRASH!');}, 9000)
setTimeout(function(){console.log('Somethings coming');}, 10000)
setTimeout(function(){console.log('You look down and see your axe');}, 11000)
var weaponName = setTimeout(function(){readline.question('What is your axe\'s name? ');}, 12000)
setTimeout(function(){firstfight();}, 13000);
// freetime();
}
 if (isAlive === false) {
    console.log('You\'ve failed your mission, try again?');
}