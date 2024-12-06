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
