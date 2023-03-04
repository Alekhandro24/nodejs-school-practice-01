//додавати - sum
//віднімати - sub
//ділення - div
//помножувати  - mult
// //node calc.js sum 3 2 4 //9

// console.log(process.argv);

// version 1

// const [operator, ...args] = process.argv.slice(2);
// const numbers = args.map((item) => numbers(item));

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
//     console.log("Unkrnown operation type");
//     break;
// }

// console.log("result", result);

// version 2

// const [operator, ...args] = process.argv.slice(2);
// const numbers = args.map((item) => numbers(item));

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
//       result = console.log("Unkrnown operation type");
//       break;
//   }

//   return result;
// };

// console.log(calculate());
// //працює на замикання

//// version 3

const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((item) => numbers(item));

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
