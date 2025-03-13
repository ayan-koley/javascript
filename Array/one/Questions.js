var majorityElement = function(nums) {
    let val = nums[0], freq = 1;
    for(let i=1; i < nums.length; i++) {
        if(val != nums[i]) {
            freq--;
        }   else {
            freq++;
        }
        if(freq == 0) {
            val = nums[i];
            freq = 1;
        }
    }  
    return val;
};
var findMissingAndRepeatedValues = function(grid) {
    let n = grid.length;
    if(n == 0) {
        return [-1, -1];
    }
    let a = -1, b = -1, c = new Array(n*n+1);
    for(let arr of grid){
        for(let val of arr) {
            if(c[val] === undefined) {
                c[val] = 1;
            } else {
                a = val;
            }
        }
    }
    for(let i=1; i < c.length; i++) {
        if(c[i] === undefined) {
            b = i;
        }
    }

    return [a, b];
};

console.log(majorityElement([2, 2, 3]))