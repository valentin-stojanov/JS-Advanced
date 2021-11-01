function attachEventsListeners() {
    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
        // milliseconds: 86400000
    }

    function getConvertedUnits(unit, unitValue) {
        const inDays = unitValue / ratios[unit];
        return {
            days: inDays,
            hours: ratios.hours * inDays,
            minutes: ratios.minutes * inDays,
            seconds: ratios.seconds * inDays,
            // milliseconds: ratios.milliseconds * inDays
        }
    }

    document.querySelector('main').addEventListener('click', convert);

    function convert(ev) {
        if (ev.target.type === 'button') {
            const divElements = ev.target.parentElement.children;
            const unit = divElements[1].id;
            const unitValue = Number(divElements[1].value);
            const convertedUnits = getConvertedUnits(unit, unitValue);

            for (const unitName in convertedUnits) {
                const selector = `#${unitName}`;
                console.log(selector);
                document.querySelector(selector).value = convertedUnits[unitName];
            }
        }
    }
}