function largestNumber(num1, num2, num3){
    let largestNumber = compareTwoNumbers(compareTwoNumbers( num1, num2) , num3);
    console.log(`The largest number is ${largestNumber}.`);


    function compareTwoNumbers(a, b){
        return a > b? a : b;
    }
}



largestNumber(-3, -5, -22.5);