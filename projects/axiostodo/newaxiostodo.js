axios.get("https://api.vschool.io/Abhi/todo").then(response => {
    renderTodos(response.data)
})

function renderTodos(todos){
    todos.forEach(function(todo){
        var parent = document.createElement("div");
        parent.className = "todo";
        var text = document.createTextNode(todo.title);
        var image = document.createElement('img');
        image.className = 'images';
        image.src = todo.imgUrl;


        parent.appendChild(image);
        parent.appendChild(text);
        
        var input = document.createElement("input");
        input.className = "input";
        input.type = "checkbox";
        
        input.addEventListener("click", handleChecked);
        
        parent.appendChild(input);
        
        if(todo.completed){
            parent.classList.toggle("strikened");
            input.checked = true;
        }

        document.getElementById("data1").appendChild(parent);
    })
}

function handleChecked(e){
    e.target.parentNode.classList.toggle("strikened");
}
var parent = document.createElement('form');
parent.className = 'postform';
parent.innerHTML = 'new Todo'
var title = document.createElement('input');

form.id = ('postform');

document.getElementById('postform').addEventListener('submit', onsubmit());

function onsubmit(e) {
    e.preventDefault();
    var ftitle = form.ftitle.value;
    console.log(ftitle);
    var fdescription = form.getElementById('fdescription').value;
    console.log(fdescription);
    var fprice = form.getElementById('fprice').value;
    console.log(fprice);
    var fimage = form.getElementById('fimage').value;
    console.log(fimage);
    var yourCall = {
    completed: false,
    title: ftitle,
    description: fdescription,
    price: fprice,
    imgUrl: fimage
}
axios.post(`https://api.vschool.io/Abhi/todo/`, yourCall)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}


// var yourCall = {
//     completed: false,
//     title: "testttt task",
//     description: "task description",
//     price: 61231216,
//     imgUrl: "sdasd"
// }

// axios.post(`https://api.vschool.io/Abhi/todo/`, yourCall)
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });