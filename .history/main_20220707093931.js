//clase de la 1era a la 4ta
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

//clase 5
/*function estudiantes (nombre,apellido,cursosAprobados){
  this.name= name;
  this.age= age;
  this.cursosAprobados= cursosAprobados;

}
estudiantes.prototype.aprobarCurso = function (nuevoCurso) {
this.cursosAprobados.push (nuevoCurso);

}

const alumno1 = new estudiantes ("juana",20,["curso practico de javascript", "curso definitivo de html y css"]);

alumno1.aprobarCurso("curso de diseño para programadores");*/

//clase 6

class estudinates2 {
  constructor(name,age,cursosAprobados){
    this.name= name;
  this.age= age;
  this.cursosAprobados= cursosAprobados;
  }
  aprobarCurso(nuevoCurso){
         this.cursosAprobados.push(nuevoCurso);
  }
}
