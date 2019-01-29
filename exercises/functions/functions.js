var a = 1;
var b = 2;
var c = 3;
function addSum(a, b) {
    console.log(a + b);
    return (a + b);
}
addSum(a, b);

function maxNum(a, b, c) {
    var x = Math.max(a, b, c);
    console.log(x);
    return x;
}
maxNum(a, b, c);

function isOddOrEven(a) {
    if (a % 2 == 0) {
        return 'even';
    } else return 'odd';
}
var z = 'hhhhhyyyyyy'
function stringReturn(string) {
    var half = (string.length/2);
    if (string.length <= 20) {
        console.log(string + string);
        return (string + string);
    } else console.log(string.slice(0, half))
      return (string.slice(0, half))
}

stringReturn(z);
var n = 6;
function fibonacci(number) {
    var sum = 1;
    var sum2 = 0;
    var final = 0;
    if (number === 0) {
        console.log(final);
        return final;
    }
    if (number === 1) {
        final === 1;
        console.log(final);
        return (final); 
    }
    for (i = 0; i < number; i++) {
        final = sum + sum2;
        sum = sum2;
        sum2 = final;
    }
    console.log(final);
    return (final);
}
fibonacci(n);

function character(string) {
    var arr = string.split('');
    var arrCounts = {};
    var maxKey = '';
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        var key = arr[i];
        if (!arrCounts[key]) {
            arrCounts[key] = 0;
        }
        arrCounts[key]++;
        if (maxKey === '' || arrCounts[key] > arrCounts[maxKey]){
            maxKey = key;
        }
    }
    console.log(maxKey + ':' + arrCounts[key]);
}
var zx = 'hhhhhyyyyyyyyy';
character(zx);
var a = 1;
var b = -3;
var c = -4;
function quadratic(a, b, c) {
    var x = ((-b + (Math.sqrt(Math.pow(b, 2) - (4 * a * c))))/(2 * a))
    console.log(x);
    var y = ((-b - (Math.sqrt(Math.pow(b, 2) - (4 * a * c))))/(2 * a))
    console.log(y);
}
quadratic(a, b, c);