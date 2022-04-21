const Intern = require('../lib/intern')

test ('Is able to set school', () => {
    const school = 'internTest';
    const coffee = new Intern("same", 123, school, "internTest")
    expect(coffee.school).toBe(school)
});