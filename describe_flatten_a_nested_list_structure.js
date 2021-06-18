module.exports = function flattenList(list=[]) {
    if (list.length === 0) {
      return undefined;
    }
  return list.flat(Infinity);
};
