const students = []
function addStudent(name, score) {
    score = Number(score);
    score = score ?? 0;
    name = name.trim().toUpperCase();
    students.push({ name, score })


}
function getGrades(){
    return students.map((student)=>{
        let grade = 'F';
        if(student.score>=90) grade = 'A';
        else if(student.score>=75) grade = 'B';
        else if(student.score>=50) grade= 'C';
        else if(student.score>=35) grade = 'D';
        return{...student,grade}
    })
}
//top scores
function getTopScores(){
   return students.filter((student) => {return student.score>=75})
}
//find student
function findStudent(name){
    return students.find((student)=>student.name == name)

}
// /check failures
function hasFailures(){
  return  students.some((student)=>student.score<35)
}
//display data
function display(){
   const graded = getGrades();
   console.log("student data");
   console.log("all student with grades");
   console.log("name|score| grade")
   graded.forEach((student)=>{
    console.log(`${student.name}|${student.score}|${student.grade}`)
   })

}
addStudent("kalai","72");
addStudent("john","90");
addStudent("kalai","98");
addStudent("VARUN","48");
//disply student
display();
//top student
console.log("\n top scores:")
console.log(getTopScores());

// find student
console.log("\n searching for name");
console.log(findStudent("KALAI"));

//CHECK FAILURES
console.log("\n any failures");
console.log(hasFailures() ? "yes some students failed":"no student failed")