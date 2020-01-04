const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pickOrderSchema = new Schema({

    name: {
        type: String,
        default: 'untitled'
    },
    userId: String,
    picks: [Object]
    
}, {
    timestamps: true
});

module.exports = mongoose.model('PickOrder', pickOrderSchema);