const Employee = require('../lib/employee')

test ('Is able to set name', () => {
    const name = "employeeTest"
    const coffee = new Employee(name)
    expect(coffee.name).toEqual(name)
})

test ('Is able to set id', () => {
    const id = 123;
    const coffee = new Employee("same", id)
    expect(coffee.id).toBe(id)
})
test ('Is able to set email', () => {
    const email = 'employeeTest'
    const coffee = new Employee("same", 123, email)
    expect(coffee.email).toBe(email)
});
