function addItem() {
    const itemTextElement = document.querySelector('#newItemText');

    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    button.addEventListener('click', removeElement);

    const li = document.createElement('li');
    li.textContent = itemTextElement.value;
    li.appendChild(button);

    const itemList = document.querySelector('#items');
    itemList.appendChild(li);

    itemTextElement.value = '';

    function removeElement(ev) {
        const row = ev.target.parentNode;
       row.remove();
    }
}