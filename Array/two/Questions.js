let maxSubArray = function(nums) {
    let maxSum = nums[0];
    let sum = nums.shift();
    for(let i=0; i < nums.length; i++) {
        let temp_sum = sum + nums[i];
        sum = Math.max(temp_sum, nums[i]);
        if(sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
};

let searchMatrix = function(matrix, target) {
    let m = 0;
    let n = matrix[0].length-1;
    while(m >= 0 && m < matrix.length && n >= 0 && n < matrix[0].length) {
        let val = matrix[m][n];
        if(val == target) {
            return true;
        }   else if(val > target) {
            n--;
        }   else {
            m++;
        }
    }
    return false;
};

let maxArea = function(height) {
    let maxWater = -1;
    let p1 = 0;
    let p2 = height.length-1;
    while(p1 < p2) {
        let minBar = -1;
        let distance = p2-p1;
        if(height[p1] < height[p2]) {
            minBar = height[p1];
            p1++;
        }   else if(height[p1] > height[p2]) {
            minBar = height[p2]
            p2--;
        }   else {
            minBar = height[p1];
            p1++;
            p2--;
        }
        let water = minBar * distance;
        if(water > maxWater) {
            maxWater = water;
        } 
    }
    return maxWater;
};

let threeSum = function(nums) {
    let n = nums.length;
    let number = [];
    nums.sort((a, b) => a-b);

    for(let i=0; i < n-2; i++) {
        if(i > 0 && nums[i] == nums[i-1]) {
            continue;
        }
        let j = i+1;
        let k = n -1;

        while(j < k) {
            let sum = nums[i];
            sum += nums[j];
            sum += nums[k];
            if(sum == 0) {
                number.push([nums[i], nums[j], nums[k]]);
                while(j <k && nums[j] == nums[j+1]) j++;
                while(k > j && nums[k] == nums[k-1]) k--;
                j++;
                k--;
            }   if(sum < 0) {
                j++;
            }   else if(sum > 0) {
                k--;
            }
        }
    }
    return number;

};

