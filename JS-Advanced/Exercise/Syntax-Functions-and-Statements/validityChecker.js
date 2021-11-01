function validityChecker(x1, y1, x2, y2) {

    console.log(`{${x1}, ${y1}} to {${0}, ${0}} is ${isValidDistance(getDistance(x1, y1, 0, 0))}`);

    console.log(`{${x2}, ${y2}} to {${0}, ${0}} is ${isValidDistance(getDistance(x2, y2, 0, 0))}`);

    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValidDistance(getDistance(x1, y1, x2, y2))}`);


    function isValidDistance(distance) {
        return Number.isInteger(distance) ? 'valid' : 'invalid';
    }

    function getDistance(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }
}

validityChecker(-1, 1, 1, -1);