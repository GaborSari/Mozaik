
import express from 'express';
import CountyController from '../controllers/county.controller';

var router = express.Router();

router.get('/', CountyController.getList);
router.post('/update', CountyController.update);
router.post('/add', CountyController.add);
router.post('/delete', CountyController.delete);

export default router;