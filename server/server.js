const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./utils/db')
const userDetailsRouter = require('./routes/userDetails.route');
const ErrorMiddleware = require('./utils/error');

const app = express();
dotenv.config()
app.use(express.json());


app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
);

app.use('/api', userDetailsRouter);

app.use(ErrorMiddleware);


app.listen(process.env.PORT, () => {
    console.log(`Server is connected with port ${process.env.PORT}`);
    connectDB();
});