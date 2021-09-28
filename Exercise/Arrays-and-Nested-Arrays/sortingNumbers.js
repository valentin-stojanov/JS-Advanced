function sortingNumbers(numbers) {
    const sorted = numbers.sort((a, b) => a - b);
    
    const firstPartSliced = sorted.slice(0, (sorted.length / 2));
    const secondPardSliced = sorted.slice(sorted.length / 2, sorted.length);
    
    for(let i = 1; secondPardSliced.length > 0; i +=2){
        firstPartSliced.splice(i, 0, secondPardSliced.pop())
    }
   return firstPartSliced;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);