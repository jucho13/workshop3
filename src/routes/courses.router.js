import { Router } from 'express';
import { getCourses,postCourses } from '../controllers/courses.controller.js';

const router = Router();


router.get('/',getCourses);

router.post('/',postCourses)

export default router;