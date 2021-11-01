function pieceOfPie(input, startSelection, endSelection) {
    const result = [...input];
    const startIndex = result.indexOf(startSelection);
    const endIndex = result.indexOf(endSelection);
    return result.slice(startIndex, endIndex + 1);
}

console.log(pieceOfPie(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));