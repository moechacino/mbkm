require("dotenv").config();
const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const cors = require("cors");

const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const mahasiswa = require("./routes/mahasiswa");
// middleware
app.use(cors());
app.use(express.json());

// routess

app.use("/api/mbkm/mahasiswa", mahasiswa);
app.use(notFound); // respon jika route tidak ada
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is lsitening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
