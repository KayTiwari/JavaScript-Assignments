var readline = require('readline-sync');
var isAlive = true;
vamps = 6;
ammo = 3;
rest = 3;
var hasWon = false;
function beginning() {
    isAlive = true;
    if (isAlive === true) {
    console.log('You wake up in a dark room.')
    setTimeout(function(){console.log('You struggle to remember who you are and what happened.');}, 0000)
    setTimeout(function(){console.log('You are the great vampire slayer, Abraham Lincoln.');}, 0000)
    setTimeout(function(){console.log('...');}, 0000)
    setTimeout(function(){console.log('CRASH!');}, 0000)
    setTimeout(function(){console.log('Somethings coming');}, 0000)
    setTimeout(function(){console.log('You look down and see your axe');}, 0000)
    setTimeout(function(){Abe.axe = readline.question('What is your axe\'s name? ');}, 0000)}
    setTimeout(function(){firstfight();}, 3000);
}
if (vamps === 1) {
    finalfight();
}
if (vamps === 0) {
    hasWon = true;
    endgame();
}
beginning();
enemies = [Abaddon, Reaper, Osiris, Kanye];
var Abe = {
    hp: 100,
    mattack: 50,
    shot: 666,
    axe: 'Honesty',
    items: [],
    potions: 0,
    fivedollarbills: 0
}
var Chernobog = {
    name: 'Chernobog',
    hp: 70,
    attack: 10
}
var Dracula = {
    name: 'Dracula',
    hp: 300,
    attack: 30,
    lifesteal: 30
}
function Enemy(name, hp, attack, lifesteal, description){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.lifesteal = lifesteal;
    this.description = function(){
        console.log(description);
    }
}
function firstfight() {
    console.log('It\'s Vampire Chernobog!');
    console.log("\"I knew I'd find you here.. time to die\"");
    ffight();
}
    function ffight() {
        while (Chernobog.hp > 0) {
        var faction = readline.keyIn('What will you do? [M] Melee, [S] Shoot, [I] Inventory, [R] Run ', {limit: 'msir'})
    if (Abe.hp <= 0) {
        isAlive = false;
        death();
    } else if (faction === 'm') {
        console.log(`You swing ${Abe.axe} with all your force`)
        var battlehit = Abe.mattack + Math.floor(Math.random()*30);
        var enemyhit = Chernobog.attack + Math.floor(Math.random()*5);
        Chernobog.hp -= battlehit;
        Abe.hp -= enemyhit;
        console.log(`Hit for ${battlehit} and took ${enemyhit}`)       
        console.log(`Chernobog's health is at ${Chernobog.hp}, You're at ${Abe.hp} `)
        ffight();
    } else if (faction === 's') {
        console.log('You search your pockets for the LIBERTY')
        console.log('...but don\'t find it')
        Abe.hp -= Chernobog.attack;
        console.log(`Took ${Chernobog.attack}, remaining health is ${Abe.hp}`);
        ffight();
    } else if (faction === 'i') {
        console.log('Nothing to use here!')
        ffight();
    } else if (faction === 'r') {
        console.log('NO RUNNING!')
        ffight();
    } 
}
    if (Chernobog.hp <= 0) {
        vamps--;
        console.log('Chernobog slain!');
        console.log('Found the revolver LIBERTY');
        Abe.items.push('LIBERTY');
        console.log(Abe.items);
        console.log( `██▓     ██▓ ▄▄▄▄   ▓█████  ██▀███  ▄▄▄█████▓▓██   ██▓
            ▓██▒    ▓██▒▓█████▄ ▓█   ▀ ▓██ ▒ ██▒▓  ██▒ ▓▒ ▒██  ██▒
            ▒██░    ▒██▒▒██▒ ▄██▒███   ▓██ ░▄█ ▒▒ ▓██░ ▒░  ▒██ ██░
            ▒██░    ░██░▒██░█▀  ▒▓█  ▄ ▒██▀▀█▄  ░ ▓██▓ ░   ░ ▐██▓░
            ░██████▒░██░░▓█  ▀█▓░▒████▒░██▓ ▒██▒  ▒██▒ ░   ░ ██▒▓░
            ░ ▒░▓  ░░▓  ░▒▓███▀▒░░ ▒░ ░░ ▒▓ ░▒▓░  ▒ ░░      ██▒▒▒ 
            ░ ░ ▒  ░ ▒ ░▒░▒   ░  ░ ░  ░  ░▒ ░ ▒░    ░     ▓██ ░▒░ 
              ░ ░    ▒ ░ ░    ░    ░     ░░   ░   ░       ▒ ▒ ░░  
                ░  ░ ░   ░         ░  ░   ░               ░ ░     `);
                console.log('The tale of Abraham Lincoln, the vampire slayer')
        freetime();
    }
}
    function fight() {
        console.log('FIGHT START!');
        console.log(`It's ${Enemy.name}!`);
        if (enemy.hp > 0 && Abe.hp > 0) {
        var faction = readline.keyIn('What will you do? [M] Melee, [S] Shoot, [I] Inventory, [R] Run ', {limit: 'msir'})
     if (faction === 'm') {
        console.log(`You swing ${Abe.axe} with all your force`)
        var battlehit = Abe.mattack + Math.floor(Math.random()*30);
        console.log(battlehit)
        enemy.hp -= battlehit;
        Abe.hp -= enemy.attack;
        console.log(`Hit for ${battlehit} and took ${enemy.attack}`)       
        console.log(`enemy's health is at ${enemy.hp}, You're at ${Abe.hp} `)
        fight();
    } else if (faction === 's') {
        ammo--;
        enemy.hp -= Abe.shot;
        console.log(`Hit for ${Abe.shot}!~`)
        console.log(`${ammo} bullets remaining.`)
        fight();
    } else if (faction === 'i') {
        console.log(`${potions} remaining`)
        if (readline.keyInYN("Use a potion?")) {
            if (potions > 0 ) {
            Abe.hp += 100;
            potions--;
            console.log(`Health restored by 100, remaining health is now ${Abe.hp}`)
            } else {
                console.log("No potions available!")
                fight();
            }
        } else {
            fight();
        }
    }
    } else if (faction === 'r') {
        runchance = Math.floor(Math.random()*2);
        if (runchance = 0) {
        console.log('You somehow make it out.')
        travel();
        } else {
            console.log('Couldn\'t get away');
            Abe.hp -= enemyhit;
            console.log(`Took ${enemyhit}, hp remaining is ${Abe.hp}`);
            fight();
        }
    } if (Abe.hp <= 0) {
    death();
    return 0;
}
    else if (enemy.hp <= 0) {
        fivedollarbills++;
        vamps--;
        console.log("Fight won! Got a five dollar bill!")
        freetime();
    }
}
if (Enemy.hp <= 0) {
    console.log('Enemy slain!');
    vamps--;
    freetime();
}

