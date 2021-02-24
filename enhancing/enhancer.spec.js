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
        let item = {durability: 50, enhancement: 18}
        const expected = {durability: 50, enhancement: 19}
        expect(enhancer.success(item)).toEqual(expected)
    })

    test("item enhancement REMAINS UNCHANGED if enhancement level = 20", () => {
        let item = {durability: 50, enhancement: 20}
        const expected = {durability: 50, enhancement: 20}
        expect(enhancer.success(item)).toEqual(expected)
    })
})

describe("fail item", () => {
    test("As this item's enhancement is less than 15, the durability of the item is decreased by 5", () => {
        let item = {durability: 50, enhancement: 9}
        const expected = {durability: 45, enhancement: 9}
        expect(enhancer.fail(item)).toEqual(expected)
    })
    test("As this item's enhancement equals 15, the durability of the item is decreased by 10 with everything else unchanged", () => {
        let item = {durability: 50, enhancement: 15}
        const expected = {durability: 40, enhancement: 15}
        expect(enhancer.fail(item)).toEqual(expected)
    })
    test("As this item's enhancement level is greater than 16, the enhancement level decreases by 1 and durability decreases by 10", () => {
        let item = {durability: 50, enhancement: 17}
        const expected = {durability: 40, enhancement: 16}
        expect(enhancer.fail(item)).toEqual(expected)
    })



})


