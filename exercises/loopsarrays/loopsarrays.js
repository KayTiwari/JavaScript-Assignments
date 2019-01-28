var highestNum = 10;
var numbers = [];
createEvenArray(highestNum);

function createEvenArray(highestNum) {
    for (var i = 0; i <= highestNum; i++) {
        if ((i % 2) === 0) {
            numbers.push(i);
        }
    }
    console.log(numbers);
    return numbers;
}

addOdds(numbers);

function addOdds(array) {
    for(var i = 0; i < array.length; i++) {
        i += 1;
        numbers.push(i);
    }
    return numbers;
}
console.log(numbers);

sortNums(numbers);
function sortNums(array) {
    numbers.sort(function(a, b){return a - b});
    console.log(numbers);
}