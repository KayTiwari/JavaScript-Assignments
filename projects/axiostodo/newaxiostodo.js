axios.get("https://api.vschool.io/Abhi/todo").then(response => {
    var todo = response.data;
    renderTodos(response.data)
})

function renderTodos(todos) {
    todos.forEach(function (todo) {
        var parent = document.createElement("div");
        parent.className = "todo";
        var text = document.createTextNode(todo.title);
        var image = document.createElement('img');
        var description = document.createTextNode(todo.description);
        var price = document.createTextNode(todo.price);
        var x = document.createTextNode('Remove');
        var deleter = document.createElement('button');
        var edit = document.createElement('button');
        var ex = document.createTextNode('edit');
        edit.appendChild(ex);
        deleter.appendChild(x);
        image.className = 'images';
        image.src = todo.imgUrl;


        parent.appendChild(image);
        parent.appendChild(text);
        parent.appendChild(description);
        parent.appendChild(price);
        parent.appendChild(edit);

        var input = document.createElement("input");

        input.className = "input";
        input.type = "checkbox";

        //callback
        edit.addEventListener('click', (e) => editor(e ,todo._id, todo.imgUrl, todo.title, todo.description, todo.price));
        input.addEventListener("click", (e) => handleChecked(e ,todo._id, todo.completed));
        deleter.addEventListener("click", (e) => deleterfunc(e ,todo._id));


        parent.appendChild(input);
        parent.appendChild(deleter);

        if (todo.completed) {
            parent.classList.toggle("strikened");
            input.checked = true;
        }

        document.getElementById("data1").appendChild(parent);
    })
}

function handleChecked(e, id, completed) {
    e.preventDefault;
    e.target.parentNode.classList.toggle("strikened");
    striker(id, completed)
}

function editor(e, id, image, title, description, price) {
    e.preventDefault;
    var parent = document.createElement('form');
parent.id = 'postform';
parent.className = 'postform';
parent.innerHTML = 'edit'
var title = document.createElement('input');
title.setAttribute('type', 'text');
title.setAttribute('placeholder', `${title}`);
title.id = 'ftitle';
parent.appendChild(title);
var description = document.createElement('input');
description.setAttribute('type', 'text');
description.setAttribute('placeholder', 'description');
description.id = 'fdescription';
parent.appendChild(description);
var price = document.createElement('input');
price.setAttribute('type', 'number');
price.setAttribute('placeholder', 'price');
price.id = 'fprice';
parent.appendChild(price);
var image = document.createElement('input');
image.setAttribute('type', 'text')
image.setAttribute('placeholder', 'image');
image.id = 'fimage';
parent.appendChild(image);
var button = document.createElement('button');
button.addEventListener('click', onsubmit);
var t = document.createTextNode('Submit');
button.appendChild(t);
parent.appendChild(button);
document.body.appendChild(parent);
}

function deleterfunc(e, id) {
    e.preventDefault;
    axios.delete(`https://api.vschool.io/Abhi/todo/${id}`).then(function(response){
        console.log(response);
    }).catch(function(error){
        console.log(error);
    })
}

function striker(id, completed) {
    axios.put(`https://api.vschool.io/Abhi/todo/${id}`, {completed: !completed}).then(function (response) {
        console.log(response)
    }).catch(function (error) {
        console.log(error);
    });
}

var parent = document.createElement('form');
parent.id = 'postform';
parent.className = 'postform';
parent.innerHTML = 'New Todo: '
var title = document.createElement('input');
title.setAttribute('type', 'text');
title.setAttribute('placeholder', 'title');
title.id = 'ftitle';
parent.appendChild(title);
var description = document.createElement('input');
description.setAttribute('type', 'text');
description.setAttribute('placeholder', 'description');
description.id = 'fdescription';
parent.appendChild(description);
var price = document.createElement('input');
price.setAttribute('type', 'number');
price.setAttribute('placeholder', 'price');
price.id = 'fprice';
parent.appendChild(price);
var image = document.createElement('input');
image.setAttribute('type', 'text')
image.setAttribute('placeholder', 'image');
image.id = 'fimage';
parent.appendChild(image);
var button = document.createElement('button');
button.addEventListener('click', onsubmit);
var t = document.createTextNode('Submit');
button.appendChild(t);
parent.appendChild(button);
document.body.appendChild(parent);


function onsubmit(event) {
    event.preventDefault(event);
    var ftitle = document.getElementById('ftitle').value;
    console.log(ftitle);
    var fdescription = document.getElementById('fdescription').value;
    console.log(fdescription);
    var fprice = document.getElementById('fprice').value;
    console.log(fprice);
    var fimage = document.getElementById('fimage').value;
    console.log(fimage);
    var yourCall = {
        completed: false,
        title: ftitle,
        description: fdescription,
        price: fprice,
        imgUrl: fimage
    }
    console.log(yourCall);
    axios.post(`https://api.vschool.io/Abhi/todo/`, yourCall)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

