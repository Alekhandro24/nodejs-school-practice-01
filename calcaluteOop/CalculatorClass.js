class CalculatorClass {
  constructor(operator, numbers) {
    this.operator = operator;
    this.numbers = numbers;
  }
  calculate = (op, numberArr) => {
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
  init() {
    return this.calculate(this.operator, this.numbers);
  }
}

// const [operator, ...args] = process.argv.slice(2);
// const numbers = args.map((item) => Number(item));

module.exports = CalculatorClass;
