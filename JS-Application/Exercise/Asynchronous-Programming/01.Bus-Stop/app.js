async function getInfo() {

    const inputFieldelement = document.getElementById('stopId');
    const stopId = inputFieldelement.value;
    const stopNameElement = document.getElementById('stopName');
    const busesElement = document.querySelector('#buses');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`

    try {
        busesElement.replaceChildren();
        const res = await fetch(url);
        if (res.status != 200) {
            throw new Error(res.status)
        }

        const data = await res.json();
        stopNameElement.textContent = data.name;
        const busArray = Object.entries(data.buses)

        for (const busInfo of busArray) {
            const lielement = document.createElement('li');
            lielement.textContent = `Bus ${busInfo[0]} arrives in ${busInfo[1]} minutes`;
            busesElement.appendChild(lielement);
        }

    } catch (error) {
        stopNameElement.textContent = 'Error';
    }

}