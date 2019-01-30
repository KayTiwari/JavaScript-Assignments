var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

//remove last item from vegetable array
vegetables.pop();
// console.log("vegetables: ", vegetables);

//remove first item from fruit array
fruit.shift();
// console.log("fruit: ", fruit);

//find index of orange
//add that number to end of fruits array
fruit.push(fruit.indexOf('orange'));
// console.log("fruit: ", fruit);

//find length of vegetable array
//add that number to end of vegetable array
vegetables.push(vegetables.length);

//join both arrays fruit first
food = fruit.concat(vegetables);
// console.log(food);

//remove 2 elements starting at the 4th index
food.splice(4,2)
// console.log(food);

//reverse your array
console.log(food.reverse());

console.log(food.join());