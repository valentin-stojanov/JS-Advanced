const main = document.querySelector('main');

export function showView(section){
    main.replaceChildren(section);
}

export function e(type, atributes, ...content){
    const result = document.createElement(type);

    for(let [attr, value] of Object.entries(atributes || {})){
        if(attr.substring(0, 2) == 'on'){
            result.addeventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if(typeof e == 'string' || typeof e == 'number'){
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}