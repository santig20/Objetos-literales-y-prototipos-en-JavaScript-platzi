const  natalia = {

name: "natalia",
age:20,
cursosAprobados: [
  "curso de html y css" , 
  "curso practico de html y css"
],
aprobarCurso  (nuevoCurso) {
   natalia.cursosAprobados.push (nuevoCurso)
}

};

natalia.cursosAprobados.push("curso practico de javascript")

console.log(natalia.cursosAprobados);