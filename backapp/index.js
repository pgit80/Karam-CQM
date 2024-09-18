const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const queryRoute = require("./routes/queryRoute");
const adRoute = require("./routes/adRoute");

dotenv.config();
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connection Done 👍"))
  .catch((err) => console.log("Error Found 😒", err));

//middleware
app.use(express.json());
app.use(cors());
app.use(adRoute);
app.use(queryRoute);

app.use(userRouter);
app.listen(PORT, () => console.log(`Server Started on ${PORT}`));
