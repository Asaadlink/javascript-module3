import { add } from "../utils/numbers";

/**
 * Finish the test so that it checks if the result
 * of calling the add function with the arguments of
 * 2 and 4 is 6
 */
describe("01-exercise", () => {
  test("add return the sum of the numbers", () => {
    expect.assertions(1);

    // Finish the test
    const result= add(8,6);
    expect(result).toBe(14);
  });
});
