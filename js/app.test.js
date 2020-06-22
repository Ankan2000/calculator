const { countDigits, addFloat, subFloat } = require("./experimental");

//! unit test on count digits
test("should return 2.13 has 2 decimal places", () => {
    expect(countDigits(2.13)).toBe(2);
})

test("should return 10.12345 has 5 decimal places", () => {
    expect(countDigits(10.12345)).toBe(5);
})

test("should return 10 has no decimal places", () => {
    expect(countDigits(10)).toBe(0);
})

test("should return 10.000 has no decimal places", () => {
    expect(countDigits(10.000)).toBe(0);
})
//=========================================================

//! integration test on adding float
test("should return 0.3 + 0.04 = 0.34", () => {
    expect(addFloat(0.3, 0.04)).toBe(0.34);
})
test("should return 0.3 + 0.2 = 0.5", () => {
    expect(addFloat(0.3, 0.2)).toBe(0.5);
})
test("should return 12.356 + 11.23 = 23.586", () => {
    expect(addFloat(12.356, 11.23)).toBe(23.586);
})
test("should return 100.09876 + 7.0671 = 107.16586", () => {
    expect(addFloat(100.09876, 7.0671)).toBe(107.16586);
})
test("should return 112 + 7.0671 = 119.0671", () => {
    expect(addFloat(112, 7.0671)).toBe(119.0671);
})
test("should return 2341 + 435 = 2776", () => {
    expect(addFloat(2341, 435)).toBe(2776);
})
//=========================================================


//! integration test on subtracting float
test("should return 0.3 - 0.04 = 0.26", () => {
    expect(subFloat(0.3, 0.04)).toBe(0.26);
})
test("should return 0.3 - 0.2 = 0.1", () => {
    expect(subFloat(0.3, 0.2)).toBe(0.1);
})
test("should return 12.356 - 11.23 = 1.126", () => {
    expect(subFloat(12.356, 11.23)).toBe(1.126);
})
test("should return 100.09876 - 107.0671 = -6.96834", () => {
    expect(subFloat(100.09876, 107.0671)).toBe(-6.96834);
})
test("should return 112 - 7.0671 = 104.9329", () => {
    expect(subFloat(112, 7.0671)).toBe(104.9329);
})
test("should return 2341 - 435 = 1906", () => {
    expect(subFloat(2341, 435)).toBe(1906);
})
test("should return 2341 - 4435 = -2094", () => {
    expect(subFloat(2341, 4435)).toBe(-2094);
})
//=========================================================
