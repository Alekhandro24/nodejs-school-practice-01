const calculate = (op, numbersArr) => {
  let result = null;
  switch (op) {
    case "sum":
      result = numbers.reduce((total, number) => total + number);
      break;
    case "sub":
      result = numbers.reduce((total, number) => total - number);
      break;
    case "div":
      result = numbers.reduce((total, number) => total / number);
      break;
    case "mult":
      result = numbers.reduce((total, number) => total * number);
      break;

    default:
      result = console.log("Unkrnown operation type");
      break;
  }

  return result;
};

console.log(calculate(op, numbersArr));

module.exports = calculate;
