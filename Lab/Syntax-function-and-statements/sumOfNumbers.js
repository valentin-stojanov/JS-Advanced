function sumOfNumbers(n, m) {
    n = Number(n);
    m = Number(m);
    
    let sum = n <= m ? (n + m) * (m - n + 1) / 2 : 0;
    
    // let sum = 0;
    // for (let i = n; n <= m; n++) {
    //     sum += n;
    // }

    console.log(sum);
}

sumOfNumbers(-5, -10);