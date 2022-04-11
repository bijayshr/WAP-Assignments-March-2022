let student = {
    firstName:'',
    lastName:'',
    grades: [],
    inputNewGrade: function(newGrade){
        this.grades.push(newGrade);
    },
    computeAverageGrade: function (){

        let grade =  this.grades.reduce((acc, grade)=> acc+=grade, 0);
        return grade/this.grades.length;

        //## ALTERNATIVE WAY TO GET AVERAGE GRADE
        // let grade = 0;
        // let len = this.grades.length;
        // for(let i=0; i<len; i++){
        //     grade +=this.grades[i];
        // };
        // return grade/this.grades.length;
    }
}
let stu1 = Object.create(student);
let stu2 = Object.create(student);

let students = [stu1, stu2];
stu1.firstName = 'Bijay';
stu1.lastName = 'Shrestha';
stu1.inputNewGrade(4);
stu1.inputNewGrade(4);
stu1.inputNewGrade(4);
stu1.inputNewGrade(4);
console.dir(`Student ${stu1.firstName} has an average grade of:  ${stu1.computeAverageGrade()}`);



stu2.firstName = 'Bishow';
stu2.lastName = 'Shrestha';
stu2.inputNewGrade(4);
stu2.inputNewGrade(3.75);
stu2.inputNewGrade(4);
stu2.inputNewGrade(4);
console.dir(`Student ${stu2.firstName} has an average grade of: ${stu2.computeAverageGrade()}`);


