
var readline = require('readline-sync');
var player = require('play-sound')(opts = {})
var audio = player.play('SpiderDance.mp3', function(err){
    if (err && !err.killed) throw err
  })
var isAlive = true;
var gameEnd = false;
var Abe = {
    name: 'Abraham Lincoln',
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
    hp: 1000,
    attack: 30,
    lifesteal: 30
}

function Enemy(name, hp, attack, lifesteal, description){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.lifesteal = lifesteal;
    this.description = description;
}

var Abaddon = new Enemy('Abaddon', 100, 20, 20, 'The ancient vampire Abaddon has appeared!');
var Reaper = new Enemy('Reaper', 250, 30, 0, "High alert, this is the Reaper, we recommend you focus on escaping or shoot it down.");
var Osiris = new Enemy('Osiris', 100, 10, 10, "The egyptian vampire Osiris has appeared!");
var Kim = new Enemy('Kim', 10, 0, 0, "The ancient vampire Kim Kardashian has appeared.. get rid of her");
enemies = [Abaddon, Reaper, Osiris, Kim];
console.log(enemies);
vamps = 6;
ammo = 3;
rest = 3;
var hasWon = false;
if (vamps === 1) {
    finalfight();
}

function beginning() {
    isAlive = true;
    if (isAlive === true) {
    console.log('You wake up in a dark room.')
    setTimeout(function(){console.log('You struggle to remember who you are and what happened.');}, 000)
    setTimeout(function(){console.log('You are the great vampire slayer, Abraham Lincoln.');}, 000)
    setTimeout(function(){console.log('...');}, 000)
    setTimeout(function(){console.log('CRASH!');}, 000)
    setTimeout(function(){console.log('Somethings coming');}, 000)
    setTimeout(function(){console.log('You look down and see your axe');}, 00)
    setTimeout(function(){Abe.axe = readline.question('What is your AXE\'s name? ');}, 000)}
    setTimeout(function(){firstfight();}, 000);
}

beginning();

function freetime() {
    while (hasWon === false) {

        var action = readline.keyIn(`You have ${vamps} enemies remaining, [T] Travel, [R] Rest, [B] Buy items, [P] Print inventory `,{limit: 'trbp'})

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
            console.log(`You have ${Abe.fivedollarbills} five dollar bills`);

            if(readline.keyInYN('Would you like to trade a five dollar bill for a potion?')) {
                if (Abe.fivedollarbills >= 1) {
                    Abe.fivedollarbills--;
                    Abe.potions++;
                    console.log(`Got a potion, now have ${Abe.potions}`);
                } else {
                    console.log('Not enough money');
                }
            } else {
                freetime();
            }
        } else if (action === 'p') {
            console.log(`Name: ${Abe.name} | Items: ${Abe.items} | Ammo: ${ammo} | Potions: ${Abe.potions} | Money: ${Abe.fivedollarbills}`);
            freetime();
        }
    }
    
}


function firstfight() {
    player.play('SpiderDance.mp3', function(err){
        if (err) throw err
      })
    console.log('It\'s Vampire Chernobog!');
    console.log("\"Dracula said you'd be here.. time to die\"");
    ffight();
}

