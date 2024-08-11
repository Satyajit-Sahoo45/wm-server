const userBookingDetails = require("../models/userDetails.model");
const ErrorHandler = require("../utils/ErrorHandler");

const AppointmentBook = async (req, res, next) => {
    try {
        const data = req.body.data;

        const bookingDetails = await userBookingDetails.create(data);
        res.status(201).json({
            success: true,
            bookingDetails,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, error.status));
    }
}

const getAllBookings = async (req, res, next) => {
    try {
        const allBookings = await userBookingDetails.find();
        res.status(200).json({
            success: true,
            data: allBookings,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, error.status));
    }
}

module.exports = {
    AppointmentBook,
    getAllBookings
};