const express = require('express');
const axios = require('axios').default;
const vehiculo = axios.get('http://localhost:8080/MicroservicioVihiculos1/Vehiculo');

const route = express.Router();

route.get('', async(req, res)=>{

    const vehiculos = await vehiculo;
    res.render('vehiculo', {vehiculos:vehiculos.data});
    
});

module.exports = route;