import { Router } from 'express';
import {getStudent, postStudent} from '../controllers/students.controller.js'


const router = Router();

//TODO: Migrar a patrón controller:

router.get('/',getStudent);

router.post('/',postStudent);

export default router;