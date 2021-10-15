function areaAndVolumeCalculator(area, vol, input) {

    const result = [];
    const cubes = JSON.parse(input);
    for (const cube of cubes) {
        // cube.x = Number(cube.x);
        // cube.y = Number(cube.y);
        // cube.z = Number(cube.z);
        const currentCube = {
            area: area.apply(cube),
            volume: vol.apply(cube)
        }
        result.push(currentCube)
    }

    return result;
}

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}


console.log(areaAndVolumeCalculator(area, vol,`[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`
));