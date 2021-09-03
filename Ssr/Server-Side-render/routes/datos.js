const axios = require('axios').default;
const express = require('express');
const route = express.Router();

route.post('/Vehiculos/Enviar', async(req,res)=>{

    const CrearVehiculos ={

        PlacaVehiculo:req.body.PlacaVehiculo,
        NombreConductor:req.body.NombreConductor,
        EspacioAsignado:req.body.EspacioAsignado,
        NumeroTicket:req.body.NumeroTicket,
        FechaEntrada:req.body.FechaEntrada,
        HoraEntrada:req.body.HoraEntrada,
        Estado:req.body.Estado,

    }

    const GuardarVehiculo = await axios.post('http://localhost:8080/MicroservicioVihiculos1/Vehiculo', CrearVehiculos);
    res.redirect('/Vehiculos');

});

module.exports = route;