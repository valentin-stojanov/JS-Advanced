const inputElement = document.getElementById('location');
const submitBtn = document.getElementById('submit');
const forecastElement = document.getElementById('forecast');
const currentForecastElement = document.getElementById('current');
const upcomingForecastElement = document.getElementById('upcoming');
const content = document.querySelector("#content");

let hasError = false;

function attachEvents() {
    submitBtn.addEventListener('click', displayForecast);
}

attachEvents();

async function displayForecast() {


    submitBtn.disabled = true;
    //Clean information, before next http request.
    const forecast = document.querySelectorAll("#current > div.forecast");
    const upcoming = document.querySelectorAll("#upcoming > div.forecast-info");
    if (forecast.length !== 0 && upcoming.length !== 0) {
        forecast.forEach(node => node.remove());
        upcoming.forEach(node => node.remove());
    }

    const responseData = await getWeatherInformation();
    if (responseData instanceof Error) {
        const errorElement = insertElement('div', ['error'], responseData.message,
            content);
        submitBtn.disabled = false;
        hasError = true;
        return;
    }

    if (hasError) {
        document.querySelector("#content > div.error").remove();
        hasError = false;
    }

    const [todayWeatherData, upcomingWeatherData] = responseData;
    console.log(todayWeatherData, upcomingWeatherData);
    const symbols = {
        'Sunny': '&#x2600',//☀
        'Partly sunny': '&#x26C5',//⛅
        'Overcast': '&#x2601',//☁
        'Rain': '&#x2614',//☂
        'Degrees': '&#176'//°
    }

    const divElementClassForecasts = insertElement('div',
        ['forecast'],
        '',
        currentForecastElement)

    const spanConditionSymbolElement = insertElement('span',
        ['condition', 'symbol'],
        symbols[todayWeatherData.forecast.condition],
        divElementClassForecasts);

    const spanConditionElement = insertElement('span',
        ['condition'],
        '', divElementClassForecasts);

    const spanForecastCityName = insertElement('span',
        ['forecast-data'],
        todayWeatherData.name,
        spanConditionElement);

    const spanForecastTemperatures = insertElement('span',
        ['forecast-data'],
        `${todayWeatherData.forecast.low}${symbols.Degrees}/${todayWeatherData.forecast.high}${symbols.Degrees}`,
        spanConditionElement
    )

    const spanForecastCondition = insertElement('span',
        ['forecast-data'],
        `${todayWeatherData.forecast.condition}`,
        spanConditionElement);

    const divElementClassUpcoming = insertElement('div',
        ['forecast-info'],
        '',
        upcomingForecastElement);

    for (const dayForecast of upcomingWeatherData.forecast) {
        const upcomingSpanElement = insertElement('span',
            ['upcoming'],
            '',
            divElementClassUpcoming);

        insertElement('span',
            ['symbol'],
            `${symbols[dayForecast.condition]}`,
            upcomingSpanElement);

        insertElement('span',
            ['forecast-data'],
            `${dayForecast.low}${symbols.Degrees}/${dayForecast.high}${symbols.Degrees}`,
            upcomingSpanElement);

        insertElement('span',
            ['forecast-data'],
            `${dayForecast.condition}`,
            upcomingSpanElement);
    }

    forecastElement.style = 'display';
    submitBtn.disabled = false;

    function insertElement(elementType, classNamesArr, data, appendTo) {
        const htmlElement = document.createElement(elementType);
        appendTo.appendChild(htmlElement);
        htmlElement.innerHTML = data;
        htmlElement.classList.add(...classNamesArr);
        return htmlElement;

    }
}


async function getWeatherInformation() {

    try {
        const url = 'http://localhost:3030/jsonstore/forecaster/locations';

        const res = await fetch(url);
        if (res.status !== 200) {
            throw new Error('Error ' + res.status);
        }
        const data = await res.json();

        const location = inputElement.value;
        const cityObj = data.find(e => e.name === location);
        if (cityObj === undefined) {
            throw new Error(`Error location ${location} not found`);
        }

        const urlTodayWeather = `http://localhost:3030/jsonstore/forecaster/today/${cityObj.code}`;
        const urlUpcomingWeather = `http://localhost:3030/jsonstore/forecaster/upcoming/${cityObj.code}`;

        const [todayWeatherRes, upcomingWeatherRes] = await Promise.all([
            fetch(urlTodayWeather),
            fetch(urlUpcomingWeather)
        ]);

        if (todayWeatherRes.status !== 200 || upcomingWeatherRes.status !== 200) {
            throw new Error(`Error: ${urlTodayWeather} -> ${todayWeatherRes.status}\n \t${urlUpcomingWeather} -> ${upcomingWeatherRes.status} `);
        }

        return Promise.all([
            todayWeatherRes.json(),
            upcomingWeatherRes.json()
        ]);

    } catch (e) {
        return e;
    }
}
