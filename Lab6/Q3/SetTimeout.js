let i = 0;

setTimeout(()=> alert(i), 1000)

for(let j=0;j<100000000;j++){
    i++;
}


const student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade); },
    computeAverageGrade() {
        return this.grades
            .reduce((sum, current, index, array) => sum + current / array.length, 0);
    }
}
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
const result = students
    .reduce((average, stu, index, array)
        => average + stu. computeAverageGrade() / array.length, 0);
console.log(result);


function Student(firstName, lastName, grades = []) { this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
}
Student.prototype.inputNewGrade = function (newGrade) { this.grades.push(newGrade);
}
Student.prototype.computeAverageGrade = function () {
    return this.grades.reduce((sum, current, index, array) => sum + current / array.length, 0);
}
const stu1 = new Student('John', 'Smith');
stu1.inputNewGrade(88);
stu1.inputNewGrade(98);
stu1.inputNewGrade(86);
stu1.inputNewGrade(80);
const stu2 = new Student('John2', 'Smith2');
stu2.inputNewGrade(85);
stu2.inputNewGrade(95);
stu2.inputNewGrade(85);
stu2.inputNewGrade(70);
const students = [stu1, stu2];
const result = students
    .reduce((average, stu, index, array)
        => average + stu.computeAverageGrade() / array.length, 0);
console.log(result);