function ffight() {
    while (Chernobog.hp > 0 && gameEnd === false) {
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

function encounter() {
    if (readline.keyInYNStrict("Are you going to fight?")) {
        var chance = Math.floor(Math.random() * enemies.length);
        fight(enemies[chance]);
    } else {
        freetime();
    }
}

function travel() {
    while (hasWon === false && vamps !== 1) {
       var chance = Math.floor(Math.random()*3);
       if (chance === 0) {
           console.log('Enemy found')
           encounter();
       } else if (chance === 1) {
           console.log('You feel a chill in the air.. and then nothing');  
           freetime();
       } else {
           console.log('You don\'t sense any enemies nearby, so you sit and rest');
           console.log('Health increased by 5')
           Abe.hp += 5;
           freetime();
       }
    } if (vamps === 1) {
        audio.kill();
        finalfight();
    }
}

function fight(Enemy) {
    console.log('FIGHT START!');
    console.log(Enemy.description);
    var x = Enemy.hp;
    rfight(Enemy);

function rfight(Enemy) {
    if (Enemy.hp > 0 && Abe.hp > 0) {
        var faction = readline.keyIn('What will you do? [M] Melee, [S] Shoot, [I] Inventory, [R] Run ', {limit: 'msir'})
        if (faction === 'm') {
            console.log(`You swing ${Abe.axe} with all your force`)
            var battlehit = Abe.mattack + Math.floor(Math.random()*30);
            var lifestealchance = Math.floor(Math.random()*5);
            Enemy.hp -= battlehit;
            Abe.hp -= Enemy.attack;
            if (lifestealchance >= 4) {
                Enemy.hp += Enemy.lifesteal;
                console.log(`Enemy stole ${Enemy.lifesteal} health`);
            }
            console.log(`Hit for ${battlehit} and took ${Enemy.attack}`)       
            console.log(`Enemy's health is at ${Enemy.hp}, You're at ${Abe.hp} `)
            rfight(Enemy);
        } else if (faction === 's') {
            if (ammo > 0) {
            ammo--;
            Enemy.hp -= Abe.shot;
            console.log(`Hit for ${Abe.shot}!~`)
            console.log(`${ammo} bullets remaining.`)
            rfight(Enemy);
            } else {
                console.log('Not enough ammo')
                rfight();
            }
        } else if (faction === 'i') {
            console.log(`${Abe.potions} remaining`)
            if (readline.keyInYN("Use a potion?")) {
                if (Abe.potions > 0 ) {
                Abe.hp += 100;
                Abe.potions--;
                console.log(`Health restored by 100, remaining health is now ${Abe.hp}`)
                rfight(Enemy);
                } else {
                    console.log("No potions available!")
                    rfight(Enemy);
                }
            } else {
                rfight(Enemy);
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
            rfight(Enemy);
        }
    } if (Abe.hp <= 0) {
        death();
        return 0;
    } else if (Enemy.hp <= 0) {
        Abe.fivedollarbills++;
        vamps--;
        console.log(`${Enemy.name} has been slain!`)
        console.log("Fight won! Got a five dollar bill!")
        Enemy.hp = x;
        freetime();
        }
    }
}

function finalfight() {
    player.play('Megalovania.mp3', function(err){
        if (err) throw err
      })
    console.log('...');
    console.log('...');
    console.log('...');
    console.log('...');
    console.log('...');
    console.log('The air gets unbearably cold')
    console.log('Dracula has made his appearance')
    console.log('"Its time to end this."')
    console.log('...');
    console.log('...');
    console.log('...');
    console.log('...');
    console.log('...');
    finfight();
}

function finfight() {
    console.log('FIGHT START')
    while (Dracula.hp > 0) {
        var faction = readline.keyIn('What will you do? [M] Melee, [S] Shoot, [I] Inventory, [R] Run ', {limit: 'msir'})
        if (Abe.hp <= 0) {
            isAlive = false;
            death();
        } else if (faction === 'm') {
            console.log(`You swing ${Abe.axe} with all your force`)
            var battlehit = Abe.mattack + Math.floor(Math.random()*30);
            var enemyhit = Dracula.attack + Math.floor(Math.random()*5);
            var lifestealchance = Math.floor(Math.random()*5);
            Dracula.hp -= battlehit;
            Abe.hp -= enemyhit;
            if (lifestealchance >= 3) {
                Dracula.hp += Dracula.lifesteal;
                console.log(`Dracula stole ${Dracula.lifesteal} health`);
            }
            console.log(`Hit for ${battlehit} and took ${enemyhit}`)       
            console.log(`Dracula's health is at ${Dracula.hp}, You're at ${Abe.hp} `)
            finfight();
        } else if (faction === 's') {
            if (ammo > 0) {
                ammo--;
                Dracula.hp -= Abe.shot;
                console.log(`Hit for ${Abe.shot}!~`)
                console.log(`${ammo} bullets remaining.`)
                finfight();
            } else {
                    console.log('Not enough ammo')
                    finfight();
            }
        } else if (faction === 'i') {
            if (readline.keyInYN("Use a potion?")) {
                if (Abe.potions > 0 ) {
                Abe.hp += 100;
                Abe.potions--;
                console.log(`Health restored by 100, remaining health is now ${Abe.hp}`)
                finfight();
                } else {
                    console.log("No potions available!")
                    finfight();
                }
            } else if (faction === 'r') {
                console.log('NO RUNNING!')
                finfight();
            } 
        }
        if (Dracula.hp <= 0) {
            console.log('Dracula has finally been slain!');
            console.log('The night is calm once again');
            console.log(`██▓     ██▓ ▄▄▄▄   ▓█████  ██▀███  ▄▄▄█████▓▓██   ██▓
            ▓██▒    ▓██▒▓█████▄ ▓█   ▀ ▓██ ▒ ██▒▓  ██▒ ▓▒ ▒██  ██▒
            ▒██░    ▒██▒▒██▒ ▄██▒███   ▓██ ░▄█ ▒▒ ▓██░ ▒░  ▒██ ██░
            ▒██░    ░██░▒██░█▀  ▒▓█  ▄ ▒██▀▀█▄  ░ ▓██▓ ░   ░ ▐██▓░
            ░██████▒░██░░▓█  ▀█▓░▒████▒░██▓ ▒██▒  ▒██▒ ░   ░ ██▒▓░
            ░ ▒░▓  ░░▓  ░▒▓███▀▒░░ ▒░ ░░ ▒▓ ░▒▓░  ▒ ░░      ██▒▒▒ 
            ░ ░ ▒  ░ ▒ ░▒░▒   ░  ░ ░  ░  ░▒ ░ ▒░    ░     ▓██ ░▒░ 
              ░ ░    ▒ ░ ░    ░    ░     ░░   ░   ░       ▒ ▒ ░░  
                ░  ░ ░   ░         ░  ░   ░               ░ ░     `);
                    console.log('All men are created equal, just not vampires.')
            GameOver();
        }
    }
}

function death() {
    console.log('You have died');
    if (readline.keyInYN('Would you like to try this again?')) {
        Abe.hp = 100;
        beginning();
    } else {
        return 0;
    }
}

function GameOver() {
    console.log('Made by Abhi');
    console.log('Thanks for playing!');
    gameEnd = true;
    process.exit(-1);
}