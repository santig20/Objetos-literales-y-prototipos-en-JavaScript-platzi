const  natalia = {

name: "natalia",
age:20,
cursosAprobados: [
  "curso de html y css" , 
  "curso practico de html y css"
],
function aprobarCurso  (nuevoCurso) {
   natalia.cursosAprobados.push (nuevoCurso);
}

};

natalia.cursosAprobados.push("curso practico de javascript")

console.log(natalia.cursosAprobados);
aprobarCurso("curos de diseño para programadores");
console.log(natalia.cursosAprobados);