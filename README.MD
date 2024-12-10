# DOCUMENTACION DE LA API ⚛️
## Bases de Datos NoSQL 🤟
## LABORATORIO 03_MONGO_API 🟣🟠🔵

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
# Codigo del Docker-Compose

```
version: '3.8'

services:
  app:
    image: 03_mongo_api:latest
    container_name: replica-apis
    ports:
      - "3000:3000"
    depends_on:
      - mongo-primary
      - redis01
    networks:
      - red01
    command: npm start
  mongo-primary:
    image: mongo
    command: mongod --replSet replica01
    ports:
      - "27017:27017"
    networks:
      - red01

  mongo-secondary1:
    image: mongo
    command: mongod --replSet replica01
    ports:
      - "27018:27017"
    networks:
      - red01

  mongo-secondary2:
    image: mongo
    command: mongod --replSet replica01
    ports:
      - "27019:27017"
    networks:
      - red01

  mongo-secondary3:
    image: mongo
    command: mongod --replSet replica01
    ports:
      - "27020:27017"
    networks:
      - red01

  redis01:
    image: redis/redis-stack:latest
    container_name: redis01
    ports:
      - "6379:6379"
      - "8001:8001"
    networks:
      - red01
    depends_on:
      - mongo-primary
      - mongo-secondary1
      - mongo-secondary2
      - mongo-secondary3

networks:
  red01:
    driver: bridge

```
# Solucion del ecenario con usando APIs que inclutan express,mongoose,redis con depedencia nodejs

## Codigo index.js para iniciar el servidor

```
const schoolRoutes = require('./Routes/schoolRoutes');
const materiasRoutes = require('./Routes/materiasRoutes');
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors'); // Middleware para permitir solicitudes de recursos cruzados
const logger = require("./Routes/logger");

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(logger);
app.use('/alumnos', schoolRoutes)
app.use('/materias',materiasRoutes);

app.get('/', (req, res, next) => {
    res.send(
        `<h1>API RESTFULL de Carrito de Compras</h1> <p> Leer: <a href="docs.com">api-tasks-docs</a> para mas información.</p>`
    );
})

app.use((req, res, next) => {
    res.status(404).json({ code: 404, message: 'Ruta no encontrada' });
});

const connectDB = require('./config/database.config.js');

dotenv.config();
PORT = 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
```
## Models 

## codigo de schoolModels.js para el modelado de datos en mongoose

```
const mongoose = require('mongoose');

const expedienteSchema = new mongoose.Schema({
  materia_id: { type: String, required: true },
  calificacion: { type: Number, min: 0, max: 100, default: null },
  estado: {
    type: String,
    enum: ['Aprobada', 'Reprobada', 'En curso'],
    required: true,
  },
  semestre: { type: Number, required: true },
});

const alumnoSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // CURP como ID
  nctrl: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  carrera: { type: String, required: true },
  tecnologico: { type: String, required: true },
  expediente_academico: { type: [expedienteSchema], default: [] },
}, { versionKey: false });

const materiaSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // ID de la materia
  nombre: { type: String, required: true },
  carrera: { type: String, required: true },
  descripcion: { type: String, required: true },
  plan_estudios: { type: String, required: true },
}, { versionKey: false });



const DocenteSchema = new mongoose.Schema({
  _id: String,
  nombre: String,
  carrera: String,
  tecnologico: String,
  materias: [String]
});

const GrupoSchema = new mongoose.Schema({
  _id: String,
  materia_id: String,
  docente_id: String,
  estudiantes: [String],
  aula: String,
  horario: String
});

const AulaSchema = new mongoose.Schema({
  _id: String,
  edificio: String,
  Grupos: [String],
  descripcion_equipamiento: String
});

const Docente = mongoose.model('Docente', DocenteSchema);
const Grupo = mongoose.model('Grupos', GrupoSchema);
const Alumno = mongoose.model('alumnos', alumnoSchema);
const Materia = mongoose.model('Materia', materiaSchema);
const Aulas = mongoose.model('Aulas', AulaSchema) 

module.exports = { Alumno, Materia, Grupo,Docente, Aulas };

```
# Controllers

## Codigo de materiaController.js para el CRUD de Materias

