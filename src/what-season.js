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
const ERROR_MSG = 'Invalid date!';


function getSeason(date) {
  if (!date){ return 'Unable to determine the time of year!'; }
  try {
    if (!(date instanceof Date) || isNaN(date)){
      throw new TypeError();
    }
  }
  catch (e){ throw new Error(ERROR_MSG); }

  const month = date.getMonth();
  switch (month){
    case 2:
    case 3:
    case 4:
      return SPRING;
    case 5:
    case 6:
    case 7:
      return SUMMER;
    case 8:
    case 9:
    case 10:
      return AUTUMN;
    default:
      return WINTER;
  }
}

module.exports = {
  getSeason
};
