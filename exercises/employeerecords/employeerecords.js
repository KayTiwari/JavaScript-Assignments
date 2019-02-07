var employees = [];

function Employees(name, jobTitle, salary, status='Full Time') {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function() {

        console.log(employees);
    }
}

var employee1 = new Employees('Me', 'designer', '50,000', 'Part-time');
var employee2 = new Employees('You', 'manager', '80,000');
var employee3 = new Employees('They', 'developer', '100,000', 'Contract');
employees.push(employee1);
employees.push(employee2);
employees.push(employee3);
employee3.printEmployeeForm();