const calculate = (op, numberArr) => {
  let result = null;

  switch (op) {
    case "sum":
      result = numberArr.reduce((total, number) => total + number);
      break;
    case "sub":
      result = numberArr.reduce((total, number) => total - number);
      break;
    case "div":
      result = numberArr.reduce((total, number) => total / number);
      break;
    case "mult":
      result = numberArr.reduce((total, number) => total * number);
      break;

    default:
      result = "Unknown operation type";
      break;
  }
  return result;
};
// console.log(calculate(operator, numberArr));
module.exports = calculate;
