function storeCatalogue(arr){
    const productCatalogue = {};

    for (const element of arr) {
        let [productName, price] = element.split(' : ');
        price = Number(price);
        let index = productName[0];
        if (!productCatalogue[index]){
            productCatalogue[index] = {};
        }
        productCatalogue[index][productName] = price;
    }

    const categories = Object.keys(productCatalogue)
        .sort((a,b) => a.localeCompare(b));

    for (const category of categories) {
        console.log(category);
        const sorted = Object.entries(productCatalogue[category])
            .sort((a,b) => a[0].localeCompare(b[0]));
        sorted.forEach( e => {
            console.log(`  ${e[0]}: ${e[1]}`);
        });
    }

}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);