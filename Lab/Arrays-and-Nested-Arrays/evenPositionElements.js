function evenPositionElements(arr) {
    // const output = [];
    // for (let i = 0; i < arr.length; i += 2) {
    //     output.push(arr[i]);
    // }
    // console.log(output.join(' '));

    console.log(arr.filter((e, i) => i % 2 == 0)
    .join(' '));
}

evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);