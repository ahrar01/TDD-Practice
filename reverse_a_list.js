module.exports = function reverseList(list= []) {
    if (list.length ===0) {
        return undefined
    }
    list.reverse()
  return list;
};
