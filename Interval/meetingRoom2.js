/**Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return 2.
 */
// https://leetcode.com/problems/meeting-rooms-ii/

var meetingRoom = function (inter) {
    inter.sort((a, b) => (a[0] - b[0]));
    let pre = inter[0][1];
    for (let i = 1; i < inter.length; i++) {
        if (inter[i][0] < pre)
            return false
    }
    return true;

}

console.log(JSON.stringify(meetingRoom([[0, 30], [5, 10], [15, 20]])))