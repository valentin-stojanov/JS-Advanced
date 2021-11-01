function townPopulation(arr){
    const towns = {};

    for (const element of arr) {
        let [city, population] = element.split(' <-> ');
        population = Number(population);
        if (towns[city] !== undefined){
            population += towns[city];
        }
        towns[city] = population;
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`)
    }
}

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']

);