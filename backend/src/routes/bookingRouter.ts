import express from "express";
import { getBookings } from "../controllers/bookings/getBookings";
import { createBooking } from "../controllers/bookings/createBooking";
import { deleteBooking } from "../controllers/bookings/deleteBooking";

const router = express.Router();

router.get("/user/:email", getBookings);
router.post("/", createBooking);
router.delete("/:id", deleteBooking);

export const bookingRouter = router;
