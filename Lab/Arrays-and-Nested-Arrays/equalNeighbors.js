function equalNeighbors(matrix) {
    let countEqualNeighbors = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j ++){
            const currentRowElement = matrix[i][j];
            const currentRowNextElement = (j + 1 < matrix[i].length ) ? matrix[i][j +1]: null;
            const nextRowElement = (i+1 < matrix.length ) ? matrix[i+1][j] : null;
            if (currentRowElement === nextRowElement || currentRowElement === currentRowNextElement){
                countEqualNeighbors++;
            }
        }
    }
    console.log(countEqualNeighbors);
}

equalNeighbors([['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]


)