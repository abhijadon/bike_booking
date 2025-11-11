const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
    removed: {
        type: Boolean,
        default: false,
    },
    enabled: {
        type: Boolean, 
        default: false, 
    }, 
    ownerId: {
         type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
           required: true},
    name: { 
        type: String, 
        required: true},
    brand: String,
    model: String, 
    registrationNumber: {
        type: String, 
        unique: true
    },
    type:{
        type: String,
        enum: ['Scooter', 'Sports', 'Cruiser', 'Electric'], default: 'Scooter'
    },
    color: String,
    fuelType: {
        type: String, 
        enum: ['Petrol', 'Electric'],
    },
    gearType: {
        type: String,
        enum: ['Manual', 'Automatic'], 
    },
    rentPerHour: Number, 
    rentPerDay: Number,
    images: [String],
    documents: {
        rcBook: String, 
        insurance: String, 
        pollutionCertificate: String,
    }, 
    status: {
        type: String, 
        enum: ['available', 'booked', 'maintenance'], 
        default: 'availabel',
    }, 
    location: {
        city: String, 
        state: String, 
        pincode: String, 
    }, 
}, { timestamps: true});

const Bike = mongoose.model('Bike', bikeSchema);
module.exports = {Bike};