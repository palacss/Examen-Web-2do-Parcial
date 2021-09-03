const {VehiculoRoutes} = require('./index.routes');
const Express = require('express');
const Api = Express();

Api.use(Express.json());
Api.use('/MicroservicioVihiculos1', VehiculoRoutes);

module.exports = Api;