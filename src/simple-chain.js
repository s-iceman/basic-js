/**
 * Implement chainMaker object according to task description
 * 
 */
const SEP = '~~';
const START = '( ';
const END = ' )';


const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  createLink(value){
    return START + value + END;
  },

  addLink(value) {
    value = (value === undefined) ? '' : String(value);
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position >= this.chain.length){
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let restChain = this.chain.map(e => this.createLink(e)).join(SEP);
    this.chain = [];
    return restChain;
  }
};

module.exports = {
  chainMaker
};
