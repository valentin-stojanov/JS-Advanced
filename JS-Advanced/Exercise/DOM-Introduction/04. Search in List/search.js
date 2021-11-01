function search() {
    const searchText = document.getElementById('searchText').value;
    const towns = Array.from(document.querySelectorAll('ul li'));
    let matches = 0;

    for (const town of towns) {
        if (town.textContent.includes(searchText) && searchText !== '') {
            town.style.fontWeight = 'bold'
            town.style.textDecoration = 'underline';
            matches++;
        }else {
            town.style.fontWeight = 'normal'
            town.style.textDecoration = '';
        }
    }

    document.getElementById('result').textContent = `${matches} matches found`;

}
