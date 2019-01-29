for (i = 0; i < 10; i++) {
    console.log(i);
}

// for (i = 9; i > -1; i--) {
//     console.log(i);
// }

// var fruits = ['banana', 'orange', 'apple', 'kiwi'];
// for (i = 0; i < 4; i++) {
//     console.log(fruits[i]);
// } 

var arr = [];
for (i = 0; i < 10; i++) {
    
    arr.push(i);
    console.log(arr);
} 

// for (i = 0; i < 101; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (i = 0; i < 6; i++) {
//     if (i % 2 == 0)
//     {
//         console.log(fruit[i]);
//     }
// }

var people = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
];

// for (i = 0; i < 4; i++) {
//     console.log(people[i].name);
// }

// for (i = 0; i < 4; i++) {
//     var names = [];
//     var occupations = [];
//     names.push(people[i].name);
//     occupations.push(people[i].occupation);
//     console.log(names);
//     console.log(occupations);
// }

var names = [];
var occupations = [];
for (i = 0; i < 4; i++) {

    if (i % 2 == 0) {
    names.push(people[i].name);
    }
    if (i % 2 == 1) {
    occupations.push(people[i].occupation);
    }
    console.log(names);
    console.log(occupations);
}

var grid = [];
var grid2 = [];
var grid3 = [];
// for (i=0;i<1;i++)
// {
//     grid.push(0, 0, 0);
//     grid2.push(0, 0, 0);
//     grid3.push(0, 0, 0);
//     console.log(grid);
//     console.log(grid2);
//     console.log(grid3);
// }

// for (i=0;i<1;i++)
// {
//     grid.push(0, 0, 0);
//     grid2.push(1, 1, 1);
//     grid3.push(2, 2, 2);
//     console.log(grid);
//     console.log(grid2);
//     console.log(grid3);
// }

// for (i=0;i<1;i++)
// {
//     grid.push(0, 1, 2);
//     grid2.push(0, 1, 2);
//     grid3.push(0, 1, 2);
//     console.log(grid);
//     console.log(grid2);
//     console.log(grid3);
// }

// for (i=0;i<1;i++)
// {
//     k = 0;
//     t = 1;
//     z = 2;
//     if (k > 0 && k < Infinity) {
//         k = 'x';
//     } if (t > 0 && t < Infinity) {
//         t = 'x';
//     } if (z > 0 && z < Infinity) {
//         z = 'x';
//     }
//     grid.push(k, t, z);
//     grid2.push(k, t, z);
//     grid3.push(k, t, z);
//     console.log(grid);
//     console.log(grid2);
//     console.log(grid3);
// }