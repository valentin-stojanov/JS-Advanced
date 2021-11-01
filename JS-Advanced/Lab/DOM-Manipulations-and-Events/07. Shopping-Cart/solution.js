function solve() {
    const shoppingCardElement = document.querySelector('.shopping-cart');
    shoppingCardElement.addEventListener('click', onClick);

    const productsAndPrice = {};
    let addedProducts = '';
    const resultElement = document.querySelector('textarea');

    function onClick(ev) {
        const targetedElement = ev.target;
        if (targetedElement.classList.contains('add-product')) {
            const product = targetedElement.parentNode.parentNode;
            const productName = product.querySelector('.product-title').textContent;
            const productPrice = Number(product.querySelector('.product-line-price').textContent);
            addedProducts += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

            if (productsAndPrice[productName] === undefined) {
                productsAndPrice[productName] = 0;
            }

            productsAndPrice[productName] += productPrice;
            resultElement.textContent = addedProducts;

        }

        if (targetedElement.classList.contains('checkout')) {
            let totalPrice = 0;
            const productList = [];
            Object.entries(productsAndPrice).forEach(entry => {
                totalPrice += entry[1];
                productList.push(entry[0]);
            });
            addedProducts += `You bought ${productList.join(', ')} for ${totalPrice.toFixed(2)}.\n`
            resultElement.textContent = addedProducts;

            targetedElement.parentNode
                .querySelectorAll('button')
                .forEach( b => b.disabled = true);
        }

        // resultElement.textContent = addedProducts;


    }
}