function argumentInfo(...input) {
    const typeAndValueMap = {};


    for (const element of input) {
        const type = typeof element;
        if (typeAndValueMap[type] === undefined) {
            typeAndValueMap[type] = 0;
        }

        typeAndValueMap[type] += 1;
        console.log(`${type}: ${element}`);
    }

    Object.entries(typeAndValueMap)
        .sort((a, b) => b[1] - a[1])
        .forEach(e => console.log(`${e[0]} = ${e[1]}`))

}

argumentInfo('cat', 42, function () {
    console.log('Hello world!');
});