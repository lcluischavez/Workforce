import { useEmployees } from "./EmployeeProvider.js"
import { useComputers } from "./ComputerProvider.js"
import Employee from "./Employee.js"
import { useDepartments } from "./DepartmentProvider.js"
import { useLocations } from "./LocationProvider.js"


const contentTarget = document.querySelector(".employees")

export const EmployeeList = () => {
    const employees = useEmployees()
    const Computers = useComputers()
    const Departments = useDepartments()
    const Locations = useLocations()


    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            // Find this product's type
            const computer = Computers.find(computer => computer.id === employee.computerId)
            const department = Departments.find(department => department.id === employee.departmentId)
            const location = Locations.find(location => location.id === employee.locationId)

            // Get HTML representation of product
            const html = Employee(employee, computer, department, location)

            return html

            
        }).join("")
    }

    render()
}

export default EmployeeList


