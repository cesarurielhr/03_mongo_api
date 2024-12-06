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