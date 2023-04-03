function citiesOnly(citylist) {
    return citylist
        .map(obj => obj.city)
        .filter(city => city !== undefined)
        .map(city => city.trim());
}
console.log(citiesOnly([
    {
        city: 'Los Angeles',
        temperature: '  101 °F   ',
    },
    {
        city: 'San Francisco',
        temperature: ' 84 ° F   ',
    },
])); // -> ['Los Angeles', 'San Francisco']

function upperCasingStates(citylist) {
    return citylist.map(city => {
        let formattedCity = "";
        for (let i = 0; i < city.length; i++) {
            if (city[i] === " " && i + 1 < city.length) {
                formattedCity += city[i] + city[i + 1].toUpperCase();
                i++;
            } else {
                formattedCity += city[i];
            }
        }
        return formattedCity.charAt(0).toUpperCase() + formattedCity.slice(1);
    });
}


console.log(upperCasingStates(['alabama', 'new jersey'])); // -> ['Alabama', 'New Jersey']


function fahrenheitToCelsius(temps) {
    return temps.map(temp => {
        const fahrenheit = parseInt(temp);
        const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
        return `${celsius}°C`;
    });
}


console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F'])); // -> ['20°C', '15°C', '-4°C']


function trimTemp(listmap) {
    return listmap.map(obj => ({
        ...obj,
        temperature: obj.temperature.replace(/\s+/g, '')
    }));
}

console.log(trimTemp([
    { city: 'Los Angeles', temperature: '  101 °F   ' },
    { city: 'San Francisco', temperature: ' 84 ° F   ' },
]) /* -> [
  { city: 'Los Angeles', temperature: '101°F' },
  { city: 'San Francisco', temperature: '84°F' },
] */);


function tempForecasts(cityList) {
    return cityList.map(city => {
        const temperature = city.temperature.replace(/\s+/g, '');
        const celsius = Math.floor((parseInt(temperature) - 32) * 5 / 9);
        const formatted = `${celsius}°Celsius in ${city.city}, ${upperCasingStates([city.state])[0]}`;
        return formatted;
    });
}

console.log(tempForecasts([
    {
        city: 'Pasadena',
        temperature: ' 101 °F',
        state: 'california',
        region: 'West',
    },
])); // -> ['38°Celsius in Pasadena, California']
