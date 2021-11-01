function processOddPositions(input){
    const result = [...input];

    return  result.filter((e, i) => i % 2 !== 0)
        .map(e => e * 2)
        .reverse()
        .join(' ');
}

console.log(processOddPositions([3, 0, 10, 4, 7, 3]));

