const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    user_id: { type: Number, required: true },
    date: { type: Date, default: new Date() },
    latitude: { type: Number, required: true },
    longtitude: { type: Number, required: true },
    symtoms: { type: String, required: true },
    precondition: { type: Boolean, required: true },
    infected_area: { type: Boolean, required: true },
    infected_person: { type: Boolean, required: true },
    details: { type: String },
    status: { type: String, required: true }
});

module.exports = mongoose.model('reports', reportSchema);