function focused() {
    const elements = Array.from(document.querySelectorAll('div div'));

    for (const element of elements) {
        const inputField = element.children[1];
        inputField.addEventListener('focus', onFocus);
        inputField.addEventListener('blur', onBlur);
    }


    function onFocus(ev){
        const divElement = ev.target.parentNode;
        divElement.className = 'focused';
    }
    function onBlur(ev){
        const divElement = ev.target.parentNode;
        divElement.className = 'blur';

    }
}