const student = {
    firstName: '',
    lastName: '',
    grades: [],

    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade); },

    computeAverageGrade() {
        return this.grades.reduce((sum, current, index, array) => sum + current / array.length, 0);
    }
};

const stu1 = Object.create(student);
stu1.firstName = 'John';
stu1.lastName = 'Smith';
stu1.inputNewGrade(88);
stu1.inputNewGrade(98);
stu1.inputNewGrade(86);
stu1.inputNewGrade(80);


const stu2 = Object.create(student);
stu2.firstName = 'John2';
stu2.lastName = 'Smith2';
stu2.inputNewGrade(85);
stu2.inputNewGrade(95);
stu2.inputNewGrade(85);
stu2.inputNewGrade(70);
const students = [stu1, stu2];

const result = students.reduce(
    (average, stu, index, array) => average + stu. computeAverageGrade() / array.length, 0);

console.log(result);


/**
 * Question 3: Add a new method named sort() without parameters
 * in built-in constructor function Array.
 * It’ll sort all elements in the array in ascending order
 * @returns {Array}
 */
Array.prototype.mysort = function () { let arr = this;
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) { if (arr[j - 1] > arr[j]) {
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
        } }
    }
    return arr;
}

console.log([7, 5, 2, 4, 3, 9].mysort());