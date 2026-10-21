class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const group = new Map()

for (const words of strs) {
const key = words.split("").sort().join("")

if (!group.has(key)) {
    group.set(key, [])
}
group.get(key).push(words)
    }
    return Array.from(group.values())
}
}
