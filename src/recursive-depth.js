/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor(){
    this.calculateDepth = this.calculateDepth.bind(this);
  }

  calculateDepth(arr) {
    if (!arr){
      return 0;
    }

    if (arr.length == 0){
      return 1;
    }

    if (Array.isArray(arr)){
      return 1 + Math.max(...arr.map(this.calculateDepth));
    }
    else {
      return 0;
    }
  }
}

module.exports = {
  DepthCalculator
};
