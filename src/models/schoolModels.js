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
