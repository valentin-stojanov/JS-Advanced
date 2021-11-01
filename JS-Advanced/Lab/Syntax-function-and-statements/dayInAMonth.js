function dayInAMonth(month, year){
    const days = new Date(year, month, 0).getDate();
    console.log(days);
}

dayInAMonth(1, 2012);