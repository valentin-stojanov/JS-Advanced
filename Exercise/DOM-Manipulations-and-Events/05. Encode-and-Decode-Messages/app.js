function encodeAndDecodeMessages() {
    const mainElement = document.querySelector('#main');
    mainElement.addEventListener('click', encodeOrDecode);

    function encodeOrDecode(e) {
        const btn = e.target;
        const message = mainElement
            .querySelectorAll('div')[0]
            .querySelector('textarea');
        const lastReceivedMessage = mainElement
            .querySelectorAll('div')[1]
            .querySelector('textarea');

        if (btn.textContent === 'Encode and send it') {
            const messageText = message.value;
            lastReceivedMessage.value = encode(messageText);
            message.value = '';

        } else if (btn.textContent === 'Decode and read it') {
            lastReceivedMessage.value = decode(lastReceivedMessage.value);
        }
    }

    function encode(message) {
        const encodedAsciiSymbols = [];
        for (let i = 0; i < message.length; i++) {
            encodedAsciiSymbols.push(message.charCodeAt(i) + 1);
        }
        return String.fromCharCode(...encodedAsciiSymbols);
    }

    function decode(message) {
        const decodedAsciiSymbols = [];
        for (let i = 0; i < message.length; i++) {
            decodedAsciiSymbols.push(message.charCodeAt(i) - 1);
        }
        return String.fromCharCode(...decodedAsciiSymbols);
    }
}