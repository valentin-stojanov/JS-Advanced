function solve() {
    const text = document.getElementById('text').value
        .toLowerCase();
    const convention = document.getElementById('naming-convention').value;

    let result = '';
    const textAssArray = text.split(' ');

    if (convention === 'Camel Case') {
        for (let i = 1; i < textAssArray.length; i++) {
            textAssArray[i] = convertFirstChar(textAssArray[i]);
        }
        result = textAssArray.join('');
    } else if (convention === 'Pascal Case') {
        for (let i = 0; i < textAssArray.length; i++) {
            textAssArray[i] = convertFirstChar(textAssArray[i]);
        }
        result = textAssArray.join('');
    } else {
        result = 'Error!';
    }

    document.getElementById('result').textContent = result;

    function convertFirstChar(word) {
        return word[0].toUpperCase() + word.slice(1);
    }
}