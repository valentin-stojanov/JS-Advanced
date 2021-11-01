function smallestTwoNumbers(numbers){
    const clone = [...numbers];
    clone.sort((a, b) => a - b);
    console.log(clone.slice(0, 2).join(' '));
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);