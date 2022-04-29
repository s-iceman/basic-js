const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  return Math.max(
    ...[...str]
      .map((char, idx) => str.slice(0, idx) + str.slice(idx + 1, str.length))
      .map(v => parseInt(v, 10))
  );
}

module.exports = {
  deleteDigit
};
