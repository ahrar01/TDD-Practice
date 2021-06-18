module.exports = function removeDuplicates(list) {
  
      if (list) {
        if (list.length === 0) {
          return undefined;
        }
        let res = [list[0]];
        for (let x = 1; x < list.length; x++) {
          if (list[x] !== res[res.length - 1]) {
            res.push(list[x]);
          }
        }
        return res;
      }
};
