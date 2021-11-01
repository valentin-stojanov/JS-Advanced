function timeToWalk(steps, footprint, studentSpeed) {

    studentSpeed *= 1000 / 3600; // conversion from km/h -> m/s
    const distanceToWalk = steps * footprint; // distance in meters
    const numberOfRests = Math.floor(distanceToWalk / 500);
    const timeForRests = numberOfRests * 1 * 60;// time in seconds
    const timeForWalk = Math.round(distanceToWalk / studentSpeed); //time in seconds
    let totalTimeInSeconds = timeForWalk + timeForRests;

    const hours = Math.floor(totalTimeInSeconds / 3600);
    totalTimeInSeconds -= hours * 3600;

    const minutes = Math.floor(totalTimeInSeconds / 60);
    totalTimeInSeconds -= minutes * 60;

    const seconds = totalTimeInSeconds;

    console.log(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);

    function pad(number) {
        const numAsStr = number.toString();
        if (numAsStr.length > 1) {
            return numAsStr;
        } else {
            return '0' + numAsStr;
        }
    }
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);