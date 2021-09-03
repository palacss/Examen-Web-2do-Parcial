const mongoose = require("mongoose");
const { Schema } = mongoose;

const VehiculoSchema= new Schema(
    {

            PlacaVehiculo:{ type:String },
            NombreConductor:{ type:String },
            EspacioAsignado:{ type:String },
            NumeroTicket:{ type:String },
            FechaSalido:{ type:String },
            HoraSalida:{type:String},
            NumeroHoras:{type:String},
            CostoHora:{type:String},
            Total:{ type:String },
        
    },
    {
        timestamps: { createdAt:true , updatedAt: true }
    }
)

module.exports =  mongoose.model("Vehiculo", VehiculoSchema );