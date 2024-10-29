// 23.  Write a function to find the longest substring without repeating characters in a given string.

function SubString(s) {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (char in charIndexMap && charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1;
        }
        charIndexMap[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}

const input = "abcabcbb";
console.log("Length of longest substring without repeating characters:", SubString(input));
