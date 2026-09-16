import { expect, test, it } from 'vitest';
import { sum, reverseString, createUsers, legalAge,tvaCalc } from "./index";

test("adds 1 + 2 to equal 3 and 6 + 3 to equal 9", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(6, 3)).toBe(9);
});

// Note : "test" can be replaced by "it"
it("should return 4 elements", () => {
    const nbOfItemsToCreate = 4;
    expect(createUsers(nbOfItemsToCreate)).toHaveLength(nbOfItemsToCreate);
});

it('should return object with key "age"', () => {
    const res = createUsers(2);
    expect(res[0]).toHaveProperty("age");
});


it('should return string "ledba"', () =>{
    expect(reverseString("abdel")).toBe("ledba");
})

it('should return true', () =>{
    expect(legalAge(18)).toBe(true);
})

it('should return 68.58', () => {
    expect(tvaCalc(65)).toBe(68.58)
})

