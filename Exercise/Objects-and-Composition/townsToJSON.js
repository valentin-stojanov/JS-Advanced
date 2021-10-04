function townsToJSON(arr){
    const result = [];
    const header = arr[0].split(/[\s]*[|][\s]*/)
    header.shift();
    header.pop();

    const town = header[0];
    const latitude = header[1];
    const longitude = header[2];

    for (let i = 1; i < arr.length; i++) {
        const obj = {};
        let [ firstEmpty, currentTown, currentLatitude, currentLongitude, lastEmpty] = arr[i].split(/\s*[|]\s*/);
        obj[town] = currentTown;
        obj[latitude] = Number(Number(currentLatitude).toFixed(2));
        obj[longitude] = Number(Number(currentLongitude).toFixed(2));
        result.push(obj);
    }

    return JSON.stringify(result);
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));