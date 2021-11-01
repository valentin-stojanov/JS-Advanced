function solution(number) {
    const initialValue = number;
    return function increment(number){
        const result = initialValue + number;
         return result;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
