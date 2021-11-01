function wordsUppercase(text) {

    const regExp = /\w+/g;
    const result = [...text.matchAll(regExp)];
    const uppercaseResult = [];

    for (let i = 0; i < result.length; i++) {
        uppercaseResult.push(result[i][0].toUpperCase());
    }

    console.log(uppercaseResult.join(', '));
}

wordsUppercase('Hi, how are you?');