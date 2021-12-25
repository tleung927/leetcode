/**Valid Parentheses
Easy

10276

405

Add to List

Share
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
  */


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let li = s.split('');
  if (li.length % 2 !== 0) return false;
  let count = 0;
  let length = li.length;
  while (li.length > 0) {
    removeSame(li);
    if (count > length / 2) break;
    count++;
    
  }

  if (li.length !== 0) return false;

  return true;
};

function removeSame(list) {
  for (let i = 0; i < list.length; i++) {
    if ((list[i] === '{' && list[i + 1] === '}')
      || (list[i] === '[' && list[i + 1] === ']')
      || (list[i] === '(' && list[i + 1] === ')')) {
      list.splice(i, 1);
      list.splice(i, 1);
      return;
    }
  }
}

function isValid2(s) {
  const lefts = [];
  const legend = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      lefts.push(s[i]);    
    } else if (legend[lefts.pop()] !== s[i]) {
      return false;
    }
  }
  return lefts.length ? 0 : 1;
};
console.log(isValid2("{{[(())]}}"))