const express = require ("express");
const app = express();

const mongoose = require ("mongoose"); // library to help create mongodb database users e.t.c
const dotenv = require ("dotenv"); // library to hide confidential secret keys
const helmet = require ("helmet"); // library to hide vulnerable info in header upon requests
const morgan = require ("morgan"); // give more info about a request, time e.t.c

// Routes
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

// To use dotenv
dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, 
    // { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to MongoDB!")
    }
    );

    // middleware
    app.use(express.json()); // Body parser, that parses info after a request is made
    app.use(helmet());
    app.use(morgan("common"));

    app.use("/api/users", userRoute);
    app.use("/api/auth", authRoute);

    app.listen(8800, () => {
      console.log("Backend server is running!")
})