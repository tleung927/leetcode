/**
 * [LeetCode] 252. Meeting Rooms 会议室
 

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

Example 1:

Input: 
[[0,30],[5,10],[15,20]]

Output: false
Example 2:

Input: [[7,10],[2,4]]
Output: true

 */

// https://leetcode.com/problems/meeting-rooms/


var canAttendMeetings = function (inter) {
    inter.sort((a, b) => (a[0] - b[0]));
    let pre = inter[0][1];
    for (let i = 1; i < inter.length; i++) {
        if (inter[i][0] < pre)
            return false
    }
    return true;

}

console.log(JSON.stringify(canAttendMeetings([[7, 10], [2, 4]])))

