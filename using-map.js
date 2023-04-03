function citiesOnly(citylist) {
    let listcity = []
    citylist.forEach((objet) => {
        if (objet.city) {
            listcity.push(objet.city.trim())
        }
    })
    return listcity
}

function upperCasingStates(citylist) {
    let citylistsecond = []
    for (let i = 0; i < citylist.length; i++) {
        citylistsecond[i] = ""
        for (let j = 0; j < citylist[i].length; j++) {
            if (citylist[i][j] === " " && j + 1 < citylist[i].length) {
                citylistsecond[i] += citylist[i][j] + citylist[i][j + 1].toUpperCase()
                j++
            } else {
                citylistsecond[i] += citylist[i][j]
            }
        }
        citylistsecond[i] = citylistsecond[i][0].toUpperCase() + citylistsecond[i].slice(1)
    }
    return citylistsecond
}

function fahrenheitToCelsuis(listdetempricaines) {
    let toreturn = []
    let num = 0
    const regex = /\d+/g;
    for (let i = 0; i < listdetempricaines.length; i++) {
        if (listdetempricaines[i].match(regex)) {
            num = parseInt(listdetempricaines[i]);
            num = Math.floor((num - 32) * 5 / 9)
            toreturn.push(num.toString() + "°C")
        }
    }
    return toreturn
}


function trimTemp(listmap) {
    return listmap.map(obj => {
        return {
            ...obj,
            temperature: obj.temperature.replace(/\s+/g, '')
        };
    });
}

console.log(trimTemp(trimTemp([
    { city: 'Los Angeles', temperature: '  101 °F   ' },
    { city: 'San Francisco', temperature: ' 84 ° F   ' },
]) /* -> [
  { city: 'Los Angeles', temperature: '101°F' },
  { city: 'San Francisco', temperature: '84°F' },
] */))



function tempForecasts(cityList) {
    const forecasts = [];
    cityList.forEach(city => {
        const temperature = city.temperature.replace(/\s+/g, '');
        const celsius = Math.floor((parseInt(temperature) - 32) * 5 / 9);
        const formatted = `${celsius}°Celsius in ${city.city}, ${upperCasingStates([city.state])[0]}`;
        forecasts.push(formatted);
    });
    return forecasts;
}
