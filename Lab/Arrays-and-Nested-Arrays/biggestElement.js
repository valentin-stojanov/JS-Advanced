function biggestElement(matrix){
    let maxElement = matrix[0][0];

    for (const row of matrix) {
        for (const rowElement of row) {
            if (rowElement > maxElement){
                maxElement = rowElement;
            }
        }
    }
    console.log(maxElement);
}

biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]

)
