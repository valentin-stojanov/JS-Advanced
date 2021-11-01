function addItem() {
    const newItem = document.querySelector('input#newItemText');
    const newItemText = newItem.value;
    const newItemValue = document.querySelector('input#newItemValue');
    const newItemValueText = newItemValue.value;

    const newOption = document.createElement('option');
    newOption.textContent = newItemText;
    newOption.value = newItemValueText;

    document.querySelector('select#menu').appendChild(newOption);

    newItem.value = '';
    newItemValue.value = '';

}