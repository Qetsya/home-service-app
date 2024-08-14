import express from "express";
import { getCategories } from "../controllers/categories/getCategories";
import { createCategory } from "../controllers/categories/createCategory";

const router = express.Router();

router.get("/", getCategories);
router.post("/", createCategory);

export const categoryRouter = router;
