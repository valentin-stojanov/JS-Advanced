function printEveryNthElement(arr, n) {
    const result = [];

    for (let i = 0; i < arr.length; i += n) {
        result.push(arr[i]);
    }

    return result;
}

printEveryNthElement(['1', 
'2',
'3', 
'4', 
'5'], 
6

);