const express =require('express');
const { route } = require('.');
const router = express.Router();

const Vehiculos = require('../models/Vehiculo');

router.get('', (req, res)=>{

    res.render('crud', {Vihiculos:Vehiculos})

});

module.exports = router;