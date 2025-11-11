const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    bikeId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Bike", 
        required: true
    }, 
    rating: {
        type: Number, 
        min: 1, 
        max: 5, 
        required: true
    }, 
    comment: {
        type: String, 
        trim: true
    }. 

}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);
module.exports = {Review};