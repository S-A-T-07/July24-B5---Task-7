// 4.  Write a program that determines if a given string is an anagram of another string.


function areAnagrams(s1, s2) {
    return s1.split('').sort().join('') === s2.split('').sort().join('');
}

let str1 = "listen";
let str2 = "silent";

if (areAnagrams(str1, str2)) {
    console.log(`${str1}, ${str2} is Anagram`);
} else {
    console.log(`${str1}, ${str2} is not Anagram`);
}

str1 = "gram";
str2 = "arm";

if (areAnagrams(str1, str2)) {
    console.log(`${str1}, ${str2} is Anagram`);
} else {
    console.log(`${str1}, ${str2} is not Anagram`);
}
