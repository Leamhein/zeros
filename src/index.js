module.exports = function getZerosCount(number) {
  var n = []; //geometric progression of the number 5
  var zeros = 0; //number of our zeros
  for (let i = 1; i > 0; i++) { /*fill our array with numbers obtained
                                with geometric progression of the number 5.
                                this numbers must be less then incoming number*/
    if (n[i-2] > number) {
      n.splice(i-2, 1);
      break;
    };
    n[i-1] = Math.pow(5, i);
  };
  for (let i = 0; i < n.length; i++) {
    zeros += Math.floor (number / n[i]); //count our zeros
  };
  return zeros;
};
