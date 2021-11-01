function lastKNumbersSecuence(n, k) {
    const arr = [1];

    for (let i = 0; i < n - 1; i++) {
        let sum = 0;
        for (let j = i; j >= (i - k + 1) && j >= 0; j--) {
            sum += arr[j]
        }
        arr.push(sum);
    }

    return arr;
}

console.log(lastKNumbersSecuence(8, 2));