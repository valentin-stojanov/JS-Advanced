const sendBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');
const inputNameElement = document.querySelector('[name="author"]');
const inputMessageElement = document.querySelector('[name="content"]');
const textAreaElement = document.getElementById('messages');

function attachEvents() {
    refreshBtn.addEventListener('click', getMessages);
    sendBtn.addEventListener('click', sengMessage);
}

attachEvents();

async function getMessages(e) {
    const url = 'http://localhost:3030/jsonstore/messenger';

    const res = await fetch(url);
    const data = await res.json();
    const messages = Object.values(data);
    textAreaElement.textContent = messages
        .map((e) => `${e.author}: ${e.content}`)
        .join('\n');
}

async function sengMessage(event) {
    const url = 'http://localhost:3030/jsonstore/messenger';

    const message = {
        author: `${inputNameElement.value}`,
        content: `${inputMessageElement.value}`
    }

    const res = await fetch(url, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(message)
    });

    inputNameElement.value = '';
    inputMessageElement.value = '';
}