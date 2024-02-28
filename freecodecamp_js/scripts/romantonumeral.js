const convertbtn = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output");

const checkValidNumber = (number) => {
  if (number === null) {
    output.innerText = "Please enter a valid number";
    return false;
  } else if (number < 0) {
    output.innerText = " Please enter a number greater than or equal to 1";
    return false;
  } else if (number > 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return false;
  }
  return true;
};
const romanNumerals = [
  { value: 1000, symbol: "M" },
  { value: 900, symbol: "CM" },
  { value: 500, symbol: "D" },
  { value: 400, symbol: "CD" },
  { value: 100, symbol: "C" },
  { value: 90, symbol: "XC" },
  { value: 50, symbol: "L" },
  { value: 40, symbol: "XL" },
  { value: 10, symbol: "X" },
  { value: 9, symbol: "IX" },
  { value: 5, symbol: "V" },
  { value: 4, symbol: "IV" },
  { value: 1, symbol: "I" },
];
const convertToNumeral = () => {
  if (checkValidNumber()) {
    let result = "";

    for (let i = 0; i < romanNumerals.length; i++) {
      while (decimal >= romanNumerals[i].value) {
        result += romanNumerals[i].symbol;
        decimal -= romanNumerals[i].value;
      }
    }

    return result;
  }
};
