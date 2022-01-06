/**207. Course Schedule
Medium

7994

313

Add to List

Share
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 */

// https://leetcode.com/problems/course-schedule/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, pre) {
    let hash = {};
    for(let i = 0; i < pre.length; i++){
        let tmp =  pre[i].sort((a,b)=>a-b);
        if(hash[tmp] != null){
            return false;
        }else{
            hash[tmp] = true;
        }
    }
     
     return true;
 };

 console.log(JSON.stringify(canFinish(2,[[1,0],[0,1]])))