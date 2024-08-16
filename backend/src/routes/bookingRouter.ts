import express from "express";
import { getBookings } from "../controllers/bookings/getBookings";
import { createBooking } from "../controllers/bookings/createBooking";
import { deleteBooking } from "../controllers/bookings/deleteBooking";
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/user/:email", authMiddleware, getBookings);
router.post("/", authMiddleware, createBooking);
router.delete("/:id", authMiddleware, deleteBooking);

export const bookingRouter = router;
