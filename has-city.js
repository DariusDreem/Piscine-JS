function hasCity(country, citys) {
    return function (city) {
        for (let i = 0; i < citys.length; i++) {
            if (citys[i] === city)
                return city + "is a city from" + country
        }
        return city + "is not a city from" + country
    }
}

