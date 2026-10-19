class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map()

        for(let i=0; i<nums.length; i++){
            const partner = target - nums[i]
        
        if (seen.has(partner)){
            return [seen.get(partner), i]
        }
seen.set(nums[i], i)
        }
}
}

