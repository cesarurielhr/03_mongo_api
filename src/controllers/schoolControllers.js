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
