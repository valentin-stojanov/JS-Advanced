function sumFirstLast(arr) {
    const firstNumber = Number(arr[0]);
    const lastNumber = Number(arr[arr.length - 1]);
    return firstNumber + lastNumber;
}

console.log(sumFirstLast(['20']));