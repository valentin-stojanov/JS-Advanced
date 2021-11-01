function previousDay(year, month, day) {
    const dateAsString = year + '-' + month + '-' + day;
    const dateBeforeOneDay = new Date(dateAsString);
    dateBeforeOneDay.setDate(day - 1);
    console.log(dateBeforeOneDay.getFullYear() + '-' + (Number(dateBeforeOneDay.getMonth()) + 1) + '-' + dateBeforeOneDay.getDate());

}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);