function freetime() {
    while (hasWon === false) {
        var action = readline.keyIn(`You have ${vamps} enemies remaining, [T] Travel, [R] Rest, [B] Buy items `,{limit: 'trb'})
    if (action === 't') {
        travel();
    } else if (action === 'r') {
        if (rest > 0) {
            rest--;
            Abe.hp += 30;
            console.log(`Health increased by 30`);
            console.log(`Health is now ${Abe.hp}`);
            console.log(`You can rest ${rest} amount of times`);
        } else {
            console.log('Go do your job!');
        }
        
    } else if (action === 'b') {
       if(readline.keyInYN('Would you like to trade a five dollar bill for a potion?')) {
           if (Abe.fivedollarbills >= 1) {
               Abe.fivedollarbills--;
               Abe.potions++;
           } else {
               console.log('Not enough money');
           }
       } else {
           freetime();
       }
    }
    }
    
}
function travel() {
 while (hasWon === false && vamps !== 1) {
    var chance = Math.floor(Math.random()*3);
    console.log(chance);
    if (chance === 0) {
        encounter();
    } else if (chance === 1) {
        console.log('You feel a chill in the air.. and then nothing');
    } else {
        console.log('You don\'t sense any enemies nearby');
    }
}
function encounter() {
    if (readline.keyInYN("Are you going to fight?")) {
    var chance = Math.floor(Math.random() * enemies.length);
    fight(enemies[chance]);
    } else {
        freetime();
    }
}
}
function death() {
    console.log('You have died');
    if (readline.keyInYN('Would you like to try again?')) {
        Abe.hp = 100;
        beginning();
    } else {
        return 0;
    }
}
var Abaddon = new Enemy(Abaddon, 100, 20, 20, 'The ancient vampire Abaddon has appeared!');
var Reaper = new Enemy(Reaper, 300, 30, 0, "High alert, this is the reaper, we recommend you RUN!");
var Osiris = new Enemy(Osiris, 100, 10, 10, "The egyptian vampire Osiris has appeared!");
var Kanye = new Enemy(Kanye, 10, 0, 0, "It's just Kanye, get rid of him.");