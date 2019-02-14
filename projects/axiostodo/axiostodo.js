// var cors = "https://vschool-cors.herokuapp.com?url="

// var yourCall = {
//     completed: false,
//     title: "newz task",
//     description: "task description",
//     price: 666,
//     imgUrl: "sdasd"
// }

// axios.post(`https://api.vschool.io/Abhi/todo/`, yourCall)
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

var ourCall = axios.get('https://api.vschool.io/Abhi/todo/').then(function (response) {
    console.log(response.data);
    for (i = 0; i < response.data.length; i++) {
        x = response.data[i];
            document.getElementById("data1").innerHTML += `<div> complete = ${x.completed} | id = ${x._id} | title = ${x.title} | description = ${x.description} | price = ${x.price} | img = <img src='${x.imgUrl}'></img></div><br><input id='checked' type='checkbox'><h2>${x.title}</h2>`;
            console.dir('checked');
    }
}).catch(function (error) {
    console.log(error);
})

document.getElementById('checked').addEventListener('change', todo()) 
        function todo() {
            if(this.checked) {
                h2.style.textDecoration = 'line-through';
            } else {
                h2.style.textDecoration = 'none';
            }
        }




// // function checkboxputs() {
// // var checkbox = document.createElement('input');
// // input.classname='input';
// // input.type = 'checkbox';

// // }

// // axios.delete(`https://api.vschool.io/Abhi/todo/`,)
// //     .then(function (response) {
// //         console.log(response);
// //     })
// //     .catch(function (error) {
// //         console.log(error);
// //     });


// // {"completed":true,"_id":"5c61c68d3d809a761cbd9fad","title":"Make breakfast","description":"scrambled eggs","price":1.99,"imgUrl":"https://www.incredibleegg.org/wp-content/uploads/Scrambled-with-Milk-930x620.jpg","sessionId":"Abhi","__v":0}