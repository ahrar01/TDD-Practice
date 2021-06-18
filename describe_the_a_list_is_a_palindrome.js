module.exports = function findPalindrome(str) {
  var len = str.length;
  if (len.length === 0 || len.length===1) {
    return true;
  }
  var mid = Math.floor(len / 2);

  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
};
