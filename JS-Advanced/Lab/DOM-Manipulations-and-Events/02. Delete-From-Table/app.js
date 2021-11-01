function deleteByEmail() {
    const inputField = document.querySelector('input[name="email"]');
    const searchText = inputField.value;

    const rows = document.querySelectorAll('tbody tr');
    let deletedRow = false;
    for (const row of rows) {
        const email = row.children[1];
        if (searchText === email.textContent) {
            row.remove();
            deletedRow = true;
        }
    }
    const resultElement = document.getElementById('result');

    if (deletedRow) {
        resultElement.textContent = 'Deleted'
    } else {
        resultElement.textContent = 'Not found.'
    }
}
