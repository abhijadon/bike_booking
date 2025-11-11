const paymentSchema = new mongoose.Schema({
    bookingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking', 
        required: true, 
    }, 
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true, 
    }, 
    amount: Number, 
    paymentMethod: {
        type: String, 
        enum: ['UPI', 'Card', 'Wallet', 'Cash'], 
    }, 
}, {timestamps: true});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = {Payment};