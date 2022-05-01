/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

 const SHIFT = 'a'.charCodeAt(0);
 const code = (s) => s.charCodeAt(0);
 const SIZE = 26;


class VigenereCipheringMachine {
  isOrdinary = true;

  constructor(isOrdinary){
    this.isOrdinary = (isOrdinary === undefined || isOrdinary);
  }

  isLatin(letter){
    return /^[a-zA-Z]+$/.test(letter);
  }

  process(message, key, getCodeFunc){
    this.validate(message, key);

    let res = [];
    let i = 0;
    message = message.toLowerCase();
    key = key.toLowerCase();

    for (let symbol of message){
      if (!this.isLatin(symbol)){
        res.push(symbol);
        continue;
      }

      let s = getCodeFunc(symbol, key[i++ % key.length]);
      res.push(String.fromCharCode(s));
    }
    return res;
  }

  getEncryptCode(symbol, keySymbol){
    return ((code(symbol) + code(keySymbol)) - 2 * SHIFT) % SIZE + SHIFT;
  }

  getDecryptCode(symbol, keySymbol){
    const shift = SIZE * +(code(symbol) < code(keySymbol));
    return code(symbol) + SHIFT - code(keySymbol) + shift;
  }

  encrypt(message, key) {
    let res = this.process(message, key, this.getEncryptCode);
    return this.format(res);
  }

  decrypt(message, key) {
    let res = this.process(message, key, this.getDecryptCode);
    return this.format(res);
  }

  validate(message, key){
    if (message === undefined || key === undefined){
      throw new Error('Incorrect arguments!');
    }
    return true;
  }

  format(arr){
    if (!this.isOrdinary){
      arr = arr.reverse();
    }
    return arr.join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
