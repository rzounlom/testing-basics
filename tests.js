const expect = chai.expect;
// const assert = chai.assert;

/**Setup funcitons to test */
// Our simple calculator module for demonstration
const add = (a, b) => {
  // if (typeof a !== "number" || typeof b !== "number") {
  //   throw new TypeError("Invalid input type."); //throw error if input is not a number
  // }

  return a + b;
}; // function to add two numbers
const subtract = (a, b) => a - b; //function to subtract two numbers
const multiply = (a, b) => a * b; //function to multiply two numbers
const divide = (a, b) => {
  if (b === 0) throw new Error("Cannot divide by zero."); //throw error if dividing by zero
  return a / b;
}; //function to divide two numbers

// Group tests for the calculator module using describe
describe("Calculator Module", function () {
  // Nested describe for addition functionality
  describe("Addition", function () {
    it("adds two positive numbers correctly", function () {
      expect(add(2, 3)).to.equal(5); // Assert that 2 + 3 equals 5
    });

    it("adds two negative numbers correctly", function () {
      expect(add(-1, -1)).to.equal(-2); // Assert that -1 + (-1) equals -2
    });

    it("adds a positive and a negative number correctly", function () {
      expect(add(-1, 2)).to.equal(1); // Assert that -1 + 2 equals 1
    });
  });

  // Nested describe for subtraction functionality
  describe("Subtraction", function () {
    it("subtracts two numbers correctly", function () {
      expect(subtract(5, 3)).to.equal(2); // Assert that 5 - 3 equals 2
    });

    it("results in negative when subtracting a larger number from a smaller one", function () {
      expect(subtract(3, 5)).to.equal(-2); // Assert that 3 - 5 equals -2
    });
  });

  // Nested describe for multiplication functionality
  describe("Multiplication", function () {
    it("multiplies two numbers correctly", function () {
      expect(multiply(4, 5)).to.equal(20); // Assert that 4 * 5 equals 20
    });

    it("multiplies by zero correctly", function () {
      expect(multiply(5, 0)).to.equal(0); // Assert that 5 * 0 equals 0
    });
  });

  // Nested describe for division functionality
  describe("Division", function () {
    it("divides two numbers correctly", function () {
      expect(divide(10, 2)).to.equal(5); // Assert that 10 / 2 equals 5
    });

    it("throws error when dividing by zero", function () {
      expect(divide(5, 0)).to.throw("Cannot divide by zero."); // Assert that dividing by zero throws an error
    });

    it("divides a number by 1, returning the same number", function () {
      expect(divide(5, 1)).to.equal(5); // Assert that 5 / 1 equals 5
    });
  });
});

/**Some Failure Cases */

describe("Calculator Module - Failure Cases", function () {
  // Additional tests for addition
  describe("Addition - Failure Cases", function () {
    it("handles string input by throwing a TypeError", function () {
      expect(() => add("2", 3)).to.throw(TypeError);
      expect(() => add(2, "3")).to.throw(TypeError);
    });
  });

  // Additional tests for subtraction
  describe("Subtraction - Failure Cases", function () {
    it("handles string input by throwing a TypeError", function () {
      expect(() => subtract("5", 3)).to.throw(TypeError);
      expect(() => subtract(5, "3")).to.throw(TypeError);
    });
  });

  // Additional tests for multiplication
  describe("Multiplication - Failure Cases", function () {
    it("handles string input by throwing a TypeError", function () {
      expect(() => multiply("4", 5)).to.throw(TypeError);
      expect(() => multiply(4, "5")).to.throw(TypeError);
    });

    it("multiplies two negative numbers resulting in a positive", function () {
      expect(() => multiply(-2, -2)).to.equal(4);
    });
  });

  // Additional tests for division
  describe("Division - Failure Cases", function () {
    it("handles string input by throwing a TypeError", function () {
      expect(() => divide("10", 2)).to.throw(TypeError);
      expect(() => divide(10, "2")).to.throw(TypeError);
    });

    it("dividing a negative number by a positive number results in a negative", function () {
      expect(() => divide(-10, 2)).to.equal(-5);
    });

    it("dividing a positive number by a negative number results in a negative", function () {
      expect(() => divide(10, -2)).to.equal(-5);
    });

    it("dividing two negative numbers results in a positive", function () {
      expect(() => divide(-10, -2)).to.equal(5);
    });
  });
});
