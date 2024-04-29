// Specific city students will be
// graded :)
function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    const foundGrade = newGrades.find((grade) => grade.studentId === student.id);
    const gradeValue = foundGrade ? foundGrade.grade : 'N/A';

    return {
      ...student,
      grade: gradeValue,
    };
  }).filter((student) => student.location === city);
}

export default updateStudentGradeByCity;
