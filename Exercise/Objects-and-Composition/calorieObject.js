function calorieObject(input) {
    const result = {};

    for (let i = 0; i < input.length; i += 2) {
        let product = input[i];
        let calories = Number(input[i + 1]);
        result[product] = calories;
    }
    return result;
}

console.log( calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));