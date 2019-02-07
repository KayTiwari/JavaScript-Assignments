var numbers = [1, 5, 50, 100, 1000];

var greaterthanfive = numbers.filter(function(number){
    return number > 5;
})
console.log(greaterthanfive);