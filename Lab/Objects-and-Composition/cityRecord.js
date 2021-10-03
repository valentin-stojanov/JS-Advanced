function cityRecord(name, population, treasury){
    // const city = {};
    // city.name = name;
    // city.population = population;
    // city.treasury = treasury;


    return {
        name: name,
        population: population,
        treasury: treasury
    };
}

console.log( cityRecord('Tortuga',
    7000,
    15000
));