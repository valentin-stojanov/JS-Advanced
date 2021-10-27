function ticketMenager(ticketsInfo, sortCriteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const ticketsArray = [];

    ticketsInfo
        .forEach(tinfo => {
            let [destination, price, status] = tinfo.split('|');
            ticketsArray.push(new Ticket(destination, price, status))
        });
        
        const sorted = ticketsArray.sort((a, b) => {
            
            a[sortCriteria] - b[sortCriteria];
        });

        console.log(sorted.forEach(t => console.log(t)));
    


}

ticketMenager(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
);


