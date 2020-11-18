import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => res.json({username:'bryan'}));

export default router;