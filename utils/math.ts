// s(x) = (x^3)/3   +  50x [m/s]

const distanceFromTime = (seconds: number) => {

    return seconds ** 3 / 3 + 50 * seconds;

};


const lightYearsFromMeters = (meters: number) => {

    return meters / 9.4607304725808e15;

};


const yearsToUniverseEnd = (secondsLeft: number) => {

    const lightYearsLeft = 1.09695 * 10 ** 9 - secondsLeft;


    return lightYearsLeft / 60 / 60 / 24 / 365.25;

};


// v(x) = x^2 + 50 m/s

const speedFromTime = (seconds: number) => seconds ** 2 + 50;


export {

    distanceFromTime,

    lightYearsFromMeters,

    yearsToUniverseEnd,

    speedFromTime,

};