```
const Materia = require('../models/schoolModels'); // Importa el modelo de Materia

// Crear una nueva materia
exports.createMateria = async (req, res) => {
  try {
    const { _id, nombre, carrera, descripcion, plan_estudios } = req.body;

    // Crea una nueva instancia del modelo Materia
    const nuevaMateria = new Materia.Materia({ _id, nombre, carrera, descripcion, plan_estudios });
    await nuevaMateria.save();

    res.status(201).json({ message: 'Materia creada exitosamente', materia: nuevaMateria });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la materia', error });
  }
};

// Obtener todas las materias
exports.getMaterias = async (req, res) => {
  try {
    const materias = await Materia.Materia.find();
    res.status(200).json(materias);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las materias', error });
  }
};

// Obtener una materia por su ID
exports.getMateriaById = async (req, res) => {
  try {
    const { id } = req.params;
    const materia = await Materia.Materia.findById(id);

    if (!materia) {
      return res.status(404).json({ message: 'Materia no encontrada' });
    }

    res.status(200).json(materia);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la materia', error });
  }
};

// Actualizar una materia por su ID
exports.updateMateria = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, carrera, descripcion, plan_estudios } = req.body;

    const materiaActualizada = await Materia.Materia.findByIdAndUpdate(
      id,
      { nombre, carrera, descripcion, plan_estudios },
      { new: true } // Devuelve el documento actualizado
    );

    if (!materiaActualizada) {
      return res.status(404).json({ message: 'Materia no encontrada' });
    }

    res.status(200).json({ message: 'Materia actualizada exitosamente', materia: materiaActualizada });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la materia', error });
  }
};

// Eliminar una materia por su ID
exports.deleteMateria = async (req, res) => {
  try {
    const { id } = req.params;

    const materiaEliminada = await Materia.Materia.findByIdAndDelete(id);

    if (!materiaEliminada) {
      return res.status(404).json({ message: 'Materia no encontrada' });
    }

    res.status(200).json({ message: 'Materia eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la materia', error });
  }
};

```

##  Codigo de schoolController.js para el CRUD de alumnos

```
const Alumno = require('../models/schoolModels'); // Ajusta la ruta según tu estructura de proyecto

// Crear un nuevo alumno
exports.createAlumno = async (req, res) => {
  try {
    const { _id, nctrl, nombre, carrera, tecnologico, expediente_academico } = req.body;
    
    // Verifica si ya existe un alumno con el mismo número de control
    const alumnoExistente = await Alumno.Alumno.findOne({ nctrl });
    if (alumnoExistente) {
      return res.status(400).json({ message: 'Alumno con este número de control ya existe.' });
    }

    const alumno = new Alumno.Alumno({
      _id,
      nctrl,
      nombre,
      carrera,
      tecnologico,
      expediente_academico,
    });

    await alumno.save();
    res.status(201).json(alumno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el alumno.' });
  }
};

// Obtener todos los alumnos
exports.getAllAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.Alumno.find();
    res.status(200).json(alumnos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los alumnos.' });
  }
};

// Obtener un alumno por su CURP
exports.getAlumnoById = async (req, res) => {
  try {
    const alumno = await Alumno.Alumno.findById(req.params.id);
    if (!alumno) {
      return res.status(404).json({ message: 'Alumno no encontrado.' });
    }
    res.status(200).json(alumno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el alumno.' });
  }
};

// Actualizar un alumno por su CURP
exports.updateAlumno = async (req, res) => {
  try {
    const { nctrl, nombre, carrera, tecnologico, expediente_academico } = req.body;

    const alumno = await Alumno.Alumno.findByIdAndUpdate(
      req.params.id,
      { nctrl, nombre, carrera, tecnologico, expediente_academico },
      { new: true } // Para devolver el alumno actualizado
    );

    if (!alumno) {
      return res.status(404).json({ message: 'Alumno no encontrado.' });
    }

    res.status(200).json(alumno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el alumno.' });
  }
};

// Eliminar un alumno por su CURP
exports.deleteAlumno = async (req, res) => {
  try {
    const alumno = await Alumno.Alumno.findByIdAndDelete(req.params.id);
    if (!alumno) {
      return res.status(404).json({ message: 'Alumno no encontrado.' });
    }
    res.status(200).json({ message: 'Alumno eliminado exitosamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el alumno.' });
  }
};

```

## Codigo de querryController para los querrys 

