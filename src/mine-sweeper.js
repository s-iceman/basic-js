/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let field = matrix.map(row => row.map(e => 0));
  for (let i = 0; i < matrix.length; ++i){
    let row = matrix[i];
    for (let j = 0; j < row.length; ++j){
      if (row[j]){
        if (i > 0){
          if (j > 0){
            ++field[i - 1][j - 1];
          }
          ++field[i - 1][j];
          if (j < row.length - 1){
            ++field[i - 1][j + 1];
          }
        }

        if (j > 0){
          ++field[i][j - 1];
        }
        if (j < row.length - 1){
          ++field[i][j + 1];
        }

        if (i < matrix.length - 1){
          if (j > 0){
            ++field[i + 1][j - 1];
          }
          ++field[i + 1][j];
          if (j < row.length - 1){
            ++field[i + 1][j + 1];
          }
        }
      }
    };
  }

  return field;
}

module.exports = {
  minesweeper
};
