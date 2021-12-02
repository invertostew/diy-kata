const getEmployerRole = (employeeName, employees) => {
  // Seeing as there is only one of each name...
  return employees.find(employee => employee.name === employeeName).role;
};

module.exports = getEmployerRole;
