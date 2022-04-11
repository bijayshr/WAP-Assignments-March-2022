function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
Student.prototype.grades = [];

Student.prototype.inputNewGrade = function(newGrade){
    this.grades.push(newGrade);
};

Student.prototype.computeAverageGrade = function (){

    let grade =  this.grades.reduce((acc, grade)=> acc+=grade, 0);
    return grade/this.grades.length;

    //## ALTERNATIVE WAY TO GET AVERAGE GRADE
    // let grade = 0;
    // let len = this.grades.length;
    // for(let i=0; i<len; i++){
    //     grade +=this.grades[i];
    // };
    // return grade/this.grades.length;
};

let stu1 = new Student('Ryan', 'Gosling');
stu1.inputNewGrade(4);
stu1.inputNewGrade(4);
stu1.inputNewGrade(4);
stu1.inputNewGrade(4);
stu1.inputNewGrade(4);
console.dir(` ${stu1.computeAverageGrade()}`);

let stu2 = new Student('Josh', 'Bloch');
stu2.inputNewGrade(4)
stu2.inputNewGrade(3)
stu2.inputNewGrade(3)
stu2.inputNewGrade(4)

console.dir(`${stu2.computeAverageGrade()}`);