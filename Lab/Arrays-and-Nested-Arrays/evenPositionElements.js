function evenPositionElements(arr) {
    const output = [];
    for (let i = 0; i < arr.length; i += 2) {
        output.push(arr[i]);
    }
    console.log(output.join(' '));
}

evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);