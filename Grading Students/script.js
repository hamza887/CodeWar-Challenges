// HACKER RANK

// Problem Statement

// GRADING STUDENTS

// grade students if the difference between the grade and the next multiple of 5 is 3 or less

function gradingStudents(grades) {
        for(let i =0;i<grades.length;i++){
      if(grades[i]>=38 &&((grades[i]%5)===3|| (grades[i]%5)===4)){
        grades[i]=grades[i]+(5-(grades[i]%5))
      }
    }
    return grades

}

console.log(gradingStudents([73,23,68]));


