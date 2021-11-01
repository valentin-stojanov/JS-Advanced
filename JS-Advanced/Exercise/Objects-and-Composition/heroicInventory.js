function heroicInventory(input){
    const result = [];

        input.forEach(e => {
        let [name, level, items] = e.split(' / ');
        items = items? items.split(', ') : [];
        result.push({name, level: Number(level), items});
    });

    return JSON.stringify(result);
}

console.log( heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));