function addItem() {

    const itemTextElement = document.querySelector('#newItemText');

    const li = document.createElement('li');
    li.textContent = itemTextElement.value;

    const itemList = document.querySelector('#items');
    itemList.appendChild(li);

    itemTextElement.value = '';
}