function gcd(x, y) {
    let min = Math.min(x, y);
    let max = Math.max(x, y);

    let reminder = 1;

    do {
        reminder = max % min;
        max = min;
        min = reminder;
    } while (reminder !== 0);

    console.log(max);
}

gcd(48, 18);