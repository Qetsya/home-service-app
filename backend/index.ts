import express from "express";
import cors from "cors";

import { businessRouter } from "./src/routes/businessRouter";
import { bookingRouter } from "./src/routes/bookingRouter";
import { categoryRouter } from "./src/routes/categoriesRouter";
const { PORT, connectToDb } = require("./db");

import { authRouter } from "./src/routes/authRouter";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/categories", categoryRouter);
app.use("/businesses", businessRouter);
app.use("/bookings", bookingRouter);

connectToDb().then(() => {
  app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
});
