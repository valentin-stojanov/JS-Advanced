function sumOfNumbers(n, m) {
    n = Number(n);
    m = Number(m);
    // const sum = (n + m) * (m - n + 1) / 2;
    let sum = 0;
    for (let i = n; n <= m; n++) {
        sum += n;
    }

    console.log(sum);
}

sumOfNumbers(1, 10);