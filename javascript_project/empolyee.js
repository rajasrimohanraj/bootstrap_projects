
// employee constructor function
function employee(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
}
// create asimple empolyee database
const employeedb = {};

// function to add empolyee to the database
function addEmployee(id, name, department, salary) {
    const Employee = new employee(id, name, department, salary)
    employeedb[id] = Employee;
    console.log("empolyee with id "+  id  +" added")
}

function getAllEmployee() {
    const Employees = Object.values(employeedb);
    console.log("list of empolyees");
    Employees.forEach((employee) =>
        {
        console.log(`name:${employee.name},department:${employee.department},salary:${employee.salary}`);

    })
}
function getEmployeeDetails(id) {
    if (employeedb[id]) {
        return Object.entries(employeedb[id])
    }
    return `employee with id ${id} is not found`;
}
function updateEmployee(id, updateDetails) {
    if (employeedb[id]) {
        Object.assign(employeedb[id], updateDetails)
    } else {
        console.log(`empolyee with id ${id} is not found`)
    }


}
function freezeEmployee(id) {
    if (employeedb[id]) {
        Object.freeze(employeedb[id]);
        console.log("empolyee  data freezed")
    } else {
        console.log(`empolyee with id ${id} is not found`)
    }
}
function sealEmployee(id) {
    if (employeedb[id]) {
        Object.seal(employeedb[id])
        console.log("empolye  data sealed")
    } else {
        console.log(`empolyee with id ${id} is not found`)
    }
}
addEmployee(1,"janu","engineer",300000)
addEmployee(4,"tamil","sales",90000)
addEmployee(3,"janu","hr",900000)
//view employees
console.log("\n");
 getAllEmployee();
//get employee details with id
console.log("\n view employees details");
 console.log(getEmployeeDetails(2));
  console.log(getEmployeeDetails(4));

  console.log("\n update employee details");
  updateEmployee(4,{salary:45000});
  console.log("after update");
getAllEmployee();
  //freeze employee data
  console.log("\n freeze employee data");
  freezeEmployee(1);
  employeedb[1].salary = 80000;
  console.log("after freeze")
  getAllEmployee()
//SEAL EMPLOYEE DATA
console.log("\n sealing empolyee data")
sealEmployee(4)
employeedb[4].salary = 80000;
console.log(getEmployeeDetails(4))

updateEmployee(3,{name:"kalai"});
getAllEmployee();
updateEmployee(3,{salary:400});

console.log(getEmployeeDetails(3))
