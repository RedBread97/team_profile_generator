const Manager = require('../lib/manager')

test ('Is able to set office number', () => {
    const officeNumber = 123-456-7891;
    const coffee = new Manager("same", 123 , officeNumber, 123-456-7891)
    expect(coffee.officeNumber).toBe(officeNumber)
});