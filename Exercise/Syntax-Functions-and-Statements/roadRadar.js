function roadRadar(speed, area) {
    let limit;
    
    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }

    if( speed > limit){
     const difference = speed - limit;
     const status = getStatus(difference) ;

     console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
     
    } else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }

    function getStatus(speeding){
        let message;
        if(speeding <= 20){
            message = 'speeding';
        } else if (speeding <= 40 ){
            message = 'excessive speeding';
        } else {
            message = 'reckless driving';
        }
        return message;
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');