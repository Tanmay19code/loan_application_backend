const connectToMongoose = require("./database/db");
const morgan = require("morgan");

const cors = require("cors");
const express = require("express");

connectToMongoose();

const app = express();
const PORT = 5000;

const corsOptions = {
  // origin: "http://localhost:3000",
  origin: "https://loan-application-project.herokuapp.com/",
};

app.use(cors(corsOptions));

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.json());

// app.use("/", (req, res) => {
//   res
//     .status(200)
//     .send("This is the Backend Server of Task Manager made by Tanmay Mutalik");
// });
app.use("/api/loan", require("./routes/loan.route.js"));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
