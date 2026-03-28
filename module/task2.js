function createStudent(name, grades) {
  if (!Array.isArray(grades) || grades.length === 0) {
    return {
      name: name,
      grades: [],
      average: 0,
      isPassed: false
    };
  }

  const sum = grades.reduce((total, grade) => total + grade, 0);
  const average = Number((sum / grades.length).toFixed(2));

  return {
    name: name,
    grades: grades,
    average: average,
    isPassed: average >= 60
  };
}

console.log(createStudent("Іван", [80, 65, 90]));
console.log(createStudent("Марія", [40, 55, 30]));
