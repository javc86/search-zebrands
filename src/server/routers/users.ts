import express from "express";
import { searchController } from "../controllers/users";

const router = express.Router();

router.get('/users/search', searchController);

export default router;