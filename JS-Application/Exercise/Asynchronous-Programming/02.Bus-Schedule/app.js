function solve() {
    const label = document.querySelector(' #info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let stop = {
        next: 'depot'
    }

    async function depart() {
        departBtn.disabled = true;
        arriveBtn.disabled = false;

        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

        const res = await fetch(url);
        stop = await res.json();

        label.textContent = `Next stop ${stop.name}`;

    }

    function arrive() {
        arriveBtn.disabled = true;
        departBtn.disabled = false;

        label.textContent = `Arriving at ${stop.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();