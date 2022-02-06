


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let dp = [];
    dp[0] = nums[0];
    let startIndex = -1;
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        if (dp[i] === nums[i]) {
            startIndex = i;
        }
    }
    let maxIndex = dp.findIndex(x => x === Math.max(...dp));

    return nums.splice(startIndex, maxIndex - startIndex + 1);
};


console.log(JSON.stringify(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])));