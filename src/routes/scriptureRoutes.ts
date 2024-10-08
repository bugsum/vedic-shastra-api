import express from 'express';
import { getAllScriptures, addScripture } from '../controllers/scriptureController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * /api/scriptures:
 *   get:
 *     summary: Get all scriptures
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/', getAllScriptures);
router.post('/', protect, addScripture); // Only authenticated users can add

export default router;