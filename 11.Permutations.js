// 11.  Write a function to generate all permutations of a given string.

function getPermutations(str) {
    if (str.length <= 1) {
        return [str];
    }

    let allPermutations = [];
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        
        const remainingChars = str.slice(0, i) + str.slice(i + 1);

        const permutationsOfRemaining = getPermutations(remainingChars);

        for (const permutation of permutationsOfRemaining) {
            allPermutations.push(currentChar + permutation);
        }
    }
    return allPermutations;
}

const inputString = "abc";
const permutations = getPermutations(inputString);
console.log("Permutations:", permutations);