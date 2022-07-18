const  natalia = {

name: "natalia",
age:20,
cursosAprobados: [
  "curso de html y css" , 
  "curso practico de html y css"
],
 aprobarCurso  (nuevoCurso) {
this.cursosAprobados.push (nuevoCurso);
}

};

natalia.aprobarCurso("curso practico de javascript")
natalia.aprobarCurso("curos de diseño para programadores");
console.log(natalia.cursosAprobados);


function estudiantes (nombre,apellido,cursosAprobados){
  this.name= name;
  this.
}