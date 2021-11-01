function agregateElements(arr) {
    let sum = 0;
    let revSum = 0;
    let concat = '';

    for(let i = 0; i < arr.length; i++){
        let element = arr[i];
        sum += element;
        revSum += element**-1;
        concat += element;
    }
    console.log(sum);
    console.log(revSum);
    console.log(concat);

}

agregateElements([1, 2, 3]);
agregateElements([2, 4, 8, 16]);