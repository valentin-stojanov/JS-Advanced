function fruit (fruitType, weightInGrams, pricePerKilo){
    let weight = weightInGrams / 1000;
    let price = weight * pricePerKilo;

    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruitType}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);