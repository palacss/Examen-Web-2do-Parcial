const {Vehiculo} =require('../models/index');

const create = async (req, res)=>{
            const nuevoVehiculo= await new Vehiculo(req.body);
            nuevoVehiculo.save()            
            res.json(nuevoVehiculo)
}

const  traer = async (req, res) =>{    
        const Vehiculos = await Vehiculo.find({});
        res.json(Vehiculos);    
};

const TraerId = async(req, res)=>{
        const VehiculoId = await Vehiculo.findById(req.params.id);
        res.json(VehiculoId);
}

const update = async (req, res)=>{       
        const modificar= await Vehiculo.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false})
        await modificar.save()
        res.json({
            msg: 'Vehiculo Modificado'
        });   
}


const deleted = async (req, res)=>{   
        const EliminarVehiculo = await Vehiculo.findByIdAndDelete(req.params.id);
        res.json({
            msg: 'Vehiculo Eliminado'
        });
}


module.exports={
    create,
    traer,
    TraerId,
    update,
    deleted
}