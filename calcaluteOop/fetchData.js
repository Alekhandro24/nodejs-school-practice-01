const [operator, ...args] = process.argv.slice(2);
// console.log(operator, args);
const numbers = args.map((item) => Number(item));
// console.log(numbers);

module.exports = {
  operator,
  numbers,
};
