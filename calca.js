//додавати - sum
//віднімати - sub
//ділення - div
//помножувати  - mult
// //node calc.js sum 3 2 4 //9

//node calca.js sum 3 2 4 //9
// console.log(process.argv);

const [operator, ...args] = process.argv.slice(2);
// console.log(operator, args);
const numbers = args.map((item) => Number(item));
// console.log(numbers);

// let result = null;

// switch (operator) {
//   case "sum":
//     result = numbers.reduce((total, number) => total + number);
//     break;
//   case "sub":
//     result = numbers.reduce((total, number) => total - number);
//     break;
//   case "div":
//     result = numbers.reduce((total, number) => total / number);
//     break;
//   case "mult":
//     result = numbers.reduce((total, number) => total * number);
//     break;

//   default:
//     result = console.log("Unknown operation type");
//     break;
// }

// console.log("result", result);
// проблема - весь код записаний в глобальній області видимості

//2. повисимо абстракцію

// const calculate = () => {
//   let result = null;

//   switch (operator) {
//     case "sum":
//       result = numbers.reduce((total, number) => total + number);
//       break;
//     case "sub":
//       result = numbers.reduce((total, number) => total - number);
//       break;
//     case "div":
//       result = numbers.reduce((total, number) => total / number);
//       break;
//     case "mult":
//       result = numbers.reduce((total, number) => total * number);
//       break;

//     default:
//       result = "Unknown operation type";
//       break;
//   }
//   return result;
// };
// console.log(calculate());

//3. варіант
// const [operator, ...args] = process.argv.slice(2);
// const numbers = args.map((item) => numbers(item));
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
console.log(calculate(operator, numberArr));
