var str = 'Hello World';
function upperCaseLowerCase(string) {
    console.log(string.toUpperCase() + string.toLowerCase());
    return(string.toUpperCase() + string.toLowerCase());
}
upperCaseLowerCase(str);

function findMiddleIndex(string) {
    console.log(x = Math.floor(string.length/2));
    return x;
}
findMiddleIndex(str);

function printToMiddleIndex(string) {
    console.log(string)
    x = Math.floor(string.length/2);
    y = (string.slice(0, x));
    console.log(y);
    return string.slice(0, x);
}
printToMiddleIndex(str);

function halfUpperhalfLower(string) {
    console.log(string)
    x = Math.floor(string.length/2);
    y = (str.slice(0, x))
    z = (str.slice(x, str.length));
    console.log(y.toUpperCase() + z.toLowerCase());
}
halfUpperhalfLower(str);
var str1 = 'Hey, hello there My friend!';

function upperCaseAfterSpace (string) {
    var nstr = [];
    const splitStr = string.split(" ");
    for (i = 0; i < splitStr.length; i++) {
        firstChar = splitStr[i].slice(0, 1).toUpperCase()
        allChar = firstChar + splitStr[i].slice(1, str1.length);
        nstr.push(allChar);
    }
    console.log(nstr.join(" "));
}
upperCaseAfterSpace(str1);