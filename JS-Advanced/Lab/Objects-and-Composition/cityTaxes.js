function cityTaxes(name, population, treasury) {
    const city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            return this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            return this.population = Math.floor(this.population + this.population * (percentage / 100)) ;
        },
        applyRecession(percentage) {
            return  this.treasury = Math.floor(this.treasury - this.treasury * (percentage / 100)) ;
        }

    };

    return city;
}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

