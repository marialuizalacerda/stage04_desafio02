const studentList = [
  {
    name: 'Marko',
    firstTest: 10,
    secondTest: 6,
  },
  {
    name: 'Maria Luiza',
    firstTest: 5,
    secondTest: 5,
  },
  {
    name: 'João',
    firstTest: 4,
    secondTest: 3,
  },
]

function averageStudents(student) {
  const average = (student.firstTest + student.secondTest) / 2;
  let message = `
    A média do(a) aluno(a) ${student.name} é: ${average}`;
  
  if (average > 7) {
    message += `
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso.`;
  } else {
    message += `
    Não foi dessa vez, ${student.name}! Tente novamente!`;
  }
  
  return message;
}

for (let student of studentList) {
  alert(averageStudents(student));
}

