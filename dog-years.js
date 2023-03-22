const planets={
    earth:1,
    mercury:0.2408467,
    venus:0.61519726,
    mars:1.8808158,
    jupiter:11.862615,
    saturn:29.447498,
    uranus:84.016846,
    neptune:164.79132
}

function dogYears(planet,seconds) {
    const hearth_year=seconds/60/60/24/365.25
    return hearth_year / planets[planet]
}