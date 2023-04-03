function filterShortStateName (string) {
let result = string.filter(word => word.length > 7)
    console.log(result)
    return result.length >0
}

console.log(filterShortStateName(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']))

function filterStartVowel (string)  {
    const result = string.filter(word => ['a', 'e', 'i', 'o', 'u'].includes(word[0]));
    console.log(result)
    return result.length >0
}

console.log(filterStartVowel(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']))

function filter5Vowels(strings) {
    const vowels = ["a", "e", "i", "o", "u"];
    return strings.filter(str => {
        const numVowels = str.split("").filter(char => vowels.includes(char)).length;
        return numVowels >= 5;
    });
}

console.log(filter5Vowels(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']))

function filter1DistinctVowel(strings) {
    const distinctVowels = ['a', 'e', 'i', 'o', 'u'];
    return strings.filter(str => {
        const vowels = new Set(str.toLowerCase().match(/[aeiou]/g));
        return vowels.size === 1 && distinctVowels.includes(vowels.values().next().value);
    });
}

console.log(filter1DistinctVowel(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']))

function multiFilter(string) {
    return string.filter(obj => (
        obj.capital.length >= 8 &&
        !/^[aeiou]/i.test(obj.name) &&
        /[aeiou]/i.test(obj.tag) &&
        obj.region !== "South"
    ));
}

