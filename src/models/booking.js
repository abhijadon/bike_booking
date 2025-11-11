const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true, 
    }, 
    bikeId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Bike', 
        required: true, 
    }, 
    ownerId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true,
     },
     startDate: {
        type: Date, 
        required: true, 
     },
     endDate: {
        type: Date, 
        required: true, 
     }, 
     totalPrice: {
        type: Number, 
        required: true, 
     }, 
     status: {
        type: String, 
        enum: ['pending', 'confirmed', 'cancelled', 'completed'], 
        default: 'pending', 
     }, 
     paymentStatus: {
        type: String,
        enum: ['unpaid', 'paid', 'refunded'], 
        default: 'unpaid', 
     },
     pickuplocation: String,
     droplocation: String,
    },
{timestamps: true});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = { Booking };