function stringLength(... input){
    let length = 0;
    for (const inputElement of input) {
        length += inputElement.length;
    }
    console.log(length);
    console.log(Math.floor(length / input.length));
}

stringLength('chocolate', 'ice cream', 'cake', 'pasta', '5', '22.3');