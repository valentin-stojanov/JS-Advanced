function magicMatrices(matrix) {
    let isMagicMatrix = true;
    let sum = 0
    const resultSums = [];
    let cowSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        rowSum = matrix[i].reduce((a, b) => a + b, 0);
        cowSum = getCowSum(matrix, i);
        if (rowSum !== cowSum) {
            isMagicMatrix = false
            break;
        } else {
            resultSums.push(rowSum);
            resultSums.push(cowSum);
        }
    }

    for (const element of resultSums) {
        if (element !== cowSum){
            isMagicMatrix = false;
            break;
        }
    }

    console.log(isMagicMatrix);

    function getCowSum(matrix, i) {
        let cowSum = 0;
        for (const row of matrix) {
            cowSum += row[i];
        }

        return cowSum;
    }
}

magicMatrices(
 [[0, 0, 0],
 [0, 1, 0],
 [0, 0, 0]]
)