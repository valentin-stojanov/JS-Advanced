const loadBtn = document.getElementById('btnLoad');
const createBtn = document.getElementById('btnCreate');
const phonebookListElement = document.getElementById('phonebook');
const personInputElement = document.getElementById('person');
const phoneInputElement = document.getElementById('phone');

function attachEvents() {
    loadBtn.addEventListener('click', createPhonebook);
    createBtn.addEventListener('click', onCreate);
    phonebookListElement.addEventListener('click', deleteHandler);
}

attachEvents();

async function deleteHandler(event){
    const id = event.target.dataset.id;
    if (id){
        await deletePhoneEntry(id);
        createPhonebook();
    }
}

async function createPhonebook(event) {
    const phonebook = await getElements();

    phonebookListElement.replaceChildren();
    phonebook.map(createElement)
        .forEach(e => phonebookListElement.appendChild(e));
}

async function onCreate(event) {
    const person = personInputElement.value;
    const phone = phoneInputElement.value;

    createPhonebookEntry({person, phone});

    personInputElement.value = '';
    phoneInputElement.value = '';
    createPhonebook();
}

async function deletePhoneEntry(id){
    const url = 'http://localhost:3030/jsonstore/phonebook/' + id;

    const res = await fetch(url, {
        method: 'delete',
        body: id
    });
}

async function getElements() {
    const url = 'http://localhost:3030/jsonstore/phonebook';

    const res = await fetch(url);
    const data = await res.json();

    return Object.values(data);
}

function createElement(info) {
    const liElement = document.createElement('li');
    liElement.textContent = `${info.person}: ${info.phone}`;

    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'Delete';
    btnDelete.dataset.id = info._id;

    liElement.appendChild(btnDelete);
    return liElement;
}

async function createPhonebookEntry(entry) {
    const url = 'http://localhost:3030/jsonstore/phonebook';

    const res = await fetch(url, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(entry)
    })

    if (res.status !== 200){
        alert(res.statusText);
    }
    console.log(res.statusText)

}


