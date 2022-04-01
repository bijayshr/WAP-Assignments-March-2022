/**
 * @param numbers
 * @returns {*}
 * Create a function using function declaration named sum with one
 * parameter of Array type, the returned result is the sum of all
 * elements which are greater than 20.
 */
function sum([...numbers]) {
    const sum = numbers.filter(num => num > 20).reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
    }, 0);
    return sum;
}
const num = [1,2, 3, 4, 20, 25, 21];
console.log("Adding [1, 2, 3, 4], we get :: ", sum(num));



