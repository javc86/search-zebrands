import express from "express";
import { searchController } from "../controllers/repositories";

const router = express.Router();

router.get('/repositories/search', searchController);

export default router;