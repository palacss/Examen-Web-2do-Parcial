const mongoose = require("mongoose");
const { Schema } = mongoose;

const VehiculoSchema= new Schema(
    {

            PlacaVehiculo:{ type:String },
            NombreConductor:{ type:String },
            EspacioAsignado:{ type:String },
            NumeroTicket:{ type:String },
            FechaEntrada:{ type:String },
            HoraEntrada:{type:String},
            Estado:{ type:String },
        
    },
    {
        timestamps: { createdAt:true , updatedAt: true }
    }
)

module.exports =  mongoose.model("Vehiculo", VehiculoSchema );