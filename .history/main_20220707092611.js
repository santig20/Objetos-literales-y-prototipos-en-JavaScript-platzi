./


function estudiantes (nombre,apellido,cursosAprobados){
  this.name= name;
  this.age= age;
  this.cursosAprobados= cursosAprobados;

}
estudiantes.prototype.aprobarCurso = function (nuevoCurso) {
this.cursosAprobados.push (nuevoCurso);

}
