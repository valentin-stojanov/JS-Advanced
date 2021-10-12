function solve() {

    const textAreaFields = document.querySelectorAll('div#exercise textarea');
    const inputField = textAreaFields[0];
    const outputField = textAreaFields[1];
    const buttons = document.querySelectorAll('div#exercise button');
    const tBody = document.querySelector('table.table tbody');

    const generateBtn = buttons[0];
    const buyBtn = buttons[1];

    generateBtn.addEventListener('click', generateContent);
    buyBtn.addEventListener('click', buy);

    function buy(e){
        const checkedItems = [...document.querySelectorAll('input[type="checkbox"]')]
            .filter(checkBox => checkBox.checked === true);

        let totalPrice = 0;
        let totalDecorationFactor = 0;
        const itemNames = [];

        checkedItems.forEach(item => {
            const cells = item.parentElement.parentElement.children;
            itemNames.push(cells[1].textContent);
            totalPrice += Number(cells[2].textContent);
            totalDecorationFactor += Number(cells[3].textContent);
        });
        outputField.textContent = `Bought furniture: ${itemNames.join(', ')}
Total price: ${totalPrice.toFixed(2)}
Average decoration factor: ${totalDecorationFactor / itemNames.length}`
    }

    function generateContent(e) {
        const furnitureObjects = JSON.parse(inputField.value);

        furnitureObjects
            .map(generateRows)
            .forEach(r => tBody.appendChild(r));

        function generateRows(furniture) {
            const tr = document.createElement('tr');

            const imgCell = document.createElement('td');
            const img = document.createElement('img');
            img.src = furniture.img;
            imgCell.appendChild(img);

            const pCell = document.createElement('td');
            const pName = document.createElement('p');
            pName.textContent = furniture.name;
            pCell.appendChild(pName);

            const priceCell = document.createElement('td');
            const pPrice = document.createElement('p');
            pPrice.textContent = furniture.price;
            priceCell.appendChild(pPrice);

            const decorationCell = document.createElement('td');
            const decorationP = document.createElement('p');
            decorationP.textContent = furniture.decFactor;
            decorationCell.appendChild(decorationP);

            const checkBoxCell = document.createElement('td');
            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checkBoxCell.appendChild(checkBox);

            tr.appendChild(imgCell);
            tr.appendChild(pCell);
            tr.appendChild(priceCell);
            tr.appendChild(decorationCell);
            tr.appendChild(checkBoxCell);

            return tr;
        }
    }
}