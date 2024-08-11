const express = require('express');
const { AppointmentBook, getAllBookings } = require('../controller/userDetails.controller');

const userDetailsRouter = express.Router();

userDetailsRouter.post("/book", AppointmentBook)
userDetailsRouter.get("/get-booking", getAllBookings)

module.exports = userDetailsRouter