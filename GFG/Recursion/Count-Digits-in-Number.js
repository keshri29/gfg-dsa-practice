// Problem: Count Digits in Number
// URL: https://www.geeksforgeeks.org/problems/count-total-digits-in-a-number/1
// Difficulty: Easy
// Topics: Recursion
// Language: JavaScript
// Synced by GFG → GitHub

/**
 * @param {number} n
 * @returns {number}
 */
class Solution {
    countDigits(n) {
        // Code here
        if(n==0) return 1;
        let count = 0;
        while(n>0){
            n=Math.floor(n/10);
            count++;
        }
    return count;
    }
}
