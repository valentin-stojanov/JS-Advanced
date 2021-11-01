function solve() {
    let input = document.getElementById('input').value;
    const sentencesArray = input
        .split('.')
        .filter(e => e.length !== 0)
        .map(e => e + '.');


    let resultToAppend = '';

    let counter = 0;
    for (let i = 0; i < sentencesArray.length; i++) {
        resultToAppend += sentencesArray[i];
        counter++
        if (counter === 3) {
            const paragraph = document.createElement('p');
            paragraph.textContent = resultToAppend;
            document.getElementById('output').appendChild(paragraph);
            resultToAppend = '';
            counter = 0;
        }
    }
    if (resultToAppend !== '') {
        const paragraph = document.createElement('p');
        paragraph.textContent = resultToAppend;
        document.getElementById('output').appendChild(paragraph);
    }
}