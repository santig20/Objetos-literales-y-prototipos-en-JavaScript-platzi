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
/*
 class estudiantes2 {
  constructor({name,age,cursosAprobados= [],email}){
    this.email =email;
    this.name= name;
  this.age= age;
  this.cursosAprobados= cursosAprobados;
  }
  aprobarCurso(nuevoCurso){
         this.cursosAprobados.push(nuevoCurso);
  }
}
const alumno1 = new estudiantes2 ({
name:"maria",
age:21,
email: "maria@live.com",
cursosAprobados: ["curso practico de javascript", "curso definitivo de html y css"]}
);

alumno1.aprobarCurso("Curso Básico de Programación Orientada a Objetos con JavaScript");
console.log(alumno1.cursosAprobados);*/

//clase 7 
/*
const alum= {
  name: "sergio",
  usarname:"sergi22",
  points: 250,
  socialmedia: {
    twitter: "sergi2022",
    instagram: "sergi_r",
    facebook: undefined,
  },
  cursosAprobados: [
    "curso definitivo de html y css",
    "curso basico de javascript"
  ],

  carreras: [
    {
      name: "escuela de javascript",
      cursos:[ "curso practico de javascript",
      "curso basico de javascript",
    "Curso Básico de Programación Orientada a Objetos con JavaScript"]
    },

    {
      name: "escuela de desarrollo web",
      cursos:[ "curso definitivo de html y css",
      "curso basico de javascript",
    "curso de responsive design"]
    },
  ],
};

const alum1= {
  name: "mario",
  usarname:"mari_22",
  points: 250,
  socialmedia: {
    twitter: "mari2022",
    instagram: "mari_r",
    facebook: undefined,
  },
  cursosAprobados: [
    "curso definitivo de html y css",
    "curso basico de javascript"
  ],

  carreras: [
    {
      name: "escuela de javascript",
      cursos:[ "curso practico de javascript",
      "curso basico de javascript",
    "Curso Básico de Programación Orientada a Objetos con JavaScript"]
    },

    {
      name: "escuela de desarrollo web",
      cursos:[ "curso definitivo de html y css",
      "curso basico de javascript",
    "curso de responsive design"]
    },
  ],
};
*/

class students {
  constructor ({
    email,
username ,
twitter = undefined,
instagram
facebook=
 cursosAp


    
  }){

 this.email = email,
 this.username = username,
 this.twitter = undefined = twitter,
 this.instagram = undefined  = instagram,
 this.facebook= undefined = facebook,
 this. cursosAprobados= []  = cursosAprobados,
 this. rutadePrendizaje = []= rutadePrendizaje

  }




}

