const Employee = (employee, computer, department, location) => {
    return `
        <section class="employee">
            <section class="employee_name">
                <h2>${employee.firstName} ${employee.lastName}</h2>
                <div>Age: ${employee.age}</div>
            </section>
            <br>
            <section class="employee__computer">
                <div><strong>Computer</strong> # ${employee.computerId}</div>
                <div>Currently using a ${computer.year} ${computer.model}.</div>
            </section>
            <br>
            <section class="employee__department">
                <div>Works in the ${department.name} department.</div>
            </section>
            <br>
            <section class="employee__location">
                <div>Works at the ${location.name} location.</div>
            </section>
            <br>
            <section class="employee__customers">
                Has worked for the following customers.
                <ul>
                    <li></li>
                </ul>
            </section>
        </section>
    `
}

export default Employee