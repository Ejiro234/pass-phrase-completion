const { generateSeedPhrase } = require("multiwallet-seed-phrase-generator");
const _ = require("lodash");

function completePassphrase(incompletePhrase = []) {
  try {
    if (incompletePhrase.length < 1) {
      throw new Error("You need to provide at least one word");
    }

    const fullArray = _.concat(
      generateSeedPhrase()["12"],
      generateSeedPhrase()["18"],
      generateSeedPhrase()["24"],
      incompletePhrase
    );

    return {
      12: _.sampleSize(fullArray, 12),
      18: _.sampleSize(fullArray, 18),
      24: _.sampleSize(fullArray, 24),
    };
  } catch (error) {
    return error;
  }
}

module.exports = { completePassphrase };
