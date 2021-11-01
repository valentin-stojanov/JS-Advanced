function addItem() {

    const [newItemText, newItemValue] =Array
        .from(document.querySelectorAll('input[type="text"]'));

    const optionElement = document.createElement('option');
    optionElement.textContent = newItemText.value;
    optionElement.value = newItemValue.value;

    const selectMenu = document.querySelector('div select#menu');
    selectMenu.appendChild(optionElement);

    newItemValue.value = '';
    newItemText.value = '';

}