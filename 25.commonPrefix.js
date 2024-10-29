// 25.  Write a function to find the longest common prefix among an array of strings.

function longestCommonPrefix(strs) {
    if (!strs.length)
        return "";
    strs.sort();
    const first = strs[0];
    const last = strs[strs.length - 1];
    let i = 0;
    while (i < first.length && first[i] === last[i]) {
        i++;
    }
    return first.substring(0, i);
}


const strs = ["flower", "flow", "flght"];
console.log("Longest Common Prefix:", longestCommonPrefix(strs));