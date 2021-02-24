const enhancer = require('./enhancer.js');
// test away!

it("works", () => {
    expect(3).toBeGreaterThan(2)
})

describe("repair function", ()=> {
    
    let item = {durability: 20}
    const expected = {durability: 100}
    expect(enhancer.repair(item)).toEqual(expected)
})