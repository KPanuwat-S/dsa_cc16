You are given an array of non-negative integers nums, where each element represents the maximum jump length from that position in the array. You are initially positioned at the first index, and you need to reach the last index.

Determine if you can reach the last index if you can jump from each index according to the maximum jump length at that index.

Return true if you can reach the last index, or false otherwise.

Test Case: [3, 2, 1, 0, 4]
Input: [3, 2, 1, 0, 4]
Expected Output: false (It's not possible to reach the last index because we get stuck at index 3)

Test Case: [0]
Input: [0]
Expected Output: true (There's only one element and it's at the last index)

Test Case: [2, 0, 0]
Input: [2, 0, 0]
Expected Output: true (We can jump from index 0 to index 2 and reach the last index)

Test Case: [2, 5, 0, 0]
Input: [2, 5, 0, 0]
Expected Output: true (We can jump from index 0 to index 1, and then jump from index 1 to index 3)
