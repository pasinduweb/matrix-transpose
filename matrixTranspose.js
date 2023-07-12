const transposeMatrix = (matrix) => {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const transposedMatrix = [];

  for (let i = 0; i < numCols; i++) {
    transposedMatrix[i] = [];

    for (let j = 0; j < numRows; j++) {
      transposedMatrix[i][j] = matrix[j][i];
    }
  }

  return transposedMatrix;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const transposedMatrix = transposeMatrix(matrix);

for (let row of transposedMatrix) {
  console.log(row.join(' '));
}
// --- ALGORITHM END ---

// --- Below Things for Testing Purposes ---

// Added from 'localBranch-function' branch
const localBranch = () => {
  console.log("Branch Created on Local Machine");
};

// Added from 'remoteBranch-function' branch
const remoteBranch = () => {
  console.log("Branch Created on Remote Server");
};

localBranch();
remoteBranch();
