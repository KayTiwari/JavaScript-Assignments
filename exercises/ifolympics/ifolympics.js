if (5 > 3) {
    console.log('is greater than');
}

if ('cat'.length == 3) {
    console.log('is the length');
}

if ('cat' === 'dog') {
    console.log('same');
} else {
    console.log('not the same');
}

var person = {
    name : 'Abhi',
    age : 23
}

if (person.age > 18)
{
    console.log('allowed to go');
} else {
    console.log('not allowed');
}

if (person.name.charAt(0) == 'B') {
    console.log('allowed to go');
} else {
    console.log('not allowed to go');
}


if (person.name.charAt(0) == 'B' && person.age > 18) {
    console.log('allowed to go');
} else {
    console.log('not allowed to go');
}

if (1 === '1') {
    console.log('strict');
} else if (1 == '1') {
    console.log('abstract');
} else {
    console.log('not equal at all');
}

if (((1 <= 2 && 2 === 4) || (((3 * 4) > 10) && ((5 + 10) > 10)))) {
    console.log('yes');
}

if (typeof 'dog' === 'string') {
    console.log('true');
}

if (typeof true === 'boolean') {
console.log(typeof true);
}

var dog;
if (dog !== null) {
    console.log('exists');
}

if ('a' > 0) {
    console.log('true');
} else {
    console.log('false');
}

var myNum = 3;
(myNum % 2 == 0) ? console.log('even') : console.log('odd');
