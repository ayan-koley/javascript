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

let merge = function(nums1, m, nums2, n) {
    if(m == 0) {
        for(let i=0; i < n; i++) {
            nums1[i] = nums2[i];
        }
        return;
    }
    let k = m+n-1;
    let i = m-1;
    let j = n-1;

    while(i >= 0 && j >= 0) {
        let a = nums1[i];
        let b = nums2[j];
        if(a < b) {
            nums1[k] = b;
            j--;
        }   else if(a > b) {
            nums1[k] = a;
            i--;
        }   else {
            nums1[k] = b;
            j--;
        }
        k--;
    }
    if(j == 0) {
        nums1[k] = nums2[j];
    }
    return;
};

let singleNumber = function(nums) {
    let result = 0;
    for(let val of nums) {
        result ^= val;
    }
    return result;
};

let maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit = 0;
    for(let val of prices) {
        if(buyPrice > val) {
            buyPrice = val;
        }  else {
            profit = Math.max(profit, val - buyPrice);
        }
    }
    return profit;
};

class myPower {
    myPow = function(x, n) {

        let res = this.pow(x, Math.abs(n));
        if(n < 0) {
            return 1/res;
        }
        return res;
    };
    pow = (x, n) => {
        if(n == 0) {
            return 1;
        }
        let rec_pow = this.pow(x, Math.floor(n/2));
        if(n % 2 == 0) {
            return rec_pow * rec_pow;
        }   else {
            return rec_pow * rec_pow * x;
        }
    }
}

const power = new myPower();

console.log(power.myPow(2.00000, -2));