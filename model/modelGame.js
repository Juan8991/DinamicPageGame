const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

// Define Game schema to create documents in Mongo DB
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
        default:"No winner yet"
    }
});

// Virtual schema to create a URL game/:id
/* GameSchema.virtual('url').get(function() {
    return '/game/' + this._id;
}); */

// Export model.
const modelGame= mongoose.model('Game', schemaGame);
module.exports = modelGame;