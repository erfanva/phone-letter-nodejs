const digitToLettersMap = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

function generateCombinations(digits) {
  if (digits.length == 0) return [];
  if (digits.length == 1) return digitToLettersMap[digits[0]];

  const currentDigit = digits[0];
  const nextDigits = digits.slice(1);
  const currentDigitLetters = digitToLettersMap[currentDigit];
  const nextDigitsCominations = generateCombinations(nextDigits);

  let combinations = [];

  for (const letter of currentDigitLetters) {
    for (const nextCombination of nextDigitsCominations) {
      combinations.push(letter + nextCombination);
    }
  }

  return combinations;
}

export default {
  generateCombinations,
};
