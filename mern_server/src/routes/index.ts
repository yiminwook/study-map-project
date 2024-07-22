import express from 'express';
import infosController from '../controllers/infos.controller';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'health check!!',
  });
});

router.post('/infos', infosController.createInfo);
router.get('/infos', infosController.getInfos);

export default router;
