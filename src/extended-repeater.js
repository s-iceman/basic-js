/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
const SEPARATOR = '+';
const ADD_SEPARATOR = '|';


function repeater(str, options) {
  if (typeof str !== 'string'){ str = String(str); }

  const repeatTimes = (options.repeatTimes !== undefined) ? options.repeatTimes : 1;
  const separator = (options.separator !== undefined) ? options.separator : SEPARATOR;
  const tmpAddStr = options.addition;
  const addStr = (tmpAddStr !== undefined) ? 
      (typeof tmpAddStr == 'string' ? tmpAddStr : String(tmpAddStr)) :
       '';
  const tmpAddTimes = options.additionRepeatTimes;
  let addRepeatTimes = (tmpAddTimes !== undefined) ? tmpAddTimes : 0;
  if (addStr !== '' && addRepeatTimes === 0){
    addRepeatTimes = 1;
  }
  
  const addSeparator = (options.additionSeparator !== undefined) ? options.additionSeparator : ADD_SEPARATOR;
  const fullAddSep = Array(addRepeatTimes).fill([addStr]).join(addSeparator);

  return Array(repeatTimes).fill([str.concat(fullAddSep)]).join(separator);
}

const objWithSpecificCoercion = {
  [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};

module.exports = {
  repeater
};
