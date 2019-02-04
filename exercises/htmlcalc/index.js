document.form1.addEventListener('submit', addition);
function addition(e) {
    e.preventDefault();
    var x = document.form1.input1.value;
    var y = document.form1.input2.value;
    sum = +x + +y;
    document.getElementById('output1').textContent = sum;
}

document.form2.addEventListener('submit', subtraction);
function subtraction(e) {
    e.preventDefault();
    var x = document.form2.input1.value;
    var y = document.form2.input2.value;
    difference = +x - +y;
    document.getElementById('output2').textContent = difference;
}

document.form3.addEventListener('submit', multiplication);
function multiplication(e) {
    e.preventDefault();
    var x = document.form3.input1.value;
    var y = document.form3.input2.value;
    product = +x * +y;
    document.getElementById('output3').textContent = product;
}