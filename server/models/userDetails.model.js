const mongoose = require('mongoose');

const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userBookingDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"],
    },
    email: {
        type: String,
        required: [true, "Please enter a email"],
        unique: false,
        validate: {
            validator: function (value) {
                return emailRegexPattern.test(value);
            },
            message: "Please enter a valid email",
        },
    },
    phone: {
        type: String,
        required: [true, "Please your phone number"],
    },
    concern: {
        type: String,
        required: [true, "Please enter a concern"],
    }
}, {
    timestamps: true,
});

const userBookingDetails = mongoose.model('BookingDetails', userBookingDetailsSchema);

module.exports = userBookingDetails;