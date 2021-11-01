function sameNumber(number) {
    let strNumber = number.toString();
    let containsSameNumbers = true;
    let sumOfDigits = 0;

    for (let i = 0; i < strNumber.length; i++) {
        if (strNumber[0] !== strNumber[i]) {
            containsSameNumbers = false;
        }
        sumOfDigits += Number(strNumber[i]);
    }

    console.log(containsSameNumbers);
    console.log(sumOfDigits);
}

sameNumber(1234);