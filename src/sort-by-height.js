/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
const IGNORE_VALUE = -1;

function sortByHeight(arr) {
  let indexes = [];
  arr.forEach((elem, idx) => { if (elem === IGNORE_VALUE) {indexes.push(idx);} })
  arr = arr.filter(e => e !== IGNORE_VALUE).sort((a, b) => a - b);
  indexes.forEach( idx => { arr.splice(idx, 0, IGNORE_VALUE) });
  return arr;
}

module.exports = {
  sortByHeight
};
