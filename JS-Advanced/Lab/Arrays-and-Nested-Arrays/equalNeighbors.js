function equalNeighbors(matrix) {
    let countEqualNeighbors = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j ++){
            const currentRowElement = matrix[i][j];
            const currentRowNextElement = (j + 1 < matrix[i].length ) ? matrix[i][j +1]: [];
            const nextRowElement = (i+1 < matrix.length ) ? matrix[i+1][j] : [];
            if (currentRowElement === nextRowElement){
                countEqualNeighbors++;
            }
            if (currentRowElement === currentRowNextElement){
                countEqualNeighbors++;
            }
        }
    }
    return countEqualNeighbors;
}

equalNeighbors([['2', '2', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '9', '7', '4', '4']]
)