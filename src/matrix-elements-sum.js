const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let skippedIndexes = new Set();
  let res = matrix
      .map(row => row.map((value, idx) => {
        if (value === 0){
          skippedIndexes.add(idx);
        }
        return skippedIndexes.has(idx) ? 0 : value;
      }))
    .flat()
    .reduce((acc, v) => acc + v, 0);
  return res;
}

getMatrixElementsSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]);

module.exports = {
  getMatrixElementsSum
};
