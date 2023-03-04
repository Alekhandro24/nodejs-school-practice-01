const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((item) => numbers(item));

module.exports = {
  operator,
  numbers,
};
