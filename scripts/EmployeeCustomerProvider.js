let relationships = []

export const useEmployeeCustomers = () => relationships.slice()

export const getEmployeeCustomers = () => fetch("http://localhost:8088/employeecustomers")
    .then(res => res.json())
    .then(data => employeeCustomers = data)