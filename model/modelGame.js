const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

// Definicion del esquema para la abse de datos
const schemaGame = new Schema({
    type: {
        type: String, 
        trim: true,
        default: ""
    },
    gamers: [{
        idGamer: {
            type: Schema.ObjectId,
        },
        name: {
            type: String,
            required: 'El nombre es requerido'
        }
    }],
    inProgress: {
        type: Boolean, 
        default: true
    },
    winner: {
        type: String, 
        default:""
    }
});
//Exportacion del modelo
const modelGame= mongoose.model('modelGame', schemaGame);
module.exports = modelGame;