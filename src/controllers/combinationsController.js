import phoneLetterCombinator from "../utils/phoneLetterCombinator.js";

function generateCombinations(req, res) {
  const phoneNumber = req.body.phoneNumber;

  if (!phoneNumber || !/^[2-9]+$/.test(phoneNumber)) {
    return res
      .status(400)
      .json({ status: "error", message: "Invalid phone number" });
  }

  const combinations = phoneLetterCombinator.generateCombinations(phoneNumber);
  res.json({ combinations: combinations });
}

export default {
  generateCombinations,
};
