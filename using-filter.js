function filterShortStateName(arr) {
    let result = arr.filter(word => word.length < 7);
    return result;
}


function filterStartVowel (string)  {
    const result = string.filter(word => ['a', 'e', 'i', 'o', 'u'].includes(word[0]));
    return result.length >0
}


function filter5Vowels(strings) {
    const vowels = ["a", "e", "i", "o", "u"];
    return strings.filter(str => {
        const numVowels = str.split("").filter(char => vowels.includes(char)).length;
        return numVowels >= 5;
    });
}


function filter1DistinctVowel(strings) {
    const distinctVowels = ['a', 'e', 'i', 'o', 'u'];
    return strings.filter(str => {
        const vowels = new Set(str.toLowerCase().match(/[aeiou]/g));
        return vowels.size === 1 && distinctVowels.includes(vowels.values().next().value);
    });
}

function multiFilter(string) {
    return string.filter(obj => (
        obj.capital.length >= 8 &&
        !/^[aeiou]/i.test(obj.name) &&
        /[aeiou]/i.test(obj.tag) &&
        obj.region !== "South"
    ));
}

