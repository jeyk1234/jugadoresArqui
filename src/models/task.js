const mongoose = require('mongoose');
//const { Schema } = mongoose;

var Jugador= mongoose.model('jugador',{
  nombre:   {type: String},
  posicion:   {type: String},
  numeroCamiseta:   {type: Number},
  equipo: {type: String},
  fechaNacimiento:   {type: Date}
  //,detalles: [{
  //  estatura: {type: Number},
  //  peso: {type: Number}
  //   }]

  
},'jugador');

module.exports={Jugador};
/*
const Jugador = new Schema({
    nombre: String,
    numeroCamiseta: Number,
    posicion: String,
    equipo: String,
    fechaNacimiento: Date
});

module.exports = mongoose.model('Jugador', Jugador);
*/