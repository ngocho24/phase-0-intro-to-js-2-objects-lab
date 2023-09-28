// // Write your solution in this file!
const employee = {
    Name : 'James Okurut' ,
    StreetAddress : "Wounston Street"
};

// Function to update employee non-destructively
function updateEmployeeWithKeyAndValue (employee, key, value) {
const  keyAndValue = {...employee}
keyAndValue [key] = value;

return keyAndValue;
};
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "Age", "28");
console.log(updatedEmployee);


// Function to update employee destructively
function  destructivelyUpdateEmployeeWithKeyAndValue(employee1, key1, value1){
      employee1 [key1] = value1
    return employee1;
}
const destructiveUpdate = destructivelyUpdateEmployeeWithKeyAndValue (employee,"Role", "Secretary");
console.log(destructiveUpdate)


// Function to delete a key non-destructively
function deleteFromEmployeeByKey(employee, key){
    const Age = {...employee}
    delete Age [key]
     return Age;
}
const deletedKey = deleteFromEmployeeByKey(employee, "Name");
console.log(deletedKey);


// Function to delete a key destructively
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee [key]
    return employee;
}
const deleteDestructively = destructivelyDeleteFromEmployeeByKey(employee, "StreetAddress");
console.log (deleteDestructively);