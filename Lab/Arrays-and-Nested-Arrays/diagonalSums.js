function diagonalSums(matrix) {
    let mainSum = 0;
    let secondarySum = 0;
    const length = matrix.length;
    for (let i = 0; i < length; i++) {
        mainSum += matrix[i][i];
        secondarySum += matrix[i][length - i - 1];
    }
    console.log(mainSum, secondarySum);
}

diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]

)