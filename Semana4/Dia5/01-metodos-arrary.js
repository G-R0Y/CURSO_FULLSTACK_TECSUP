const student = ["juan", "pedro", "maria", "jose", "luis"];

for (let i = 0; i < student.length; i++) {
    // console.log(student[i])
}

///// for each

student.forEach((student, i) => {
    console.log(i, student)
});

////// map solo cambia valores

student.map((student, i) => {
    console.log(i, student)
});

const newstudent = student.map((student, i) => {
    if (student === "pedro") {
        return student + " " + i;
    } else {
        return student !== "pedro";
    }
});

console.log(newstudent)


//////filter   filtra datos es decir que los quita

const studentWhitoutMaria = student.filter((student, i) => {
    return student !== "maria";
});
console.log(studentWhitoutMaria)


////find

const findStudent = student.find((student, i) => {
    return student === "maria";
});
console.log(findStudent)

////findindex

const findStudentIndex = student.findIndex((student, i) => {
    return student === "maria";
});
console.log(findStudentIndex)


//////some  si existe un alumno

const someStudent = student.some((student, i) => {
    return student === "luis";
});
console.log(someStudent)