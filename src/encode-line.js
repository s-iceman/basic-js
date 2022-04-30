/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function formatBlock(letter, count){
  return count > 1 ? `${count}${letter}` : letter;
}

function encodeLine(str) {
  if (!str || str.length == 0){
    return '';
  }
  let res = [];
  let letter = str[0];
  let count = 0;

  for (let elem of str){
    if (elem === letter){
      ++count;
    }
    else {
      res.push(formatBlock(letter, count));
      letter = elem;
      count = 1;
    }
  }
  res.push(formatBlock(letter, count));
  return res.join('');
}

module.exports = {
  encodeLine
};
