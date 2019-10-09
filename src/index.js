module.exports = function zeros(expression) {
  const factorials = expression.split('*');
  const factorialsLength = factorials.length;
  let zeroCount = 0;

  for (let i = 0; i < factorialsLength; i++) {
    const number = parseInt(factorials[i]);
    const counterFactorials = factorials[i].length - (number.toString()).length;

    if (Number.isInteger(number / 2) && counterFactorials === 2) {
      zeroCount += findNumberZeros(number, 2, counterFactorials);
    } else if (!Number.isInteger(number / 2) && counterFactorials === 2) {
      zeroCount += findNumberZeros(number, 1, counterFactorials);
    } else {
      zeroCount += findNumberZeros(number, 1, counterFactorials);
    }
  }

  return zeroCount;
};

function findNumberZeros(number, startCounter, step) {
  let counterZeros = 0;

  for (let i = startCounter; i <= number; i += step) {
    let isNumberDivideFive = (i % 5) === 0;

    if (isNumberDivideFive) {
       let  divisibleFromFive = i / 5;

      if (divisibleFromFive === 1 || divisibleFromFive === 2) {
        counterZeros++;
        continue;
      }

      while (Number.isInteger(divisibleFromFive)) {
        counterZeros++;
        divisibleFromFive = divisibleFromFive / 5;
      }
    }
  }

  return counterZeros;
}