```
const { Alumno, Materia, Docente, Grupo } = require('../models/schoolModels');

// Q1: Listar las materias que un alumno ha cursado
exports.getMateriasCursadas = async (req, res) => {
  try {
    const alumno = await Alumno.findById(req.params.id);
    if (!alumno) {
      return res.status(404).send("Alumno no encontrado.");
    }

    // Filtrar solo las materias aprobadas
    const materiasAprobadas = alumno.expediente_academico.filter(
      (m) => m.estado === "Aprobada"
    );

    // Obtener los detalles de las materias por sus IDs
    const materiaIds = materiasAprobadas.map((m) => m.materia_id);
    const materias = await Materia.find({ _id: { $in: materiaIds } });

    // Mapear los resultados con los nombres de las materias
    const resultado = materiasAprobadas.map((m) => {
      const materiaDetalle = materias.find(
        (mat) => mat._id.toString() === m.materia_id
      );
      return {
        nombre: materiaDetalle ? materiaDetalle.nombre : "Materia no encontrada",
        estado: m.estado,
        semestre: m.semestre,
        calificacion: m.calificacion,
      };
    });
    

    res.json(resultado);
     res.data = resultado;
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener las materias cursadas.");
  }
};


// Q2: Listar los alumnos cursando una materia específica en un grupo específico
exports.getMateriasespecifica =async (req, res) => {
  const grupo = await Grupo.findById(req.params.grupoId);
  if (!grupo || grupo.materia_id !== req.params.materiaId) return res.status(404).send("Grupo o materia no encontrada.");

  const alumnos = await Alumno.find({ _id: { $in: grupo.estudiantes } });
  res.json(alumnos);
};

// Q3: Listar calificaciones de un alumno en todas sus materias
exports.getCalificaciones = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  if (!alumno) return res.status(404).send("Alumno no encontrado.");

  const calificaciones = alumno.expediente_academico.map(({ materia_id, calificacion,semestre }) => ({ materia_id,calificacion,semestre }));
  res.json(calificaciones);
   res.data = calificaciones;
};

// Q4: Listar los docentes que imparten una materia específica.
exports.getDocentesMateria = async (req, res) => {
  try {
    const docentes = await Docente.find({ materias: req.params.materiaId }).select("-materias");
    if (docentes.length === 0) {
      return res.status(404).send("No se encontraron docentes para esta materia.");
    }
    res.json(docentes);
     res.data = docentes;
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los docentes.");
  }
};

// Q5: Listar los alumnos que han obtenido una calificación superior a 90 en una materia específica.
exports.getAlumnosConAltaCalificacion = async (req, res) => {
  try {
    // Buscar los alumnos que tienen una materia específica con calificación superior a 90
    const alumnos = await Alumno.find({
      "expediente_academico": {
        $elemMatch: {
          materia_id: req.params.materiaId,
          calificacion: { $gt: 89 },
        },
      },
    });

    if (alumnos.length === 0) {
      return res.status(404).send("No se encontraron alumnos con calificación superior a 90.");
    }

    // Filtrar y devolver solo las materias que cumplen con la condición de calificación superior a 90
    const resultado = alumnos.map(alumno => {
      const materiasAltasCalificaciones = alumno.expediente_academico.filter(materia => 
        materia.materia_id === req.params.materiaId && materia.calificacion > 89
      );
      
      // Solo se incluirá la materia que cumpla la condición
      return {
        alumnoId: alumno._id,
        nombre: alumno.nombre,
        calificaciones: materiasAltasCalificaciones.map(materia => ({
          materia_id: materia.materia_id,
          calificacion: materia.calificacion,
        })),
      };
    });

    res.json(resultado);
     res.data = resultado;
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los alumnos.");
  }
};


// Q6: Listar los grupos que corresponden a una materia específica.
exports.getGruposMateria = async (req, res) => {
  try {
    const grupos = await Grupo.find({ materia_id: req.params.materiaId });
    if (grupos.length === 0) {
      return res.status(404).send("No se encontraron grupos para esta materia.");
    }
    res.json(grupos);
     res.data = grupos;
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los grupos.");
  }
};

// Q7: Listar las materias que cursa un alumno en específico (horario).
exports.getMateriasHorario = async (req, res) => {
  try {
    const alumno = await Alumno.findById(req.params.id);
    if (!alumno) {
      return res.status(404).send("Alumno no encontrado.");
    }

    const materiasCursadas = alumno.expediente_academico.map(({ materia_id }) => materia_id);
    const materias = await Materia.find({ _id: { $in: materiasCursadas } });

    const grupos = await Grupo.find({ materia_id: { $in: materiasCursadas } });

    const resultado = grupos.map(grupo => {
      const materia = materias.find(m => m._id.toString() === grupo.materia_id);
      return {
        nombreMateria: materia ? materia.nombre : "Materia no encontrada",
        horario: grupo.horario,
      };
    });

    res.json(resultado);
     res.data = resultado;
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener las materias con horarios.");
  }
};

// Q8: Listar las materias que faltan por cursar a un alumno en específico.
exports.getMateriasFaltantes = async (req, res) => {
  try {
    const alumno = await Alumno.findById(req.params.id);
    if (!alumno) {
      return res.status(404).send("Alumno no encontrado.");
    }

    const materiasCursadas = alumno.expediente_academico.filter((exp) => exp.estado === "En curso").map(exp => exp.materia_id);
    const todasLasMaterias = await Materia.find({ carrera: alumno.carrera });

    const materiasFaltantes = todasLasMaterias.filter(materia => !materiasCursadas.includes(materia._id));

    res.json(materiasFaltantes);
     res.data = materiasFaltantes;
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener las materias faltantes.");
  }
};

// Q9: Listar las materias que imparte un docente en específico, junto con los alumnos que cursan cada una de las materias.
exports.getMateriasDocenteConAlumnos = async (req, res) => {
  try {
    const docente = await Docente.findById(req.params.id);
    if (!docente) {
      return res.status(404).send("Docente no encontrado.");
    }

    const materias = docente.materias;
    const grupos = await Grupo.find({ materia_id: { $in: materias }, docente_id: docente._id }).populate("estudiantes");

    const resultado = grupos.map(grupo => {
      return {
        nombreMateria: grupo.materia_id,
        alumnos: grupo.estudiantes.map(est => est.nombre),
      };
    });

    res.json(resultado);
    res.data = resultado;
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener las materias con alumnos.");
  }
};
```

