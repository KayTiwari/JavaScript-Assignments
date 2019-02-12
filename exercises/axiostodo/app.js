var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/Abhi/todo", true);

xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var name = data.name;
        document.getElementById("demo1").innerHTML = "JSON results: " + data;
        document.getElementById("demo2").innerHTML = "Parsed JSON's 'name' property: " + data.name;
        spaceshipurl = data.starships[0];
        console.log(spaceshipurl);
    }
};