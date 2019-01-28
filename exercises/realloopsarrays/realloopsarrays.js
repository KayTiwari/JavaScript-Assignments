// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];

// function Compnumber(array) {
//     var comp = 0;
//     for(var i=0;i<array.length;i++) {
//         if (array[i] === 'computer') {
//             comp++;
//         }
//     }
//     console.log(comp);
// }
// Compnumber(officeItems);

// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
// ]; 

// function oldEnough(array) {
//     for(var i = 0; i < array.length; i++) {
//         if (array[i].age >= 18 && array[i].gender == 'male') {
//             console.log(array[i].name + ' is old enough, he\'ll have a lot of fun at the movie');
//         }
//         if (array[i].age >= 18 && array[i].gender == 'female') {
//             console.log(array[i].name + ' is old enough she might like mad max');
//         }
//         if (array[i].age <= 18 && array[i].gender == 'male') {
//             console.log(array[i].name + ' is not old enough, he should stay home');
//         }
//         else if (array[i].age <= 18 && array[i].gender == 'female') {
//             console.log(array[i].name + ' is not old enough, she should go watch something else');
//         }
//     }
// }
// oldEnough(peopleWhoWantToSeeMadMaxFuryRoad);

// function isOn(array) {
//     var sum = 0;
//     for (var i = 0; i < array.length; i++) {
//         sum += array[i];  
//     }
//     console.log(sum);
//     if (sum % 2 === 0) {
//         console.log('off');
//     } else {
//         console.log('on');
//     }
// }

// isOn([9, 2, 4, 3]);