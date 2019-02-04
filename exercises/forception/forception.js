var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var narr = [];
function forception(array1, array2) {
    for(var i = 0; i < array1.length; i++) {
        narr.push(array1[i] + ':')
        for (var k = 0; k < array2.length; k++) {
            narr.push(array2[k].toUpperCase());
        }
    }
    console.log(narr);
}
forception(people, alphabet);