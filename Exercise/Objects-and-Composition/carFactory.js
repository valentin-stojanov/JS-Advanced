function carFactory(description){

    function getEngine(power){
        if (power <= 90){
            return {power: 90, volume: 1800};
        } else if (90 < power && power <= 120){
            return {power: 120, volume: 2400};
        } else {
            return {power: 200, volume: 3500};
        }
    }

    function getCarriage(color, carriage){
        return {type: carriage, color: color};
    }

    function getWheel(wheelSize){
        const wheel = new Array(4);
        if (wheelSize % 2 === 0){
            wheelSize--;
        }
        return  wheel.fill(wheelSize, 0, 4);
    }

    return {
        model: description.model,
        engine: getEngine(description.power),
        carriage: getCarriage(description.color, description.carriage),
        wheels: getWheel(description.wheelsize)
    };
}

console.log( carFactory({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }

));