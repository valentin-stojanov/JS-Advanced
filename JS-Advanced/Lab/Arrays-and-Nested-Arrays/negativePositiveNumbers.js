function negativePositiveNumbers(arr) {
    const result = [];
    for (let num of arr) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
       console.log( result.join('\n'));
}

negativePositiveNumbers([3, -2, 0, -1]);