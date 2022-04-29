const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

const SPRING = 'spring';
const SUMMER = 'summer';
const AUTUMN = 'autumn';
const WINTER = 'winter';
const ERROR = 'Invalid Date';
const INVALID_ARG_MSG = 'Invalid date!';
const EMPTY_ARG_MSG = 'Unable to determine the time of year!'


function getSeason(date) {
  if (!date){
    return EMPTY_ARG_MSG;
  }

  const dateObj = new Date(date);
  if (dateObj == ERROR){
    throw new Error(INVALID_ARG_MSG);
  }
  const month = dateObj.getMonth();
  if (2 <= month && month <= 4){ return SPRING; }
  if (5 <= month && month <= 7){ return SUMMER; }
  if (8 <= month && month <= 10){ return AUTUMN; }
  return WINTER;
}

module.exports = {
  getSeason
};
