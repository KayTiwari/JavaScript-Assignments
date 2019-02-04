document.addEventListener('submit', submit);
function submit(e) {
    e.preventDefault();
    var firstname = document.getElementById('Rider').firstname.value;
    var lastname = document.getElementById('Rider').lastname.value;
    console.log(lastname);
    var age = document.getElementById('Rider').age.value;
    var gender = document.getElementById('Rider').gender.value;
    var location = document.getElementById('location');
    var selectedlocation = location.options[location.selectedIndex].text;
    var diet = document.getElementById('Rider').diet;
    var checkeddiet = [];
    for (var i = 0; i < Rider.diet.length; i++) {
        if (diet[i].checked) {
            checkeddiet.push(diet[i].value);
        }
    }
    alert(`First name: ${firstname} \n Last name: ${lastname} \n Age: ${age} \n Gender: ${gender}
   \n Location: ${selectedlocation} \n Diet: ${checkeddiet}`);
}

