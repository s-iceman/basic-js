/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const MINUS_PREV = '--discard-prev';
const PLUS_PREV = '--double-prev';
const MINUS_NEXT = '--discard-next';
const PLUS_NEXT = '--double-next';
const FAKE_ELEM = 'fake';


function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let res = [];

  for (let i = 0; i < arr.length; ++i){
    let elem = arr[i];
    if (elem == MINUS_PREV){
      if (res.length !== 0){ res.pop(); }
    }
    else if (elem == PLUS_PREV){
      if (res.length !== 0){ res.push(res[res.length - 1]); }
    }
    else if (elem == PLUS_NEXT){
      if (i !== arr.length - 1){ res.push(arr[i + 1]); }
    }
    else if (elem == MINUS_NEXT){
      res.push(FAKE_ELEM);
      i += 1;
    }
    else { res.push(elem); }
  }
  return res.filter(e => e !== FAKE_ELEM);
}

module.exports = {
  transform
};
