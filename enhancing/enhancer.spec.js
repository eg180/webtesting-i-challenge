const enhancer = require('./enhancer.js');
// test away!

it("works", () => {
    expect(3).toBeGreaterThan(2)
})

describe("repair function", () => {
    
    let item = {durability: 20}
    const expected = {durability: 100}
    expect(enhancer.repair(item)).toEqual(expected)
})

describe("success item", () => {
    
    test("item enhancement increases by 1 if enhancement level != 20", () => {
        let item = {durability: 50, enhancement: 50}
        const expected = {durability: 50, enhancement: 51}
        expect(enhancer.success(item)).toEqual(expected)
    })

})
