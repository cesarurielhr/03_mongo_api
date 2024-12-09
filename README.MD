# DOCUMENTACION DE LA API ⚛️
## Bases de Datos NoSQL 🤟
## LABORATORIO 02_NEO4J_API 🟣🟠🔵

> **DATOS DEL ALUMNO**🧑‍🎓
> 
> **Alumno:** César Uriel Hernández Rodríguez [`@cesarurielhr`](https://github.com/cesarurielhr) 👾  
> **Grupo:** 5A (7:00-8:00)  
> **Docente:** Jorge Saúl Montes Cáceres  

## CASO EJEMPLO 02 - Avance Académico del TecNM
## Solucion con PLAYGROUND
```
//caso 2
use('db_alumnos');

// Insert a few documents into the sales collection.
db.getCollection('alumnos').insertMany([
  {
  "_id": "CURP1234567890",  // ID_curp
  "nctrl": "12345678",
  "nombre": "Juan Pérez",
  "carrera": "Ingeniería en Sistemas",
  "tecnologico": "TecNM Campus X",
  "expediente_academico": [
    {
      "materia_id": "MAT01",
      "calificacion": 95,
      "estado": "Aprobada", // Estados: Aprobada, Reprobada, En curso
      "semestre": 3
    },
    {
      "materia_id": "MAT02",
      "calificacion": null,
      "estado": "En curso",
      "semestre": 4
    },
    
  ],
  
},{
  "_id": "CURP1234789959",  // ID_curp
  "nctrl": "12345677865",
  "nombre": "Jose Lino",
  "carrera": "Ingeniería en Sistemas",
  "tecnologico": "TecNM Campus X",
  "expediente_academico": [
    {
      "materia_id": "MAT01",
      "calificacion": 80,
      "estado": "Aprobada", // Estados: Aprobada, Reprobada, En curso
      "semestre": 3
    },
    {
      "materia_id": "MAT05",
      "calificacion": null,
      "estado": "En curso",
      "semestre": 4
    },
    
  ],
  
},{
    "_id": "CURP2345678901", // ID_curp
    "nctrl": "23456789",
    "nombre": "María López",
    "carrera": "Ingeniería Industrial",
    "tecnologico": "TecNM Campus Y",
    "expediente_academico": [
      {
        "materia_id": "MAT05",
        "calificacion": 88,
        "estado": "Aprobada",
        "semestre": 2
      },
      {
        "materia_id": "MAT06",
        "calificacion": null,
        "estado": "En curso",
        "semestre": 3
      }
    ]
  },
  {
    "_id": "CURP3456789012", // ID_curp
    "nctrl": "34567890",
    "nombre": "Carlos García",
    "carrera": "Ingeniería Mecatrónica",
    "tecnologico": "TecNM Campus Z",
    "expediente_academico": [
      {
        "materia_id": "MAT04",
        "calificacion": 91,
        "estado": "Aprobada",
        "semestre": 3
      },
      {
        "materia_id": "MAT05",
        "calificacion": 75,
        "estado": "Aprobada",
        "semestre": 4
      }
    ]
  },
  {
    "_id": "CURP4567890123", // ID_curp
    "nctrl": "45678901",
    "nombre": "Laura Sánchez",
    "carrera": "Ingeniería Civil",
    "tecnologico": "TecNM Campus W",
    "expediente_academico": [
      {
        "materia_id": "MAT07",
        "calificacion": 82,
        "estado": "Aprobada",
        "semestre": 2
      },
      {
        "materia_id": "MAT08",
        "calificacion": null,
        "estado": "En curso",
        "semestre": 3
      }
    ]
  },
  {
    "_id": "CURP4567897489", // ID_curp
    "nctrl": "456+68901",
    "nombre": "Marlen Bugariun",
    "carrera": "Ingeniería Civil",
    "tecnologico": "TecNM Campus W",
    "expediente_academico": [
      {
        "materia_id": "MAT07",
        "calificacion": null,
        "estado": "En curso",
        "semestre": 2
      },
      {
        "materia_id": "MAT08",
        "calificacion": null,
        "estado": "En curso",
        "semestre": 3
      }
    ]
  }


]);
use('db_alumnos');
db.getCollection('materias').insertMany([
  {
    "_id": "MAT02",
    "nombre": "Cálculo Diferencial",
    "carrera": "Ingeniería en Sistemas",
    "descripcion": "Estudio de límites, derivadas y aplicaciones.",
    "plan_estudios": "2020"
  },
  {
    "_id": "MAT03",
    "nombre": "Bases de Datos",
    "carrera": "Ingeniería en Sistemas",
    "descripcion": "Fundamentos de modelado y manejo de bases de datos.",
    "plan_estudios": "2020"
  },
  {
    "_id": "MAT04",
    "nombre": "Mecánica de Materiales",
    "carrera": "Ingeniería Mecánica",
    "descripcion": "Propiedades de los materiales bajo distintas cargas.",
    "plan_estudios": "2021"
  },
  {
    "_id": "MAT05",
    "nombre": "Electrónica Básica",
    "carrera": "Ingeniería Electrónica",
    "descripcion": "Conceptos fundamentales de circuitos eléctricos y componentes.",
    "plan_estudios": "2021"
  },
  {
    "_id": "MAT06",
    "nombre": "Ecuaciones Diferenciales",
    "carrera": "Ingeniería Industrial",
    "descripcion": "Resolución y aplicación de ecuaciones diferenciales.",
    "plan_estudios": "2020"
  },
  {
    "_id": "MAT07",
    "nombre": "Dibujo Técnico",
    "carrera": "Ingeniería Civil",
    "descripcion": "Representación gráfica de estructuras y planos.",
    "plan_estudios": "2021"
  },
  {
    "_id": "MAT08",
    "nombre": "Redes de Computadoras",
    "carrera": "Ingeniería en Sistemas",
    "descripcion": "Diseño y configuración de redes de comunicación.",
    "plan_estudios": "2022"
  }
]);


db.getCollection('docentes').insertMany([
  {
    "_id": "RFC2345678901",
    "nombre": "Juan Pérez",
    "carrera": "Ingeniería Industrial",
    "tecnologico": "TecNM Campus Y",
    "materias": ["MAT02", "MAT05"]
  },
  {
    "_id": "RFC3456789012",
    "nombre": "Laura Sánchez",
    "carrera": "Ingeniería Civil",
    "tecnologico": "TecNM Campus Z",
    "materias": ["MAT02", "MAT05"]
  },
  {
    "_id": "RFC4567890123",
    "nombre": "Carlos Hernández",
    "carrera": "Ingeniería Mecatrónica",
    "tecnologico": "TecNM Campus W",
    "materias": ["MAT07", "MAT08"]
  }
]);
use('db_alumnos')
db.getCollection('grupos').insertMany([
{
  "_id": "GRUPO01",  // ID_grupo
  "materia_id": "MAT01",
  "docente_id": "RFC1234567890",
  "estudiantes": ["CURP1234567890", "CURP0987654321"],  // IDs de alumnos
  "aula": "AULA01",
  "horario": "Lunes 8:00 - 10:00, viernes 8:00 - 10:00"
},
{
  "_id": "GRUPO02",  // ID_grupo
  "materia_id": "MAT08",
  "docente_id": "RFC3456789012",
  "estudiantes": ["CURP4567890123", "CURP4567897489"],  // IDs de alumnos
  "aula": "AULA01",
  "horario": "Lunes 15:00 - 16:00, Martes  15:00 - 16:00"
},
{
  "_id": "GRUPO03",  // ID_grupo
  "materia_id": "MAT05",
  "docente_id": "RFC3456789012",
  "estudiantes": ["CURP4567890123", "CURP1234789959"],  // IDs de alumnos
  "aula": "AULA02",
  "horario": "Miercoles 15:00 - 16:00, Jueves  15:00 - 16:00"
},
{
  "_id": "GRUPO04",  // ID_grupo
  "materia_id": "MAT06",
  "docente_id": "RFC4567890123",
  "estudiantes": ["CURP4567890123", "CURP4567897489"],  // IDs de alumnos
  "aula": "AULA02",
  "horario": "Lunes 14:00 - 15:00, Miercoles  14:00 - 15:00"
},
{
  "_id": "GRUPO05",  // ID_grupo
  "materia_id": "MAT01",
  "docente_id": "RFC1234567890",
  "estudiantes": ["CURP1234789959"],  // IDs de alumnos
  "aula": "AULA01",
  "horario": "Lunes 5:00 - 8:00, viernes 5:00 - 8:00"
},
]);
db.getCollection('aulas').insertMany([
{
  "_id": "AULA01",  // IDaula
  "edificio": "Edificio A",
  "grupos": ["GRUPO01", "GRUPO02"],  // IDs de los grupos
  "descripcion_equipamiento": "Proyector, Pizarrón"
},
{
  "_id": "AULA02",  
  "edificio": "Edificio B",
  "grupos": ["GRUPO03", "GRUPO04"], 
  "descripcion_equipamiento": "Proyector, Pizarrón,Aire Acondicinado"
}
]);
```
# Consultas MongoDB
## Q1. Listar las materias que un alumno ha cursado.
```
use('db_alumnos');
db.alumnos.aggregate([
  { $match: { _id: "CURP1234567890" } },
  { $unwind: "$expediente_academico" },
  { $lookup: {
      from: "materias",
      localField: "expediente_academico.materia_id",
      foreignField: "_id",
      as: "materia_info"
  }},
  { $unwind: "$materia_info" },
  { $project: {
      "materia": "$materia_info.nombre",
      "estado": "$expediente_academico.estado",
      "calificacion": "$expediente_academico.calificacion"
  }}
]);
```
## Q2. Listar los alumnos que están cursando una materia específica de un grupo específico.
```
use('db_alumnos');
db.grupos.aggregate([
  { $match: { _id: "GRUPO01", materia_id: "MAT01" } },
  { $lookup: {
      from: "alumnos",
      localField: "estudiantes",
      foreignField: "_id",
      as: "alumnos"
  }},
  { $project: { "alumnos.nombre": 1, "alumnos.nctrl": 1 } }
]);
```
## Q3. Listar las calificaciones de un alumno en todas sus materias cursadas.
```
use('db_alumnos');
db.alumnos.aggregate([
  { $match: { _id: "CURP3456789012" } },
  { $unwind: "$expediente_academico" },
  { $project: {
      "materia_id": "$expediente_academico.materia_id",
      "calificacion": "$expediente_academico.calificacion"
  }}
]);
```
## Q4. Listar los docentes que imparten una materia específica.
```
use('db_alumnos');
db.getCollection('docentes').find({
  materias: { $in: ["MAT02"] }
}).pretty();
```
## Q5. Listar los alumnos que han obtenido una calificación superior a 90 en una materia específica.
```
use('escuela');
db.alumnos.aggregate([
  { $unwind: "$expediente_academico" },
  { $match: { "expediente_academico.materia_id": "MAT01", "expediente_academico.calificacion": { $gt: 70 } } },
  { $project: { nombre: 1, nctrl: 1} }
]);
```
## Q6. Listar los grupos que correspondan a una materia específica.
```
use('db_alumnos');
db.grupos.find({ materia_id: "MAT01" }, { _id: 1, horario: 1, aula: 1 });
```
## Q7. Listar las materias que cursa un alumno en específico (horario).
```
use('db_alumnos');
db.grupos.aggregate([
  { $match: { estudiantes: "CURP1234567890" } },
  { $lookup: {
      from: "materias",
      localField: "materia_id",
      foreignField: "_id",
      as: "materia_info"
  }},
  { $project: { "materia_info.nombre": 1, horario: 1 } }
]);
```
## Q8. Listar las materias que faltan por cursar a un alumno en específico.
```
use('db_alumnos');
db.materias.aggregate([
  {
    $lookup: {
      from: "alumnos",
      let: { alumno_id: "CURP1234567890" },
      pipeline: [
        { $match: { $expr: { $eq: ["$_id", "$$alumno_id"] } } },
        { $unwind: "$expediente_academico" },
        { $project: { "materia_id": "$expediente_academico.materia_id" } }
      ],
      as: "materias_cursadas"
    }
  },
  {
    $addFields: {
      cursadas_ids: { $map: { input: "$materias_cursadas", as: "materia", in: "$$materia.materia_id" } }
    }
  },
  {
    $match: { $expr: { $not: { $in: ["$_id", "$cursadas_ids"] } } }
  },
  {
    $project: { _id: 1, nombre: 1, carrera: 1, descripcion: 1 }
  }
]);
```
## Q9. Listar las materias que imparte un docente en específico, junto con los alumnos que cursan cada una de las materias.
```
use('db_alumnos');
db.grupos.aggregate([
  { $match: { docente_id: "RFC1234567890" } },
  { $lookup: {
      from: "materias",
      localField: "materia_id",
      foreignField: "_id",
      as: "materia_info"
  }},
  { $lookup: {
      from: "alumnos",
      localField: "estudiantes",
      foreignField: "_id",
      as: "alumnos"
  }},
  { $project: {
      "materia": "$materia_info.nombre",
      "alumnos.nombre": 1
  }}
]);

```

