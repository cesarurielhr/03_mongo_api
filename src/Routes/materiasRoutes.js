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