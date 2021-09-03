const { Router } = require('express');

const {VehiculoController} = require('../controllers/index');

  const router = Router();

//recuperar todos los Vehiculos en la BD
router.get('/Vehiculo', VehiculoController.traer);
//recuperar 1 Vehiculo de la BD con el id del curso
router.get('/Vehiculo/:id', VehiculoController.TraerId);
// crear un Vehiculo en la BD 
router.post('/Vehiculo', VehiculoController.create);
// modificar datos de la BD con el id del Vehiculo
router.put('/Vehiculo/:id', VehiculoController.update);
// eliminar 1 Vehiculo de la BD con el id del curso
router.delete('/Vehiculo/:id', VehiculoController.deleted);
/** exportar rutas */
module.exports = router;