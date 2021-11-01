function increasingSubset(input) {
    
    let biggerNumebr = input[0];
    return input.reduce((accumulated, current) => {
        if(current >= biggerNumebr){
            biggerNumebr = current;
            accumulated.push(current)
        }
        return accumulated;
    }, [])

    //--------------------------------------
    // const result = [input[0]];
    // let biggerNumebr = input[0];
    // for (let i = 1; i < input.length; i++) {
    //     let currentNumber = input[i];
    //     if(biggerNumebr <= currentNumber){
    //         biggerNumebr = currentNumber;
    //         result.push(biggerNumebr);
    //     }
    // }

    // return result;
    //--------------------------------------
    // let biggerNumber = input[0];
    // const result = input.filter(e => {
    //     if(e >= biggerNumber){
    //         biggerNumber = e;
    //         return true;
    //     }
    //     return false;
    // })

    // return result;
    //-------------------------------------
    
}

console.log(increasingSubset(
    [1, 
        3, 
        8, 
        4, 
        10, 
        12, 
        3, 
        2, 
        24]
));