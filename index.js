// Write your solution in this file!

// Non-destructive update
function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Returns a new employee object with the new key-value pair added
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Destructive update
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Modifies the original employee object
    employee[key] = value;
    return employee;
  }
  
  // Non-destructive delete
  function deleteFromEmployeeByKey(employee, key) {
    // Creates a clone of the employee object
    const newEmployee = {...employee};
    // Deletes the key from the cloned employee object
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Destructive delete
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Deletes the key from the original employee object
    delete employee[key];
    return employee;
  }
  
  // Sample employee object for testing purposes
  let employee = {
    name: 'Sam'
  };
  