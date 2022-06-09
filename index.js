// Write your solution in this file!
const employee = {

};
employee.name = "moz";
employee.streetAddress = "0380-70";

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee={...employee};
    newEmployee[key]=value;
    return newEmployee;

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee; 

}
function deleteFromEmployeeByKey(employee,key){
    const new_employee = {...employee};
    delete new_employee[key];
    return new_employee;

}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    
    delete employee[key];
    return employee;
}