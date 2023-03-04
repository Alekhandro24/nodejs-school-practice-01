const CalculatorClass = require("./CalculatorClass");

const { operator, numbers } = require("./fetchData");

const calculutor = new CalculatorClass(operator, numbers);
console.log(calculutor.init());
