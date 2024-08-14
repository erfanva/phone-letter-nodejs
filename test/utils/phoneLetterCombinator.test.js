import { expect } from "chai";
import phoneLetterCombinator from "../../src/utils/phoneLetterCombinator.js";

describe("Combinations Service", () => {
  it("empty", () => {
    const combinations = phoneLetterCombinator.getCombinations("");
    expect(combinations).to.deep.equal([]);
  });

  it('combinations for "9"', () => {
    const combinations = phoneLetterCombinator.getCombinations("9");
    expect(combinations).to.deep.equal(["w", "x", "y", "z"]);
  });

  it('combinations for "23"', () => {
    const combinations = phoneLetterCombinator.getCombinations("34");
    expect(combinations).to.deep.equal([
      "dg",
      "dh",
      "di",
      "eg",
      "eh",
      "ei",
      "fg",
      "fh",
      "fi",
    ]);
  });
});
