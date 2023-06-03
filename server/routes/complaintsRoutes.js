import express from 'express'
import { registerComplaints, getComplaints } from '../controller/complaintController.js';

const router = express.Router();


router.post('/registerComplaints', registerComplaints);
router.get('/getComplaints', getComplaints);

export default router;