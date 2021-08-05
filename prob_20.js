// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

function isValid(string) {
  let stringMap = {
    "(": 1,
    ")": -1,
    "{": 2,
    "}": -2,
    "[": 3,
    "]": -3,
  };
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (stringMap[string[i]] > 0) {
      stack.unshift(string[i]);
    } else {
      let topElement = stack.shift();
      if (stringMap[topElement] + stringMap[string[i]] !== 0) {
        return false;
      }
    }
  }
  if (stack.length !== 0) return false;
  else return true;
}

let s = "";

console.log(isValid(s));
