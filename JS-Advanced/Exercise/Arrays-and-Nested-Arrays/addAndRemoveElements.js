function addAndRemoveElements(input) {
    const result = [];
    let number = 1;
    input.forEach(element => {
        if (element === 'add') {
            result.push(number);
        }
        if (element === 'remove') {
            result.pop();
        }
        number++;
    });
    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']

);