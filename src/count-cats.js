/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
PATTERN = '^^';

function countCats(matrix) {
  return (matrix.map(arr => arr.filter(x => x === PATTERN))).flat().length;
}

module.exports = {
  countCats
};
