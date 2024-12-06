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



