// Write your solution in this file!
const employee = {
    name: "Shinya",
    streetAddress: "New York",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
  return {
    ...employee,
    [key]: value
};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key] = value
return employee
}

function deleteFromEmployeeByKey(employee, key) {
const objEmployee = {...employee}
delete objEmployee[key]
return objEmployee



    // return delete {
    // ...employee
    //  }[key]
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}