# Routes

## codigo looger.js para recolectar la informacion de las peticiones

```
const redis = require('redis');
const client = redis.createClient({
    socket: {
        port: 6379,
        host: '172.19.0.6',  // Usa el nombre del servicio en lugar de la IP
    }
});

// Conectar al cliente de Redis al cargar el archivo
client.connect().catch(console.error);

module.exports = (req, res, next) => {
    let responseBody;  // Variable para almacenar el contenido de la respuesta

    // Sobreescribimos el método 'send' de res para capturar la respuesta
    const originalSend = res.send;
    res.send = function (body) {
        responseBody = body;  // Guardar el contenido de la respuesta
        originalSend.call(this, body);  // Llamar a la función original 'send'
    };

    res.on('finish', async () => {
        // Construir la clave y el valor
        const fecha = new Date();
        const key = `${req.method}:${fecha.toLocaleDateString()}-${fecha.getHours()}-${fecha.getMinutes()}-${fecha.getSeconds()}:${req.originalUrl}`;

        // Almacenar todo en un solo objeto JSON en el valor
        const valor = JSON.stringify({
            clave: key,
            time: fecha,
            req: {
                method: req.method,
                url: req.originalUrl,
                headers: req.headers,
                body: req.body
            },
            res: {
                statusCode: res.statusCode,
                statusMessage: res.statusMessage,
                response: responseBody
            }
        });
        console.log(valor);
        
        try {
            await client.set(key, valor);
        } catch (error) {
            console.error("Error al conectar o enviar datos a Redis:", error);
        }
    });
    next();
};

// Desconectar el cliente Redis al cerrar la aplicación
process.on('exit', () => {
    client.disconnect().catch(console.error);
});

```

## codigo materiasRoutes para los endpoints de Materias

```
const express = require('express');
const router = express.Router();


const materiaController = require('../controllers/materiasController');
const querryController = require('../controllers/querrysController');




router.post('/add', materiaController.createMateria);
router.get('/all', materiaController.getMaterias);
router.get('/:id', materiaController.getMateriaById);
router.put('/:id', materiaController.updateMateria);
router.delete('/:id', materiaController.deleteMateria);


router.get('/grupos/:grupoId/materia/:materiaId',querryController.getMateriasespecifica);//Q2

router.get("/docentes/materia/:materiaId", querryController.getDocentesMateria);//Q4
router.get("/grupos/materia/:materiaId", querryController.getGruposMateria);//Q6

router.get("/faltantes/alumno/:id", querryController.getMateriasFaltantes);//Q8
router.get("/docente/:id/alumnos", querryController.getMateriasDocenteConAlumnos);//Q9

module.exports = router;

```

## codigo de SchoolRoutes para los endpoints de Alumnos

```
const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolControllers');
const querryController = require('../controllers/querrysController');


router.post('/add', schoolController.createAlumno);
router.get('/all', schoolController.getAllAlumnos);
router.get('/:id', schoolController.getAlumnoById);
router.put('/:id', schoolController.updateAlumno);
router.delete('/:id', schoolController.deleteAlumno);

router.get('/:id/materias-cursadas',querryController.getMateriasCursadas);//Q1
router.get('/:id/calificaciones',querryController.getCalificaciones);//Q3
router.get("/calificacion/:materiaId", querryController.getAlumnosConAltaCalificacion);//Q5
router.get(":id/horario", querryController.getMateriasHorario);//Q7
module.exports = router;
```
