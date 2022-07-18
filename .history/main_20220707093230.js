/*const  natalia = {

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
console.log(natalia.cursosAprobados);*/


function estudiantes (nombre,apellido,cursosAprobados){
  this.name= name;
  this.age= age;
  this.cursosAprobados= cursosAprobados;

}
estudiantes.prototype.aprobarCurso = function (nuevoCurso) {
this.cursosAprobados.push (nuevoCurso);

}

const alumno1 = new estudiantes ("juana",20,["curso practico de javascript", "curso definitivo de html y css"]);

alumno1.aprobarCurso("curso de diseño para programadores");