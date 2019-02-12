var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         var jsonData = xhr.responseText;
//         var data = JSON.parse(jsonData);
//         var name = data.name;
//         document.getElementById("demo1").innerHTML = "JSON results: " + data;
//         document.getElementById("demo2").innerHTML = "Parsed JSON's 'name' property: " + data.name;
//     }
// };

// xhr.open("GET", "https://api.vschool.io/Abhi/todo/5c61c68d3d809a761cbd9fad", true);

// xhr.send();

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){
        var data = JSON.parse(xhr.responseText)
        document.getElementById("demo1").innerHTML = "JSON results: " + data;
        console.log(data)
    } 
};

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto", true);
xhr.send();