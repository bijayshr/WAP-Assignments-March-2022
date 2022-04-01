/**
 * @param numbers
 * @returns {*}
 * Create a function using function expression named getNewArray with one parameter of String Array,
 * return a new array which contains all string,
 * length is greater than and equal to 5,
 * and contains letter ‘a’.
 */

const strings = ["apple", "ball", "hello", "world", "applegate"];
const getNewArray = function(strings){
    return  strings.filter(s=>s.length>=5 && s.includes("a"));
}
const getNewArray1 = strings => strings.filter(s=>s.length>=5 && s.includes("a"));

console.log(getNewArray(strings));