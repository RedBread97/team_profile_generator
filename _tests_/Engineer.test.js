const Engineer = require('../lib/engineer')

test ('Is able to set github', () => {
    const github = 'engineerTest';
    const coffee = new Engineer("same", 123, github, "engineerTest")
    expect(coffee.github).toEqual(github)
});