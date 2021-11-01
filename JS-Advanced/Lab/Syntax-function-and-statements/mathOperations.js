function mathOperation(num1, num2, operator) {
    const x = Number(num1);
    const y = Number(num2);
    let result = 0;
    
    switch (operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '**':
            result = x ** y;
            break;
    }

    console.log(result);
}

mathOperation(5, 6, '*');