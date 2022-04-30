/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
const DOT = '.';

function addElems(dict, elems){
  for (let elem of elems){
    if (dict[elem] !== undefined){
      dict[elem] += 1;
    }
    else {
      dict[elem] = 1;
    }
  }
}

function getDNSStats(domains) {
  let res = {};
  for (let elem of domains) {
    let dns = [];
    let startIdx = elem.lastIndexOf(DOT);
    let endIdx = elem.length
 
    while (startIdx !== -1){
      let domen = elem.slice(startIdx, endIdx);
      let fullDomen = dns.length === 0 ? domen : dns[dns.length - 1].concat(domen);
      dns.push(fullDomen);
      endIdx = startIdx;
      startIdx = elem.slice(0, startIdx).lastIndexOf(DOT);
    }
    dns.push((dns[dns.length - 1])
      .concat(DOT)
      .concat(elem.slice(0, elem.indexOf(DOT))));

      addElems(res, dns);
  };
  return res;
}

module.exports = {
  getDNSStats
};
